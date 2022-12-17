import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import BreadCumb from "../components/BreadCumb/BreadCumb";
import CartItem from "../components/CartItem";

const Cart = () => {
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      sx={{
        fontFamily: "'Kodchasan', sans-serif",
      }}
      color="#fff"
      href="/"
    >
      Home
    </Link>,

    <Typography
      key="3"
      sx={{
        fontFamily: "'Kodchasan', sans-serif",
        color: "#fff",
        fontSize: "18px",
      }}
    >
      Your Shopping Cart
    </Typography>,
  ];

  const StyledHeadingCart = styled(Typography)({
    fontSize: "30px",
    fontWeight: "700",
    fontFamily: "'Kodchasan', sans-serif",
    marginBottom: "30px",
  });

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(./assets/img/background-page.png)`,
          minHeight: "900px",
          marginTop: "70px",
        }}
      >
        <BreadCumb breadcrumbs={breadcrumbs} Page={" Your Shopping Cart"} />

        <Box
          sx={{
            display: "block",
            bgcolor: "#fff",
            padding: "95px 0px",
            minHeight: "60vh",
          }}
        >
          <Container>
            <Grid container spacing={4}>
              <Grid item xs={12} md={8}>
                <StyledHeadingCart>Products</StyledHeadingCart>
                <CartItem />
                <CartItem />

                <Stack justifyContent="space-between" direction="row">
                  <Button variant="contained">Continue shopping</Button>
                  <Button variant="contained">Update Cart</Button>
                </Stack>
              </Grid>

              <Grid item xs={12} md={4}>
                <StyledHeadingCart>Order Summary</StyledHeadingCart>

                <Typography
                  sx={{
                    fontFamily: "'Kodchasan', sans-serif",
                    fontSize: "18px",
                    color: "#d23369",
                    fontWeight: "700",
                    marginBottom: "15px",
                  }}
                >
                  Subtotal : Rs. 4,808.00
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "'Kodchasan', sans-serif",
                    fontSize: "18px",
                    marginBottom: "15px",
                  }}
                >
                  Special instructions for seller
                </Typography>

                <TextField
                  placeholder="Special instructions for seller"
                  multiline
                  rows={4}
                  maxRows={8}
                  fullWidth="100%"
                />

                <Typography
                  sx={{
                    fontFamily: "'Kodchasan', sans-serif",
                    fontSize: "18px",
                    margin: "15px 0",
                    fontStyle: "italic",
                  }}
                >
                  Shipping, taxes, and discounts will be calculated at checkout.
                </Typography>

                <Button variant="contained" sx={{ width: "100%" }}>
                  Proceed to Checkout
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Cart;
