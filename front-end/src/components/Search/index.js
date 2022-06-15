import Navbar from "../Navbar";
import Footer from "../Footer";
import Albums from "../Albums";
import { useState, useEffect } from "react";
import { server } from "../../utils/server";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {
  SearchMondayContainer,
  PageTitle,
  SearchContainerTop,
  SearchContainerBottom,
  SearchGroup,
  SearchHeading,
  SearchByYear,
  MinYearContainer,
  MinYear,
  MaxYear,
  MaxYearContainer,
  SearchByGenre,
  GenreContainer,
  SearchBySubgenre,
  SubgenreContainer,
  GenreOptions,
  SubgenreOptions,
  GenreSubgenreContainer,
  SearchBtn,
  SearchBtnLink,
  ResultsContainer,
} from "./SearchElements";
const Search = () => {
  // USE EFFECT GENRES
  const [genres, setGenres] = useState([]);
  const [subGenres, setSubGenres] = useState([]);
  const [form, setForm] = useState({
    search: "",
    artist_or_album: "album",
    year_from: "",
    year_to: "",
    genre: "",
    sub_genre: "",
  });
  const [results, setResults] = useState([]);

  const { search, artist_or_album, year_from, year_to, genre, sub_genre } =
    form;

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

  const handleOnSubmit = () => {
    fetchSearch();
    console.log(form);
  };

  const fetchSearch = async () => {
    let url = `http://${server.HOST}/api/search?${artist_or_album}=${search}`;
    if (genre !== "") {
      
      url += "&genre=" + genre;
    }
    if (sub_genre !== "") {
      url += "&sub_genre=" + sub_genre;
    }
    if (year_from !== "") {
      url += "&year_from=" + year_from;
    }
    if (year_to !== "") {
      url += "&year_to=" + year_to;
    }
    console.log('url', url);
    const res = await fetch(url, {
      method: "GET",
      credentials: "include",
    });
    const data = await res.json();
    setResults(data);
  };

  useEffect(() => {
    const getGenres = async () => {
      const genresFromServer = await fetchGenres();
      setGenres(genresFromServer["genres"]);
      setSubGenres(genresFromServer["sub_genres"]);
    };
    getGenres();
  }, []);

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

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const createYears = () => {
    let years = [];
    for (let year = 1900; year <= 2030; year++) {
      years.push(year);
    }

    return years;
  };
  const years = createYears();

  return (
    <>
      <SearchMondayContainer>
        <Navbar />
        <PageTitle>Search Page</PageTitle>
        <SearchContainerTop>
          <Box
            sx={{ flexGrow: 1 }}
            component="form"
            noValidate
            autoComplete="off"
          >
            <Grid container spacing={1}>
              <Grid item xs={8}>
                <Item>
                  {" "}
                  <TextField
                    id="outlined-basic"
                    fullWidth
                    sx={{ m: 0 }}
                    label="Search"
                    variant="outlined"
                    name="search"
                    onChange={handleFormChange}
                    defaultValue={search}
                    autoFocus
                  />
                </Item>
              </Grid>
              <Grid item xs={4}>
                <Item>
                  <FormControl fullWidth sx={{ m: 0 }}>
                    <InputLabel id="artist_or_album-select-label">
                      search by...
                    </InputLabel>
                    <Select
                      labelId="artist_or_album-select-label"
                      id="artist_or_album-select"
                      value={artist_or_album}
                      onChange={handleFormChange}
                      name="artist_or_album"
                    >
                      <MenuItem value="album">album</MenuItem>
                      <MenuItem value="artist">artist</MenuItem>
                    </Select>
                  </FormControl>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </SearchContainerTop>
        <SearchContainerBottom>
          <SearchGroup>
            <SearchHeading>year range</SearchHeading>
            <SearchByYear>
              <MinYearContainer
                labelId="year_from-select-label"
                id="year_from-select"
                value={year_from}
                onChange={handleFormChange}
                name="year_from"
              >
                <MinYear value={""}>From</MinYear>
                {years.map((item, index) => {
                  return <MinYear key={index}>{item}</MinYear>;
                })}
              </MinYearContainer>
              <MaxYearContainer
                labelId="year_to-select-label"
                id="year_to-select"
                value={year_to}
                onChange={handleFormChange}
                name="year_to"
              >
                <MaxYear>To</MaxYear>
                {years.map((item, index) => {
                  return <MaxYear key={index}>{item}</MaxYear>;
                })}
              </MaxYearContainer>
            </SearchByYear>
          </SearchGroup>

          <GenreSubgenreContainer>
            <SearchGroup>
              <SearchHeading>GENRE</SearchHeading>
              <SearchByGenre>
                <GenreContainer
                  labelId="genre-select-label"
                  id="genre-select"
                  value={genre}
                  name="genre"
                  label="Genre"
                  onChange={handleFormChange}
                >
                  <GenreOptions>None</GenreOptions>
                  {genres.length > 0 &&
                    genres.map((genre, key) => {
                      return (
                        <GenreOptions key={key} value={genre.genre_name}>
                          {" "}
                          {genre.genre_name}{" "}
                        </GenreOptions>
                      );
                    })}
                </GenreContainer>
              </SearchByGenre>
            </SearchGroup>
            <SearchGroup>
              <SearchHeading>SUBGENRE</SearchHeading>
              <SearchBySubgenre>
                <SubgenreContainer
                  labelId="sub_genre-select-label"
                  id="sub_genre-select"
                  value={sub_genre}
                  name="sub_genre"
                  label="Sub_genre"
                  onChange={handleFormChange}
                >
                  <SubgenreOptions>None</SubgenreOptions>
                  {subGenres.length > 0 &&
                    subGenres.map((sub_genre, key) => {
                      return (
                        <SubgenreOptions
                          key={key}
                          value={sub_genre.sub_genre_name}
                        >
                          {" "}
                          {sub_genre.sub_genre_name}{" "}
                        </SubgenreOptions>
                      );
                    })}
                </SubgenreContainer>
              </SearchBySubgenre>
            </SearchGroup>
          </GenreSubgenreContainer>
        </SearchContainerBottom>
        <SearchBtn>
          <SearchBtnLink onClick={handleOnSubmit}>Search</SearchBtnLink>
        </SearchBtn>
        <ResultsContainer>{results.length > 0 ? <Albums albums={results} refreshOnEvent={false} /> : "No Albums To Show"}</ResultsContainer>
        <Footer />
      </SearchMondayContainer>
    </>
  );
};

export default Search;
