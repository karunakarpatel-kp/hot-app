import { configureStore } from "@reduxjs/toolkit";
import utilitySlice from "./utilitySlice";
import YTAPISlice from "./YTAPISlice";
import imgReducerSlice from "./imgReducerSlice";
import AIUtilitySlice from "./ai/AIUtilitySlice";
import TextToSpeechSlice from "./ai/TextToSpeechSlice/TextToSpeechSlice";
import TextToImageSlice from "./ai/TextToImageSlice/TextToImageSlice";

const store = configureStore({
  reducer: {
    utilitySlice: utilitySlice,
    // YTAPISlice: YTAPISlice,
    // imgReducerSlice: imgReducerSlice,
    // AIUtilitySlice: AIUtilitySlice,
    // TextToSpeechSlice: TextToSpeechSlice,
    TextToImageSlice: TextToImageSlice,
  },
});

export default store;

// Adding Types to RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
