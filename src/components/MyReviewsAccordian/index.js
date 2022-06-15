import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Review, ReviewDeleteBtn } from "./MyReviewsAccordianElements";
import Button from "@mui/material/Button";
import { server } from "../../utils/server";

const MyReviewsAccordian = ({ reviews }) => {
  const generaterReviews = () => {
    return reviews.map((review, key) => (
      <>
        <Review
          id={review.album_id}
          key={key}
          class={review.user_album_review_state_id}
        >
          <b>Album</b>: {review.album_name}. &nbsp;<b>Review</b>:{" "}
          {review.user_album_review}
        </Review>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#9B3675", marginBottom: "20px" }}
          onClick={() => deleteReview(review.album_id)}
        >
          Delete
        </Button>
      </>
    ));
  };

  function deleteReview(id) {
    deleteRequest(id);
    window.location.reload(true);
  }

  const deleteRequest = async (id) => {
    return await fetch("http://" + server.HOST + "/api/album/" + id + "/review", {
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

  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            style={{
              fontFamily: "Lobster",
              fontSize: "30px",
              justifyContent: "center",
            }}
          >
            View My Reviews
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ borderBottom: "2px solid" }}>
            {generaterReviews()}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default MyReviewsAccordian;
