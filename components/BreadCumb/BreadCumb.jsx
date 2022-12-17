import { Box, Breadcrumbs, Stack, styled, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import React from "react";

const BreadCumb = ({ breadcrumbs, Page }) => {
  return (
    <>
      <Box
        sx={{
          height: "270px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            color: "#fff",
            fontSize: "40px",
            fontFamily: "'Kodchasan', sans-serif",
            fontWeight: "700",
          }}
        >
          {Page}
        </Typography>
        <Stack spacing={2}>
          <Breadcrumbs
            separator={
              <NavigateNextIcon fontSize="small" sx={{ color: "#fff" }} />
            }
            aria-label="breadcrumb"
          >
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>
      </Box>
    </>
  );
};

export default BreadCumb;
