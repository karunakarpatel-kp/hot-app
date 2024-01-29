import { LoadingButton } from "@mui/lab";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextToImageServiceList } from "store/Utils/Constants";
import { sendUserEnteredPrompt } from "store/ai/AIUtilitySlice";
import { callTextToImageService, sendTextToImageUserInputs } from "store/ai/TextToImageSlice/TextToImageSlice";
import { callTextToSpeechService, resetTextToSpeechSlice } from "store/ai/TextToSpeechSlice/TextToSpeechSlice";
import { AppDispatch, RootState } from "store/centralStore";

const TextToImageConverter = () => {
  const dispatch = useDispatch<AppDispatch>();
  const userInputRef = useRef<any>();

  const text2SpeechLoadingStatus = useSelector((state: RootState) => state.TextToImageSlice.textToImageLoadingStatus);

  const [userSelectedMenuItem, setUserSelectedMenuItem] = useState<any>(null);
  const [promptFieldError, setPromptFieldError] = useState<boolean>(false);
  const [userSelectModelError, setUserSelectModelError] = useState<boolean>(false);

  const onChangeUserSelectHandler = (event: SelectChangeEvent) => {
    setUserSelectedMenuItem(event.target.value!);
    const selectedService = TextToImageServiceList.find((service) => service.url === event.target.value!);
    if (selectedService) {
      setUserSelectedMenuItem(selectedService); // ! Dispatch Any Item in Here Only
    }
  };

  const onBtnClickHandler = () => {
    const userPromptMsg = userInputRef.current.value;

    if (userPromptMsg.trim() === "" || userSelectedMenuItem === null) {
      setPromptFieldError(true);
      setUserSelectModelError(true);
    } else if (userPromptMsg.length > 0 || userSelectedMenuItem !== null) {
      setPromptFieldError(false);
      setUserSelectModelError(false);

      const totalOBJ = {
        userSelectedMenuItem,
        userPromptMsg,
      };

      dispatch(sendTextToImageUserInputs(totalOBJ));

      dispatch(callTextToImageService());
    }
  };

  const onTextFieldBlurHandler = () => {
    const userPromptMsg = userInputRef.current.value;
    if (userPromptMsg.trim().length > 0) {
      setPromptFieldError(false);
    }
  };

  const onSelectFieldBlurHandler = () => {
    if (userSelectedMenuItem !== null) {
      setUserSelectModelError(false);
    }
  };

  const clearTextFieldHandler = () => {
    const emptyObj = {
      userPromptMsg: "",
      userSelectedMenuItem: { name: "", url: "" },
    };
    userInputRef.current.value = "";
    setUserSelectedMenuItem(null);
    dispatch(sendUserEnteredPrompt(""));
    dispatch(sendTextToImageUserInputs(emptyObj));
  };

  return (
    <>
      <FormControl fullWidth error={userSelectModelError ? true : false}>
        <InputLabel id="demo-simple-select-label">Select Model</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={userSelectedMenuItem ? userSelectedMenuItem.url : ""}
          label="Select Model"
          onChange={onChangeUserSelectHandler}
          error={userSelectModelError}
          onBlur={onSelectFieldBlurHandler}
        >
          {TextToImageServiceList.map((singleService, index) => {
            return (
              <MenuItem value={singleService.url} key={index}>
                {singleService.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>

      <Box component="form" mt={3}>
        <TextField
          fullWidth
          variant="outlined"
          multiline
          label="Enter Prompt In Here"
          minRows={8}
          // autoFocus
          inputRef={userInputRef}
          error={promptFieldError}
          onBlur={onTextFieldBlurHandler}
          helperText={promptFieldError && "Please Enter Some Message"}
          placeholder="Ex: Astranaut riding a horse on mars"
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
            loadingIndicator={"Generating Image..."}
            onClick={onBtnClickHandler}
            loading={text2SpeechLoadingStatus === "PENDING" ? true : false}
            size="large"
            sx={{ mt: 2, mr: 2, flexGrow: 5 }}
          >
            Generate
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

export default TextToImageConverter;
