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

const AdminEditAlbum = ({ album }) => {
  const [form, setForm] = useState({
    albumId: album.album_id,
    albumYear: album.album_year,
    albumName: album.album_name,
    albumSpotifyId: album.album_spotify_id,
  });

  // https://sebhastian.com/handlechange-react/
  const handeFormChange = (event) => {
    const { name, value } = event.target;
    console.log("name", name);
    console.log("value", value);
    setForm((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const { albumId, albumYear, albumName, albumSpotifyId } = form;
  const [open, setOpen] = useState(false);

  async function putData(url = "", data = {}) {
    const response = await fetch(url, {
      method: "PUT",
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

  const updateAlbum = () => {
    putData("http://" + server.HOST + "/api/admin/album", {
      album_id: albumId,
      album_year: albumYear,
      album_name: albumName,
      album_spotify_id: albumSpotifyId,
    }).then((data) => {
      if (data.status == 200) {
        window.location.reload();
      }
    });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="success" onClick={handleClickOpen}>
        Update album information
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Update information</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Here you can update the albums information.
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
                type="number"
                id="outlined-required"
                label="Album Year"
                name="albumYear"
                defaultValue={albumYear}
                onChange={handeFormChange}
              />
              <TextField
                required
                id="outlined-required"
                type="text"
                label="Album name"
                name="albumName"
                defaultValue={albumName}
                onChange={handeFormChange}
              />
              <TextField
                required
                id="outlined-required"
                type="text"
                label="Album Spotify ID"
                name="albumSpotifyId"
                defaultValue={albumSpotifyId}
                onChange={handeFormChange}
              />
            </div>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={updateAlbum}>Update</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AdminEditAlbum;
