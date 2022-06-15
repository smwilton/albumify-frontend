import Button from '@mui/material/Button';
import {useState} from "react";
import { useNavigate } from "react-router-dom";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle'
import { server } from "../../utils/server";
import Cookies from 'js-cookie';

const DeleteMe = () => {

    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    async function deleteRequest(url = "") {
        const response = await fetch(url, {
          method: "DELETE",
          mode: "cors",
          cache: "no-cache",
          credentials: "include",   
          headers: {
            "Content-Type": "application/json",
          },
          redirect: "follow",
          referrerPolicy: "no-referrer"
        });
        return response;
      }
    
      const deleteUser = () => {
        deleteRequest("http://" + server.HOST + "/api/user")
        .then((data) => {
          if(data.status == 200) {
            setOpen(false);
            Cookies.remove('login');
            navigate("/");
          }
        });
      };

    return (
        <>
        <Button variant="contained" color="warning" onClick={handleClickOpen}>
            Delete my account
        </Button>
        <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Update information</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete your account?
          </DialogContentText>
          &nbsp;
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={deleteUser}>Delete</Button>
        </DialogActions>
      </Dialog>
        </>
    )
}

export default DeleteMe
