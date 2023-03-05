import React, { useState, useContext, useEffect } from "react";
import styles from "../../styles/Home.module.css";
import {
  Container,
  Box,
  Avatar,
  Typography,
  Button,
  Modal,
} from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { AuthContext } from "../../contexts/authContext";
import useSubscription from "../../hooks/useSubscription";
import Router from "next/router";
import Link from "next/link";
import PageSeo from "../../components/PageSeo";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function ChildModal({ handleCloseParent, handleOpen }) {
  const [open, setOpen] = React.useState(false);

  const handleOpenModal = () => {
    setOpen(handleOpen);
  };

  useEffect(() => {
    handleOpenModal();
  }, [handleOpen]);

  return (
    <React.Fragment>
      <Modal
        hideBackdrop
        open={open}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box
          sx={{
            ...style,
            width: 250,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography>Success!</Typography>
          <Typography>Cancel scheduled</Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              handleCloseParent();
              Router.push("/");
            }}
          >
            Close
          </Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

const User = () => {
  const [open, setOpen] = useState(false);
  const [openChild, setOpenChild] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const handleOpenChildModal = () => setOpenChild(true);
  const [pageUrl, setPageUrl] = useState();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    setPageUrl(window?.location?.href);
  }, []);

  const dataDoCancelamento = new Date(user?.subsInfo?.cancel_at * 1000)
  const dataCancel = (dataDoCancelamento.getMonth() + 1) + "/" + dataDoCancelamento?.getDate()

  const pageSeoProps = {
    title: "Omnesbet | User Info",
    description: "Check your info and subscription status",
    pageUrl: pageUrl,
  };

  useEffect(() => {
    if (!user) {
      Router.push("/");
    }
  }, []);

  const { cancelSubscription } = useSubscription();

  const handleCancelSubscription = async () => {
    await cancelSubscription({ userId: user?.id });
    handleOpenChildModal();
  };

  const isDesktop = useMediaQuery("(min-width:600px)");

  return (
    <Container sx={{ borderRadius: "15px", backgroundImage: "linear-gradient(to right, #060C23 , black, #060C23)", color: "white" }}>
      <PageSeo seoProps={pageSeoProps} />
      <Box my={8} sx={{ maxHeight: "500px" }}>
        <Box container className={styles.main}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <Box
              sx={{
                display: "flex",
                gap: "20px",
                width: "300px",
                height: "100px",
                alignItems: "center"
              }}
            >
              <Avatar
                sx={{ width: "100px", height: "100px" }}
                alt="Daniel"
                src="data:image/jpeg;base64,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"
              />
              <Typography variant="h5">Hi, {user?.name}</Typography>
            </Box>

            <Box sx={{ display: "flex", flexDirection: !isDesktop ? "column" : "", alignItems: "center", justifyContent: "space-between" }}>
              <Typography variant="h6">
                Your subscription status is: 
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "10px", marginLeft: "10px", background: "blue", fontFamily: "sans-serif", height: "30px", width: "300px", color: "white" }}>
              {user?.subsInfo?.status == "active" ? " ACTIVE" : " DEACTIVATED"}
              </Box>
            </Box>
            {user?.subsInfo?.cancel_at_period_end && <Box sx={{ display: "flex", flexDirection: !isDesktop ? "column" : "", alignItems: "center", justifyContent: "space-between" }}>
              <Typography variant="h6">
                Your plan is scheduled to be canceled at: 
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "10px", marginLeft: "10px", background: "blue", fontFamily: "sans-serif", height: "30px", width: "300px", color: "white" }}>
              {dataCancel}
              </Box>
            </Box>}
            <Box
              sx={{
                display: " flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {user?.subsInfo?.status == "active" ? (
                <>
                { !user?.subsInfo?.cancel_at &&
                <>
                  <Typography variant="h6">Cancel Plan:</Typography>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={handleOpen}
                  >
                    Cancel
                  </Button>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                      >
                        Are you Sure?
                      </Typography>
                      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        By clicking the button down below, you subscription will
                        be valid until the end of the paid month.
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Button
                          variant="contained"
                          color="error"
                          onClick={handleCancelSubscription}
                        >
                          Cancel Subscription
                        </Button>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={handleClose}
                        >
                          Back
                        </Button>
                        <ChildModal
                          handleCloseParent={handleClose}
                          handleOpen={openChild}
                        />
                      </Box>
                    </Box>
                  </Modal>
                  </>
                  }
                </>
              ) : (
                <>
                  <Typography>Activate subscription:</Typography>
                  <Link href={"/payments/all"}>
                    <Button variant="contained" color="error">
                      See Plans
                    </Button>
                  </Link>
                </>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default User;
