import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { RiStarSmileFill } from "react-icons/ri";
import { BsFillEmojiHeartEyesFill } from "react-icons/bs";
import { MdOutlineLibraryAddCheck } from "react-icons/md";
import { Favourite, Owned, Wanted } from "./AlbumFavOwnWanElements";
import { server } from "../../utils/server";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const AlbumFavOwnWan = ({ albumId }) => {
  const [favouriteAlbum, setFavouriteAlbum] = useState(false);
  const [wantedAlbum, setWantedAlbum] = useState(false);
  const [ownedAlbum, setOwnedAlbum] = useState(false);

  const getAccessToken = () => Cookies.get("login");
  const isAuthenticated = () => !!getAccessToken();

  const [open, setOpen] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");

  useEffect(() => {
    if (isAuthenticated()) {
      fetchData();
    }
  }, []);

  async function fetchData() {
    const res = await fetch("http://" + server.HOST + "/api/user", {
      method: "GET",
      credentials: "include",
    });
    const user = await res.json();
    
    const favIds = user.favourite_albums.map((item) => item.album_id);
    setFavouriteAlbum(favIds.includes(Number(albumId)));

    const wantedIds = user.wanted_albums.map((item) => item.album_id);
    setWantedAlbum(wantedIds.includes(Number(albumId)));

    const ownedIds = user.owned_albums.map((item) => item.album_id);
    setOwnedAlbum(ownedIds.includes(Number(albumId)));
  }

  const handleFavourite = async () => {
    if (!isAuthenticated()) {
      setSnackMessage("You need to be logged in to add a favourite album");
      setOpen(true);
    } else {
      let response;
      let message;
      let newButtonColour;

      if (favouriteAlbum) {
        // Remove favourite
        response = await deleteRequest("favourite");
        message = "Album removed from favourites";
        newButtonColour = "white";
        setFavouriteAlbum(false);
      } else {
        // Add favourite
        response = await addRequest(
          "http://" + server.HOST + "/api/user/favourite"
        );
        message = "Album added from favourites";
        newButtonColour = "pink";
        setFavouriteAlbum(true);
      }

      if (response.status === 201 || response.status === 200) {
        setFavouriteAlbum(!favouriteAlbum);
        setSnackMessage(message);
        setOpen(true);
      } else {
        setSnackMessage("Error");
        setOpen(true);
      }
    }
  };

  const handleOwned = async () => {
    if (!isAuthenticated()) {
      setSnackMessage("You need to be logged in to add an owned album");
      setOpen(true);
    } else {
      let response;
      let message;
      let newButtonColour;

      if (ownedAlbum) {
        // Remove owned
        response = await deleteRequest("owned");
        message = "Album removed from owned";
        newButtonColour = "white";
        setOwnedAlbum(false);
      } else {
        // Add owned
        response = await addRequest(
          "http://" + server.HOST + "/api/user/owned"
        );
        message = "Album added from owned";
        newButtonColour = "pink";
        setOwnedAlbum(true);
      }

      if (response.status === 201 || response.status === 200) {
        setOwnedAlbum(!ownedAlbum);
        setSnackMessage(message);
        setOpen(true);
      } else {
        setSnackMessage("Error");
        setOpen(true);
      }
    }
  };

  const handleWanted = async () => {
    if (!isAuthenticated()) {
      setSnackMessage("You need to be logged in to add a wanted album");
      setOpen(true);
    } else {
      let response;
      let message;
      let newButtonColour;

      if (wantedAlbum) {
        // Remove wanted
        response = await deleteRequest("wanted");
        message = "Album removed from wanted list";
        newButtonColour = "white";
        setWantedAlbum(false);
      } else {
        // Add wanted
        response = await addRequest(
          "http://" + server.HOST + "/api/user/wanted"
        );
        message = "Album added to wanted list";
        newButtonColour = "pink";
        setWantedAlbum(true);
      }

      if (response.status === 201 || response.status === 200) {
        setWantedAlbum(!wantedAlbum);
        setSnackMessage(message);
        setOpen(true);
      } else {
        setSnackMessage("Error");
        setOpen(true);
      }
    }
  };

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
      body: albumId,
    });
  };

  const deleteRequest = async (type) => {
    return await fetch(
      "http://" + server.HOST + "/api/user/" + type + "/" + albumId,
      {
        method: "DELETE",
        mode: "cors",
        cache: "no-cache",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
      }
    );
  };

  const handleClose = (event, reason) => {
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
      <style>{`
        .pink {color: #9B3675}
        .white {color: white}
      `}</style>
      <div>
        <Favourite
          title="Favourite"
          className={favouriteAlbum ? "pink" : "white"}
          onClick={handleFavourite}
        >
          <BsFillEmojiHeartEyesFill /> &nbsp;Love
          
        </Favourite>
        <Wanted
          title="Wanted"
          className={wantedAlbum ? "pink" : "white"}
          onClick={handleWanted}
        >
          <RiStarSmileFill /> &nbsp;Want
        </Wanted>
        <Owned
          title="Owned"
          className={ownedAlbum ? "pink" : "white"}
          onClick={handleOwned}
        >
          <MdOutlineLibraryAddCheck /> &nbsp;Own
        </Owned>
      </div>
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

export default AlbumFavOwnWan;
