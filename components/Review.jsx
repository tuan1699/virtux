import { Avatar, AvatarGroup, Rating, Stack, Typography } from "@mui/material";
import React from "react";

const Review = () => {
  return (
    <>
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
          Pellentesque gravida scelerisque pretium. Quisque ut lacus quis neque
          lacinia lacinia eget augue mauris at magna.
        </Typography>
        <Rating name="simple-controlled" value={5} mb="10px" />
        <Avatar
          sx={{
            width: "50px",
            height: "50px",
            margin: "20px 0",
          }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF3f4-ZFXn4tMJI7o4K2Jevg4flyxRwJQpvQ&usqp=CAU"
        />
        <Typography>Art Director</Typography>
      </Stack>
    </>
  );
};

export default Review;
