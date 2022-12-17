import {
  Box,
  Grid,
  IconButton,
  Stack,
  styled,
  Typography,
} from "@mui/material";

import React from "react";
import Counter from "./Counter";

import CloseIcon from "@mui/icons-material/Close";

const CartItem = () => {
  const StyledItemTitle = styled(Typography)({
    fontSize: "24px",
    fontWeight: "700",
    fontFamily: "'Kodchasan', sans-serif",
    marginBottom: "10px",
  });

  const StyledItemType = styled(Typography)({
    fontSize: "18px",
    fontWeight: "300",
    fontFamily: "'Kodchasan', sans-serif",
    marginBottom: "10px",
  });

  const StyledItemPrice = styled(Typography)({
    fontSize: "18px",
    fontWeight: "700",
    fontFamily: "'Kodchasan', sans-serif",
    marginBottom: "10px",
  });

  return (
    <>
      <Box
        position="relative"
        sx={{
          border: "0.5px solid #ccc",
          marginBottom: "20px",
        }}
      >
        <Grid container>
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                backgroundImage: `url(./assets/img/cart/cartdemo-1.png)`,
                width: "100%",
                minHeight: "270px",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></Box>
          </Grid>

          <Grid
            item
            xs={12}
            sm={8}
            sx={{
              padding: "20px",
            }}
          >
            <Stack
              sx={{
                alignItems: { xs: "center", md: "flex-start" },
              }}
            >
              <StyledItemTitle>3D VR Headset Glass</StyledItemTitle>
              <StyledItemType>4.7 / VRG07E</StyledItemType>
              <StyledItemPrice>Rs. 2,528.00</StyledItemPrice>
              <Counter />
              <StyledItemPrice
                sx={{
                  marginTop: "15px",
                }}
              >
                Total : Rs. 2,528.00
              </StyledItemPrice>
            </Stack>
          </Grid>
        </Grid>

        <IconButton
          sx={{
            position: "absolute",
            top: "10px",
            right: "10px",
            zIndex: "1",
            "&:hover": {
              bgcolor: "#d23369",
              color: "#fff",
            },
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
    </>
  );
};

export default CartItem;
