// import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import { useState } from "react";
import { server } from "../../utils/server";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Cookies from "js-cookie";

const AddReview = ({ albumId }) => {
  const [review, setReview] = useState("");

  const handeFormChange = (event) => {
    setReview(event.target.value);
  };

  const getAccessToken = () => Cookies.get("login");
  const isAuthenticated = () => !!getAccessToken();

  const [snackMessage, setSnackMessage] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [open, setOpen] = useState(false);

  async function postData(url = "", data = {}) {
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    });
    return response;
  }

  const createReview = () => {
    if (!isAuthenticated()) {
      setSnackMessage("You have to be logged in to review an album");
      setSnackbarOpen(true);
      setOpen(false);
    } else {
      postData(
        "http://" + server.HOST + "/api/album/" + albumId + "/review",
        review
      ).then((data) => {
        if (data.status === 200) {
          setSnackMessage("Review submitted");
          setSnackbarOpen(true);
        } else {
          setSnackMessage("You have already reviewed this album");
          setSnackbarOpen(true);
        }
        setOpen(false);
      });
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <>
      <div>
        <Button variant="contained" color="success" onClick={handleClickOpen}>
          Add Review
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Update information</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Add your review here. It will not be displayed until an admin
              approves it. <b>Max 250 characters</b>.
            </DialogContentText>
            &nbsp;
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  required
                  id="outlined-required"
                  label="Review"
                  name="review"
                  onChange={handeFormChange}
                  value={review}
                />
              </div>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={createReview}>Submit</Button>
          </DialogActions>
        </Dialog>
      </div>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message={snackMessage}
        action={action}
      />
    </>
  );
};

export default AddReview;
