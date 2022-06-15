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
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';


const AdminEditUser = ({user}) => {

    const [form, setForm] = useState({
                                     userId: user.user_id,
                                     firstName: user.user_first_name,
                                     lastName: user.user_last_name,
                                     userRole: user.user_role_id});
    
    // https://sebhastian.com/handlechange-react/
    const handeFormChange = (event) => {
        const { name, value } = event.target;
        console.log('name', name);
        console.log('value', value);
        setForm((prevState) => {
            return {
            ...prevState,
            [name]: value,
            };
        });
        console.log(form);
    }

  const { userId, firstName, lastName, userRole } = form;
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

  const updateUser = () => {
    putData("http://" + server.HOST + "/api/admin/user", {
        user_id: userId,
        user_first_name: firstName,
        user_last_name: lastName,
        user_role_id: userRole
    }).then((data) => {
      if(data.status == 200) {
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
        Update user information
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Update information</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Here you can update the user's information.
          </DialogContentText>
          &nbsp;
          <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              required
              type="text"
              id="outlined-required"
              label="First name"
              name="firstName"
              defaultValue={firstName}
              onChange={handeFormChange}
            />
            <TextField
              required
              id="outlined-required"
              label="Last name"
              name="lastName"
              defaultValue={lastName}
              onChange={handeFormChange}
            />
            <InputLabel id="role-select-label">User's role</InputLabel>
            <Select
              labelId="role-select-label"
              id="role-select"
              value={userRole}
              name="userRole"
              label="Role"
              onChange={handeFormChange}
            >
              <MenuItem value={1}>User</MenuItem>
              <MenuItem value={2}>Admin</MenuItem>
            </Select>
          </div>
        </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={updateUser}>Update</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AdminEditUser