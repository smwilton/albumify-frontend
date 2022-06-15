import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import { server } from "../../utils/server";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

const AdminPendingReviews = () => {
  const [pendingReviews, setPendingReviews] = useState([]);

  useEffect(() => {
    const getPendingReviews = async () => {
      const pendingReviewsFromServer = await fetchPendingReviews();
      setPendingReviews(pendingReviewsFromServer);
    };
    getPendingReviews();
  }, []);

  const fetchPendingReviews = async () => {
    const res = await fetch(
      "http://" + server.HOST + "/api/admin/pending-reviews",
      {
        method: "GET",
        credentials: "include",
      }
    );
    const data = await res.json();
    return await data;
  };

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

  const handeReviewStateChange = (event) => {
    putData("http://" + server.HOST + "/api/admin/pending-review", {
      user_album_review_id: parseInt(event.target.name),
      user_album_review_state_id: event.target.value,
    }).then((data) => {
      if (data.status == 200) {
        window.location.reload();
      }
    });
  };

  // https://mui.com/components/tables/
  const createPendingReviewsTable = () => {
    return (
      <>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Review ID</TableCell>
                <TableCell align="center">Review</TableCell>
                <TableCell align="center">Album</TableCell>
                <TableCell align="center">State</TableCell>
              </TableRow>
            </TableHead>
            {pendingReviews.length > 0 && (
              <TableBody>
                {Object.values(pendingReviews).map((review, key) => (
                  <TableRow
                    key={key}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="center" component="th" scope="review">
                      {review.user_album_review_id}
                    </TableCell>
                    <TableCell align="center">
                      {review.user_album_review}
                    </TableCell>
                    <TableCell align="center">{review.album_name}</TableCell>
                    <TableCell align="center">
                      {" "}
                      <InputLabel id="state-select-label">
                        Review state
                      </InputLabel>
                      <Select
                        labelId="state-select-label"
                        id="state-select"
                        value={review.user_album_review_state_id}
                        name={review.user_album_review_id.toString()}
                        label="Review state"
                        onChange={handeReviewStateChange}
                      >
                        <MenuItem value={1}>Pending</MenuItem>
                        <MenuItem value={2}>Accept</MenuItem>
                        <MenuItem value={3}>Reject</MenuItem>
                      </Select>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            )}
          </Table>
        </TableContainer>
      </>
    );
  };

  return (
    <>
      <h2>Pending reviews</h2>
      {!!pendingReviews && createPendingReviewsTable()}
    </>
  );
};

export default AdminPendingReviews;
