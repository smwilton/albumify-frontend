import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import {useState} from "react";
import { server } from "../../utils/server";

const AdminEditArtist = ({ artist }) => {

  const [form, setForm] = useState({
    artistId: artist.artist_id,
    artistName: artist.artist_name
  });

  // https://sebhastian.com/handlechange-react/
  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setForm((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const { artistId, artistName } = form;
  const [open, setOpen] = React.useState(false);

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

  const updateArtist = () => {
    putData("http://" + server.HOST + "/api/admin/artist", {
    artist_id: artistId,
    artist_name: artistName
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
        Update artist information
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Update information</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Here you can update an artists information.
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
                type="text"
                id="outlined-required"
                label="Artist name"
                name="artistName"
                defaultValue={artistName}
                onChange={handleFormChange}
              />
            </div>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={updateArtist}>Update</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AdminEditArtist;
