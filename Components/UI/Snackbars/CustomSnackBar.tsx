import { Box } from "@mui/material";
import { enqueueSnackbar, useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/centralStore";
import { setShowSnackBar } from "store/utilitySlice";

const CustomSnackBar = () => {
  const centralSnackBar = useSelector((state: RootState) => state.utilitySlice.showSnackBar);
  const [openSnackBar, setOpenSnackBar] = useState<boolean>(false);
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(setShowSnackBar({ open: false, message: "", variant: "" }));
    }, 1500);
    // const timeOutId = setTimeout(() => {
    //   dispatch(setShowSnackBar({ open: false, message: "", variant: "" }));
    // }, 1500);

    // return () => clearTimeout(timeOutId);
  }, [centralSnackBar.open]);

  return (
    <>
      <Box display="none">
        {centralSnackBar.open && enqueueSnackbar(centralSnackBar.message, { variant: centralSnackBar.variant })}
      </Box>
    </>
  );
};

export default CustomSnackBar;
