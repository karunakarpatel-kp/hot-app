import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface initialStateProps {
  file: {
    inputFileUploaded: null;
    fileURL: string | null;
    fileName: string | null;
    fileSize: number;
    fileType: string | null;
  };
  compressedFile: {
    fileName: null | string;
    fileSize: number;
    fileType: null | string;
    fileURL: null | string;
  };
  sliderValue: number;
}

const initialState: initialStateProps = {
  file: {
    inputFileUploaded: null,
    fileName: null,
    fileURL: null,
    fileSize: 0,
    fileType: null,
  },
  compressedFile: {
    fileName: null,
    fileSize: 0,
    fileType: null,
    fileURL: null,
  },
  sliderValue: 70,
};
const imgReducerSlice = createSlice({
  name: "Image Reducer Slice",
  initialState,
  reducers: {
    sendUserUploadedFile: (state, action: PayloadAction<any>) => {
      state.file = action.payload;
    },
    sendReducedFile: (state, action: PayloadAction<any>) => {
      state.compressedFile = action.payload;
    },
    sendSliderValue: (state, action: PayloadAction<any>) => {
      state.sliderValue = action.payload;
    },
    resetImgReducerSlice: (state, action: PayloadAction<any>) => {
      (state.compressedFile = initialState.compressedFile),
        (state.file = initialState.file),
        (state.sliderValue = initialState.sliderValue);
    },
  },
});

export default imgReducerSlice.reducer;

export const { sendUserUploadedFile, sendReducedFile, sendSliderValue, resetImgReducerSlice } = imgReducerSlice.actions;
