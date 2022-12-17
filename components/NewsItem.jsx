import {
  Box,
  Button,
  Divider,
  Grid,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import { minHeight } from "@mui/system";
import React from "react";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";

const NewsItem = ({ news }) => {
  const StyledTypographyInfo = styled(Typography)({
    display: "flex",
    alignItems: "center",
    fontSize: "18px",
    fontWeight: "200",
    fontFamily: "'Kodchasan', sans-serif",
    marginBottom: "20px",
  });

  const StyledTitleItem = styled(Typography)({
    fontSize: "30px",
    fontWeight: "700",
    fontFamily: "'Kodchasan', sans-serif",
    marginBottom: "20px",
  });

  const StyledDecrItem = styled(Typography)({
    fontSize: "18px",
    fontWeight: "300",
    fontFamily: "'Kodchasan', sans-serif",
    marginBottom: "20px",
  });

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#fff1f5",
          padding: "0px",
        }}
        mb="30px"
      >
        <Grid container>
          <Grid item xs={12} sm={5}>
            <Box
              sx={{
                backgroundImage: `url(${news.thumbnail})`,
                width: "100%",
                minHeight: "400px",
                height: "100%",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={7}
            sx={{
              padding: "30px",
            }}
          >
            <Stack direction="row">
              <StyledTypographyInfo>
                <CalendarMonthIcon
                  sx={{
                    marginRight: "8px",
                    color: "#d23369",
                  }}
                />
                {news.date}
              </StyledTypographyInfo>
              <Divider
                orientation="vertical"
                flexItem
                sx={{
                  margin: "0 15px",
                }}
              />
              <StyledTypographyInfo>
                <LocalOfferOutlinedIcon
                  sx={{
                    marginRight: "8px",
                    color: "#d23369",
                  }}
                />
                {news.type}
              </StyledTypographyInfo>
            </Stack>
            <StyledTitleItem>{news.title}</StyledTitleItem>
            <StyledDecrItem>{news.decr}</StyledDecrItem>
            <Button variant="contained">Read more</Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default NewsItem;
