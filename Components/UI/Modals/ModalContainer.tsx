import * as React from "react";
import { useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import HeadingSix from "@Components/Elements/Headings/HeadingSix";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "store/centralStore";
import { setOpenModal } from "store/utilitySlice";
import { Alert, AlertTitle, CircularProgress, IconButton } from "@mui/material";
import { Close, CloseOutlined } from "@mui/icons-material";
import Image from "next/image";
import downlaodIMG from "@Public/download.png";
import { useRouter } from "next/router";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "white",
  boxShadow: 24,
  p: 1,
  minHeight: "300px",
  maxHeight: "85%",
  overflowY: "scroll",
};

const ModalContainer = () => {
  const iframeRef = React.useRef<any>();
  const mobileLoadingRef = React.useRef<any>();
  const desktopLoadingRef = React.useRef<any>();
  const dispatch = useDispatch<AppDispatch>();
  const openModalStatus = useSelector((state: RootState) => state.utilitySlice.openModal);
  const getVideoURL = useSelector((state: RootState) => state.utilitySlice.videoURL);
  const [showMessage, setShowMessage] = React.useState<boolean>(false);
  const [modalName, setModalName] = React.useState<string>("");

  const router = useRouter();

  const handleClose = () => {
    dispatch(setOpenModal(false));
  };

  const onCloseBtnClickHandler = () => {
    dispatch(setOpenModal(false));
  };

  const onDownloadClickHandler = () => {
    setShowMessage(true);
  };

  useEffect(() => {
    if (openModalStatus) {
      setShowMessage(false);
    } else {
      setShowMessage(true);
    }
  }, [openModalStatus]);

  // Query the elements
  const iframeEle = iframeRef!;
  const mobileLoadingEle = mobileLoadingRef.current!;
  const desktopLoadingEle = desktopLoadingRef.current!;

  useEffect(() => {
    const handleLoad = () => {
      // loadingEle.style.display = "none";
      desktopLoadingEle.style.display = "none";
      mobileLoadingEle.style.display = "none";
      iframeEle.current.style.opacity = "1";
    };

    if (iframeEle.current) {
      iframeEle.current.addEventListener("load", handleLoad);
    }
  }, [iframeEle, mobileLoadingEle, desktopLoadingEle]);

  // Setting Modal Name Below
  useEffect(() => {
    if (router.pathname === "/youtube-to-mp3") {
      setModalName(" MP3");
    } else if (router.pathname === "/youtube-to-mp4") {
      setModalName("MP4");
    } else if (router.pathname === "/youtube-video-downloader") {
      setModalName("Video");
    }
  }, [router]);

  return (
    <Modal
      open={openModalStatus}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"

      // hideBackdrop
      // sx={{ width: 600 }}
    >
      <Box sx={style} width={{ xs: 380, sm: 350, md: 650, lg: 650 }}>
        <Button
          variant="contained"
          sx={{ position: "absolute", right: 10 }}
          onClick={onCloseBtnClickHandler}
          endIcon={<CloseOutlined />}
        >
          Close
        </Button>
        <HeadingSix title="Download the video " />
        <Box sx={{ textAlign: "center" }}>
          {/* Mobile Devices */}
          <Box display={{ xs: "block", sm: "block", md: "none", lg: "none" }}>
            <Box
              id="loading"
              ref={mobileLoadingRef}
              sx={{
                position: "absolute",
                top: 0,
                height: "100%",
                width: "100%",
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <CircularProgress />
            </Box>
            <iframe
              id="frame"
              src={getVideoURL}
              width={350}
              height={250}
              allowFullScreen
              title="VideoURL"
              loading="eager"
              ref={iframeRef}
            />
          </Box>

          {/* Desktop Devices */}
          <Box display={{ xs: "none", sm: "none", md: "block", lg: "block" }} position="relative">
            <Box
              id="loading"
              ref={desktopLoadingRef}
              sx={{
                position: "absolute",
                top: 0,
                height: "100%",
                width: "100%",
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <CircularProgress />
            </Box>
            <iframe
              id="frame"
              src={getVideoURL}
              width={600}
              height={300}
              allowFullScreen
              title="VideoURL"
              loading="eager"
              ref={iframeRef}
            />
          </Box>

          {!showMessage && (
            <Button
              variant="contained"
              onClick={onDownloadClickHandler}
              sx={{ mt: 2, mb: 2, width: "70%" }}
              disableElevation
            >
              {/* {`Download ${router.pathname === "/youtube-to-mp3" ? "Audio" : "Video"}`} */}
              Download{`${modalName}`}
            </Button>
          )}
        </Box>

        {showMessage && (
          <>
            <Alert severity="success">
              <AlertTitle>Click to start downloading</AlertTitle>
              Click on <strong>more icon</strong> in the iframe video and you can start downloading the full video.
              Please check the below image for reference.
            </Alert>
            <Box sx={{ textAlign: "center", margin: "auto" }}>
              <Image src={downlaodIMG} width={300} height={200} alt="download-image" />
            </Box>
            <Alert severity="info">
              If there is any error loading <strong> {modalName} </strong>, please reload the browser.
            </Alert>
          </>
        )}
      </Box>
    </Modal>
  );
};

export default ModalContainer;
