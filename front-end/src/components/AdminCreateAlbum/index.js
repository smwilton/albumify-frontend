import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { server } from "../../utils/server";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Autocomplete from "@mui/material/Autocomplete";

const AdminCreateAlbum = () => {
  const [open, setOpen] = useState(false);
  const [artists, setArtists] = useState([]);
  const [genres, setGenres] = useState([]);
  const [subGenres, setSubGenres] = useState([]);
  const [form, setForm] = useState({
    albumYear: 0,
    albumName: "",
    artistId: 1,
    albumSpotifyId: "",
    genreIds: [],
    subGenresIds: [],
  });
  const {
    albumYear,
    albumName,
    artistId,
    albumSpotifyId,
    genreIds,
    subGenresIds,
  } = form;

  useEffect(() => {
    const getArtists = async () => {
      const artistsFromServer = await fetchArtists();
      setArtists(artistsFromServer);
    };
    const getGenres = async () => {
      const genresFromServer = await fetchGenres();
      setGenres(genresFromServer["genres"]);
      setSubGenres(genresFromServer["sub_genres"]);
    };
    getArtists();
    getGenres();
  }, []);

  const fetchArtists = async () => {
    const res = await fetch("http://" + server.HOST + "/api/admin/artists", {
      method: "GET",
      credentials: "include",
    });
    const data = await res.json();
    return data;
  };

  const fetchGenres = async () => {
    const res = await fetch(
      "http://" + server.HOST + "/api/album/album-genres-sub-genres",
      {
        method: "GET",
        credentials: "include",
      }
    );
    const data = await res.json();
    return data;
  };

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

  const handeGenreChange = (name, value) => {
    let ids = value.map((value) => value.genre_id);
    setForm((prevState) => {
      return {
        ...prevState,
        [name]: ids,
      };
    });
  };

  const handeSubGenreChange = (name, value) => {
    let ids = value.map((value) => value.sub_genre_id);
    setForm((prevState) => {
      return {
        ...prevState,
        [name]: ids,
      };
    });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const createAlbum = () => {
    postData("http://" + server.HOST + "/api/admin/album", {
      album_year: albumYear,
      album_name: albumName,
      artist_id: artistId,
      spotify_id: albumSpotifyId,
      genre_ids: genreIds,
      sub_genre_ids: subGenresIds,
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
        Create album
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create album</DialogTitle>
        <DialogContent>
          <DialogContentText>Here you can create an album</DialogContentText>
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
              <InputLabel id="state-select-label">Artist</InputLabel>
              <Select
                labelId="artist-select-label"
                id="artist-select"
                value={artistId}
                name="testok123"
                label="Artist"
                onChange={handeFormChange}
              >
                {artists.length > 0 &&
                  artists.map((artist, key) => (
                    <MenuItem key={key} value={artist.artist_id}>
                      {artist.artist_name}
                    </MenuItem>
                  ))}
              </Select>
              <TextField
                required
                id="outlined-required"
                type="text"
                label="Album Spotify ID"
                name="albumSpotifyId"
                defaultValue={albumSpotifyId}
                onChange={handeFormChange}
              />
              {/* https://mui.com/components/autocomplete/ */}
              {genres && (
                <>
                  <InputLabel id="genre-select-label">Genres</InputLabel>
                  <Autocomplete
                    multiple
                    id="genre-standard"
                    options={genres}
                    name="genreIds"
                    getOptionLabel={(option) => option.genre_name}
                    defaultValue={[]}
                    onChange={(event, newValue) => {
                      if (newValue) {
                        handeGenreChange("genreIds", newValue);
                      }
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="standard"
                        label="Multiple values"
                        placeholder="Genres"
                      />
                    )}
                  />
                </>
              )}
              {subGenres && (
                <>
                  <InputLabel id="genre-select-label">Sub-Genres</InputLabel>
                  <Autocomplete
                    multiple
                    id="genre-standard"
                    options={subGenres}
                    name="subGenreIds"
                    getOptionLabel={(option) => option.sub_genre_name}
                    defaultValue={[]}
                    onChange={(event, newValue) => {
                      if (newValue) {
                        handeSubGenreChange("subGenreIds", newValue);
                      }
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="standard"
                        label="Multiple values"
                        placeholder="Sub-Genres"
                      />
                    )}
                  />
                </>
              )}
            </div>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={createAlbum}>Create</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AdminCreateAlbum;
