import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { server } from "../../utils/server";
import TablePagination from "@mui/material/TablePagination";
import AdminEditAlbum from "../AdminEditAlbum";
import Button from "@mui/material/Button";

const AdminAlbumList = () => {
  const [albums, setAlbums] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const getAlbums = async () => {
      const from = 100 * page + 1;
      const to = 100 + from - 1;
      const albumsFromServer = await fetchAlbums(from, to);
      setAlbums(albumsFromServer);
    };
    getAlbums();
  }, [page]);

  const handleClickDeleteAlbum = (id) => {
    deleteAlbum(id);
  };

  const deleteAlbum = async (id) => {
    const res = await fetch(
      "http://" + server.HOST + "/api/admin/album/" + id,
      {
        method: "DELETE",
        credentials: "include",
      }
    );
    const data = await res.json();
    if (data.status === 200) {
      window.location.reload();
    }
  };

  const fetchAlbums = async (from, to) => {
    const res = await fetch(
      "http://" + server.HOST + "/api/album?from=" + from + "&to=" + to,
      {
        method: "GET",
        credentials: "include",
      }
    );
    const data = await res.json();
    return await data;
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    //setAlbums(fetchAlbums(101, 200));
  };

  // https://mui.com/components/tables/
  const createAlbumsTable = () => {
    return (
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">ID</TableCell>
                <TableCell align="center">Number</TableCell>
                <TableCell align="center">Year</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Spotify ID</TableCell>
                <TableCell align="center">Edit</TableCell>
                <TableCell align="center">Delete</TableCell>
              </TableRow>
            </TableHead>
            {albums.length > 0 && (
              <TableBody>
                {Object.values(albums).map((album, key) => (
                  <TableRow
                    key={key}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="center" component="th" scope="album">
                      {album.album_id}
                    </TableCell>
                    <TableCell align="center">{album.album_number}</TableCell>
                    <TableCell align="center">{album.album_year}</TableCell>
                    <TableCell align="center">{album.album_name}</TableCell>
                    <TableCell align="center">
                      {album.album_spotify_id}
                    </TableCell>
                    <TableCell align="center">
                      <AdminEditAlbum album={album} />
                    </TableCell>
                    <TableCell align="center">
                      <Button
                        variant="contained"
                        color="warning"
                        onClick={() => handleClickDeleteAlbum(album.album_id)}
                      >
                        Delete album
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            )}
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[100]}
          component="div"
          count={700}
          rowsPerPage={100}
          page={page}
          onPageChange={handleChangePage}
        />
      </Paper>
    );
  };

  return (
    <>
      <h2>Albums</h2>
      {!!albums && createAlbumsTable()}
    </>
  );
};

export default AdminAlbumList;
