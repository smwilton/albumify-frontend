import { Card, CardImage, Title, Artist, CardContainer, Number, IconButtons, Favourite, Owned, Wanted } from "./TopCardsElements";
import { Link } from "react-router-dom";
import {RiStarSmileFill} from "react-icons/ri";
import {BsFillEmojiHeartEyesFill} from "react-icons/bs";
import {MdOutlineLibraryAddCheck} from "react-icons/md";
import { useState } from "react"
import Cookies from 'js-cookie';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { server } from "../../utils/server";

const TopCards = ({album, favourited, wanted, owned, refresh}) => {

  const [open, setOpen] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");
  const [favouriteAlbum, setFavouriteAlbum] = useState(favourited);
  const [wantedAlbum, setWantedAlbum] = useState(wanted)
  const [ownedAlbum, setOwnedAlbum] = useState(owned)

  const getAccessToken = () => Cookies.get('login');
  const isAuthenticated = () => !!getAccessToken();

  const linkTo = "/album-info/" + album.album_id;
  const [clsFav, setClsFav] = useState(favouriteAlbum ? "pink" : "white");
  const [clsWan, setClsWan] = useState(wantedAlbum ? "pink" : "white");
  const [clsOwn, setClsOwn] = useState(ownedAlbum ? "pink" : "white");
  const image = album.album_id > 500 ? "DJ-still.png" : `${album.album_id}.jpg` ;

  function refreshPage() {
    window.location.reload(true);
  }

  const handleFavourite = async () => {

    if(!isAuthenticated()) {
      setSnackMessage("You need to be logged in to add a favourite album");
      setOpen(true);
    } else {

      let response;
      let message;
      let newButtonColour;

      if(favouriteAlbum) {
        // Remove favourite
        response = await deleteRequest("favourite");
        message = "Album removed from favourites";
        newButtonColour = "white";
      } else {
        // Add favourite
       response = await addRequest("http://" + server.HOST + "/api/user/favourite");
       message = "Album added from favourites";
       newButtonColour = "pink";
      }

      if(response.status === 201 || response.status === 200) {
        setFavouriteAlbum(!favouriteAlbum);
        setSnackMessage(message);
        setOpen(true);
        setClsFav(newButtonColour);
        if(refresh) {
          refreshPage();
        }
      } else {
        setSnackMessage("Error");
        setOpen(true);
      }
    }
  }

  const handleOwned = async () => {

    if(!isAuthenticated()) {
      setSnackMessage("You need to be logged in to add an owned album");
      setOpen(true);
    } else {

      let response;
      let message;
      let newButtonColour;

      if(ownedAlbum) {
        // Remove owned
        response = await deleteRequest("owned");
        message = "Album removed from owned";
        newButtonColour = "white";
      } else {
        // Add owned
       response = await addRequest("http://" + server.HOST + "/api/user/owned");
       message = "Album added from owned";
       newButtonColour = "pink";
      }

      if(response.status === 201 || response.status === 200) {
        setOwnedAlbum(!ownedAlbum);
        setSnackMessage(message);
        setOpen(true);
        setClsOwn(newButtonColour);
        if(refresh) {
          refreshPage();
        }
      } else {
        setSnackMessage("Error");
        setOpen(true);
      }
    }
  }

  const handleWanted = async () => {

    if(!isAuthenticated()) {
      setSnackMessage("You need to be logged in to add a wanted album");
      setOpen(true);
    } else {

      let response;
      let message;
      let newButtonColour;

      if(wantedAlbum) {
        // Remove wanted
        response = await deleteRequest("wanted");
        message = "Album removed from wanted list";
        newButtonColour = "white";
      } else {
        // Add wanted
       response = await addRequest("http://" + server.HOST + "/api/user/wanted");
       message = "Album added to wanted list";
       newButtonColour = "pink";
      }

      if(response.status === 201 || response.status === 200) {
        setWantedAlbum(!wantedAlbum);
        setSnackMessage(message);
        setOpen(true);
        setClsWan(newButtonColour);
        if(refresh) {
          refreshPage();
        }
      } else {
        setSnackMessage("Error");
        setOpen(true);
      }
    }
  }

  const addRequest = async (url) => {
    return await fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "include",   
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: album.album_id
    });
  };

  const deleteRequest = async (type) => {
    return await fetch("http://" + server.HOST + "/api/user/" + type + "/" + album.album_id, {
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
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
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
    <style>{`
        .pink {color: #9B3675}
        .white {color: white}
      `}</style>
      
    <CardContainer>
        <Card>
        <Link to = {linkTo}>
        <Number>{album.album_number}</Number>
          <CardImage src={require(`../../images/covers/${image}`)}/>
          <Title>{album.album_name}</Title>
          <Artist>{album.artist_name}</Artist>
          </Link>
          <IconButtons >
              <Favourite title="Favourite"  className={clsFav}  onClick={handleFavourite}><BsFillEmojiHeartEyesFill/></Favourite>
              <Wanted title="Wanted" className={clsWan}  onClick={handleWanted} ><RiStarSmileFill/></Wanted>
              <Owned title="Owned" className={clsOwn}  onClick={handleOwned}  ><MdOutlineLibraryAddCheck/></Owned>
          </IconButtons>
        </Card>
      </CardContainer>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={snackMessage}
        action={action}
      />
    </>
  );
};

export default TopCards;
