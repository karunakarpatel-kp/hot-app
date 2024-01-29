import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InitialStateProps {
  userEnteredPrompt: string;
}

const initialState: InitialStateProps = {
  userEnteredPrompt: "",
};

export const AIUtilitySlice = createSlice({
  name: "AIUtilitySlice",
  initialState,
  reducers: {
    sendUserEnteredPrompt: (state, action: PayloadAction<string>) => {
      state.userEnteredPrompt = action.payload;
    },
    resetAIUtilitySlice: (state, action: PayloadAction<any>) => {
      state.userEnteredPrompt = initialState.userEnteredPrompt;
    },
  },
});

export default AIUtilitySlice.reducer;

export const { sendUserEnteredPrompt } = AIUtilitySlice.actions;
