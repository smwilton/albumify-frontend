import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import { server } from "../../utils/server";
import { Rating, RatingDeleteBtn } from "./MyRatingsAccordianElements";

const MyRatingsAccordian = ({ratings}) => {
    const generaterRatings = () => {
        return ratings.map((rating, key) => (
          <>
            <Rating
              id={rating.album_id}
              key={key}
            >
              <b>Album</b>: {rating.album_name}. &nbsp;<b>Rating</b>:{" "}
              {rating.user_album_rating_rating}
            </Rating>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#9B3675", marginBottom: "20px" }}
              onClick={() => deleteRating(rating.album_id)}
            >
              Delete
            </Button>
          </>
        ));
      };

      function deleteRating(id) {
        deleteRequest(id);
        window.location.reload(true);
      }

      const deleteRequest = async (id) => {
        return await fetch("http://" + server.HOST + "/api/album/" + id + "/rating", {
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
                View My Ratings
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{ borderBottom: "2px solid" }}>
                {generaterRatings()}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      );
}

export default MyRatingsAccordian
