import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "store/centralStore";
import { setShowSnackBar } from "store/utilitySlice";

interface initialStateProps {
  textToImageData: any;
  textToImageLoadingStatus: "" | "PENDING" | "FULFILLED" | "REJECTED";
  textToImageUserInputs: { userPromptMsg: string; userSelectedMenuItem: { name: string; url: string } };
}

const initialState: initialStateProps = {
  textToImageData: null,
  textToImageLoadingStatus: "",
  textToImageUserInputs: {
    userPromptMsg: "",
    userSelectedMenuItem: { name: "", url: "" },
  },
};

export const callTextToImageService = createAsyncThunk("callTextToImageService", async (_, thunkAPI) => {
  const centralState: any = thunkAPI.getState();

  const modelURL = centralState.TextToImageSlice.textToImageUserInputs.userSelectedMenuItem.url!;
  const userPrompt = centralState.TextToImageSlice.textToImageUserInputs.userPromptMsg!;

  const userInputObj = {
    modelURL: modelURL,
    userPrompt: userPrompt,
  };

  try {
    const text2ImageResp = await axios.post("/api/ai/TextToImage", userInputObj, {});
    const text2imageData = await text2ImageResp.data;
    // const imgConstruct = `data:image/jpeg;base64, ${text2imageData}`;
    thunkAPI.dispatch(
      setShowSnackBar({
        open: true,
        message: "Generated Successfully.",
        variant: "success",
      })
    );
    return text2imageData;
  } catch (error) {
    thunkAPI.dispatch(
      setShowSnackBar({
        open: true,
        message: `We are experiencing heavy load on our servers, please try after some time: ${error}`,
        variant: "error",
      })
    );
    console.log(error, "ERROR WITH CLIENT");
  }
});

const TextToImageSlice = createSlice({
  name: "TextToImageSlice",
  initialState,
  reducers: {
    resetTextToImageSlice: (state, action: PayloadAction<any>) => {
      state.textToImageData = null;
      state.textToImageLoadingStatus = "";
      state.textToImageUserInputs = {
        userPromptMsg: "",
        userSelectedMenuItem: {
          name: "",
          url: "",
        },
      };
    },
    sendTextToImageUserInputs: (state, action: PayloadAction<any>) => {
      state.textToImageUserInputs.userPromptMsg = action.payload.userPromptMsg;
      state.textToImageUserInputs.userSelectedMenuItem = action.payload.userSelectedMenuItem;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(callTextToImageService.pending, (state, action: PayloadAction<any>) => {
      state.textToImageData = null;
      state.textToImageLoadingStatus = "PENDING";
    });
    builder.addCase(callTextToImageService.fulfilled, (state, action: PayloadAction<any>) => {
      if (action.payload === undefined) {
        state.textToImageData = null;
        state.textToImageLoadingStatus = "REJECTED";
      } else {
        state.textToImageData = action.payload;
        state.textToImageLoadingStatus = "FULFILLED";
      }
    });
    builder.addCase(callTextToImageService.rejected, (state, action) => {
      state.textToImageData = null;
      state.textToImageLoadingStatus = "REJECTED";
    });
  },
});

export default TextToImageSlice.reducer;

export const { resetTextToImageSlice, sendTextToImageUserInputs } = TextToImageSlice.actions;
