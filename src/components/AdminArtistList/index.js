import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { server } from "../../utils/server";
import Button from "@mui/material/Button";
import AdminEditArtist from "../AdminEditArtist";

const AdminArtistList = () => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const getArtists = async () => {
      const artistsFromServer = await fetchArtists();
      setArtists(artistsFromServer);
    };
    getArtists();
  }, []);

  const handleClickDeleteArtist = (id) => {
    deleteArtist(id);
  };

  const deleteArtist = async (id) => {
    const res = await fetch(
      "http://" + server.HOST + "/api/admin/artist/" + id,
      {
        method: "DELETE",
        credentials: "include",
      }
    );
    const data = await res.text();
    window.location.reload();
  };

  const fetchArtists = async () => {
    const res = await fetch("http://" + server.HOST + "/api/admin/artists", {
      method: "GET",
      credentials: "include",
    });
    const data = await res.json();
    return await data;
  };

  // https://mui.com/components/tables/
  const createArtistsTable = () => {
    return (
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">ID</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Edit</TableCell>
                <TableCell align="center">Delete</TableCell>
              </TableRow>
            </TableHead>
            {artists.length > 0 && (
              <TableBody>
                {Object.values(artists).map((artist, key) => (
                  <TableRow
                    key={key}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="center" component="th" scope="artist">
                      {artist.artist_id}
                    </TableCell>
                    <TableCell align="center">{artist.artist_name}</TableCell>
                    <TableCell align="center">
                      <AdminEditArtist artist={artist} />
                    </TableCell>
                    <TableCell align="center">
                      <Button
                        variant="contained"
                        color="warning"
                        onClick={() =>
                          handleClickDeleteArtist(artist.artist_id)
                        }
                      >
                        Delete artist
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            )}
          </Table>
        </TableContainer>
      </Paper>
    );
  };

  return (
    <>
      <h2>Artists</h2>
      {!!artists && createArtistsTable()}
    </>
  );
};

export default AdminArtistList;
