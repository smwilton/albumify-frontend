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
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";

const AdminCreateArtist = () => {
  const [artist, setArtist] = useState("");

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleArtistChange = (event) => {
    setArtist(event.target.value);
  };

  const createArtist = () => {
    createAlbum();
  };

  const createAlbum = () => {
    postData("http://" + server.HOST + "/api/admin/artist", {
      artist_name: artist,
    }).then((data) => {
      if (data.status == 200) {
        setOpen(false);
      }
    });
  };

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

  return (
    <div>
      <Button variant="contained" color="success" onClick={handleClickOpen}>
        Create artist
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create artist</DialogTitle>
        <DialogContent>
          <DialogContentText>Here you can create an artist.</DialogContentText>
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
                type="text"
                id="outlined-required"
                label="Artist name"
                name="artist"
                defaultValue={artist}
                onChange={handleArtistChange}
              />
            </div>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={createArtist}>Create</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AdminCreateArtist;
