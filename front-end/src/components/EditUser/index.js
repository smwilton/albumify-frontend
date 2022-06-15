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
import { useNavigate } from "react-router-dom";
import { server } from "../../utils/server";


const EditUser = ({user}) => {

    const navigate = useNavigate();

    const [form, setForm] = useState({email: user.user_email, 
                                     firstName: user.user_first_name,
                                     lastName: user.user_last_name,
                                     password: ""});
    
    // https://sebhastian.com/handlechange-react/
    const handeFormChange = (event) => {
        const { name, value } = event.target;
        setForm((prevState) => {
            return {
            ...prevState,
            [name]: value,
            };
        });
        console.log(form);
    }

  const { email, firstName, lastName, password } = form;
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
    putData("http://" + server.HOST + "/api/user", {
        user_email: email,
        user_first_name: firstName,
        user_last_name: lastName,
        user_password: password ? password : null
    }).then((data) => {
      if(data.status == 200) {
        setOpen(false);
        if(form.password) {
            navigate("/signout");
        } else {
            window.location.reload();
        }
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
            Here you can update your user information. If you change your email or password you will be logged out.
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
              type="email"
              id="outlined-required"
              label="Email"
              name="email"
              defaultValue={email}
              onChange={handeFormChange}
            />
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
            <TextField
              required
              id="outlined-required"
              label="New Password"
              name="password"
              type="password"
              defaultValue={password}
              onChange={handeFormChange}
            />
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

export default EditUser
