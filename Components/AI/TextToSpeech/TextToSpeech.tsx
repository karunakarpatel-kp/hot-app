import { LoadingButton } from "@mui/lab";
import { Box, Button, ButtonGroup, FormControl, MenuItem, Select, Stack, TextField } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendUserEnteredPrompt } from "store/ai/AIUtilitySlice";
import { callTextToSpeechService, resetTextToSpeechSlice } from "store/ai/TextToSpeechSlice/TextToSpeechSlice";
import { AppDispatch, RootState } from "store/centralStore";

const TextToSpeech = () => {
  const dispatch = useDispatch<AppDispatch>();
  const userInputRef = useRef<any>();
  const text2SpeechLoadingStatus = useSelector((state: RootState) => state.TextToSpeechSlice.text2SpeechDataLoading);
  const text2SpeechData = useSelector((state: RootState) => state.TextToSpeechSlice.text2SpeechData);
  const [promptFieldError, setPromptFieldError] = useState<boolean>(false);

  const onBtnClickHandler = () => {
    const userPromptMsg = userInputRef.current.value;
    if (userPromptMsg.trim() === "") {
      setPromptFieldError(true);
    } else if (userPromptMsg.length > 0) {
      setPromptFieldError(false);
      dispatch(sendUserEnteredPrompt(userPromptMsg));
      dispatch(callTextToSpeechService());
    }
  };

  const onBlurHandler = () => {
    const userPromptMsg = userInputRef.current.value;
    if (userPromptMsg.trim().length > 0) {
      setPromptFieldError(false);
    }
  };

  const clearTextFieldHandler = () => {
    userInputRef.current.value = "";
    userInputRef.current.focus();
    dispatch(sendUserEnteredPrompt(""));
    dispatch(resetTextToSpeechSlice(null));
  };

  return (
    <>
      <Box component="form" boxShadow={{ xs: 0, sm: 0, md: 0, lg: 0 }}>
        <TextField
          fullWidth
          variant="outlined"
          multiline
          label="Enter Prompt In Here"
          minRows={8}
          autoFocus
          inputRef={userInputRef}
          error={promptFieldError}
          onBlur={onBlurHandler}
          helperText={promptFieldError && "Please Enter Some Message"}
          sx={{
            maxHeight: "400px",
            overflowY: "auto",
            "&.MuiFormLabel-root, .MuiInputLabel-root": { marginTop: "5px" },
          }}
        />

        <Box display="flex" flexGrow="1" width="100%">
          <LoadingButton
            variant="contained"
            disableElevation
            loadingIndicator={"Loading..."}
            onClick={onBtnClickHandler}
            loading={text2SpeechLoadingStatus === "PENDING" ? true : false}
            size="large"
            sx={{ mt: 2, mr: 2, flexGrow: 5 }}
          >
            {text2SpeechLoadingStatus === "PENDING" ? "Loading..." : "Generate"}
          </LoadingButton>
          <Button
            variant="contained"
            disableElevation
            size="large"
            sx={{ mt: 2, flexGrow: 1 }}
            onClick={clearTextFieldHandler}
          >
            Clear
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default TextToSpeech;
