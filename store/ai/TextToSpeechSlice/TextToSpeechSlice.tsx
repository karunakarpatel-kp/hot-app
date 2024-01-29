import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { config } from "process";
import { RootState } from "store/centralStore";
import { setShowSnackBar } from "store/utilitySlice";

interface TextToSpeechProps {
  text2SpeechData: any;
  text2SpeechDataloading: "PENDING" | "FULLFILLED" | "REJECTED" | "";
}

const initialState = {
  text2SpeechData: null,
  text2SpeechDataLoading: "",
};

export const callTextToSpeechService = createAsyncThunk("callTextToSpeechService", async (_, thunkAPI) => {
  const centralState: any = thunkAPI.getState();
  const userEnteredTextInput = centralState.AIUtilitySlice.userEnteredPrompt;
  try {
    const modelFetchRes = await fetch(`${process.env.FACEBOOK_TEXT_TO_SPEECH_URL}`, {
      headers: { Authorization: `Bearer ${process.env.HUGGING_FACE_TOKEN}` },
      method: "POST",
      body: JSON.stringify({
        inputs: userEnteredTextInput,
      }),
    });

    if (!modelFetchRes.ok) {
      throw new Error("Internal Server Error");
    }
    const modelFetchData = await modelFetchRes.blob();
    const blobURL = URL.createObjectURL(modelFetchData);
    thunkAPI.dispatch(setShowSnackBar({ open: true, message: "Generated Successfully", variant: "success" }));
    return blobURL;
  } catch (error) {
    console.log(error, "Error with API Service");
    thunkAPI.dispatch(
      setShowSnackBar({ open: true, message: `Server Experiencing heavy load: ${error}`, variant: "error" })
    );
  }
});

export const TextToSpeechSlice = createSlice({
  name: "TextToSpeech",
  initialState,
  reducers: {
    resetTextToSpeechSlice: (state, action: PayloadAction<any>) => {
      state.text2SpeechData = action.payload;
      state.text2SpeechDataLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(callTextToSpeechService.pending, (state, action: PayloadAction<any>) => {
      state.text2SpeechDataLoading = "PENDING";
      state.text2SpeechData = null;
    });
    builder.addCase(callTextToSpeechService.fulfilled, (state, action: PayloadAction<any>) => {
      if (action.payload === undefined) {
        state.text2SpeechData = null;
        state.text2SpeechDataLoading = "REJECTED";
      } else {
        state.text2SpeechData = action.payload;
        state.text2SpeechDataLoading = "FULFILLED";
      }
    });
    builder.addCase(callTextToSpeechService.rejected, (state, action: PayloadAction<any>) => {
      state.text2SpeechDataLoading = "REJECTED";
      state.text2SpeechData = null;
    });
  },
});

export default TextToSpeechSlice.reducer;

export const { resetTextToSpeechSlice } = TextToSpeechSlice.actions;
