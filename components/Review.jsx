import {
  Avatar,
  AvatarGroup,
  Box,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const Review = ({ review }) => {
  return (
    <>
      <Box>
        <Stack direction="column" alignItems="center">
          <Typography
            sx={{
              fontSize: "100px",
              lineHeight: "0.5",
              fontFamily: "'Kodchasan', sans-serif",
              color: "#d23369",
            }}
          >
            "
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              fontFamily: "'Kodchasan', sans-serif",
              display: "flex",
              justify: "center",
              mb: "10px",
            }}
          >
            {review.comment}
          </Typography>
          <Rating name="simple-controlled" value={5} mb="10px" />
          <Avatar
            sx={{
              width: "100px",
              height: "100px",
              margin: "20px 0",
            }}
            src={review.avatar}
          />
          <Typography>Art Director</Typography>
        </Stack>
      </Box>
    </>
  );
};

export default Review;
