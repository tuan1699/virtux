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
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BreadCumb from "../components/BreadCumb/BreadCumb";
import CartItem from "../components/CartItem";
import { selectCart } from "../store/features/Cart.slice";

import {
  getFirestore,
  collection,
  doc,
  deleteDoc,
  onSnapshot,
  query,
} from "firebase/firestore";
import { app } from "../lib/firebase";
import { userSelector } from "../store/selector";
import { getAuth } from "firebase/auth";
import ConfirmDialog from "../components/ConfirmDialog";
import { ToastContainer } from "react-toastify";

const Cart = () => {
  const user = useSelector(userSelector);
  const auth = getAuth(app);

  const cartRef = collection(getFirestore(app), "cart");
  const [carts, setCart] = useState([]);
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: "",
    subTitle: "",
  });

  useEffect(() => {
    const q = query(cartRef);
    const cartlist = onSnapshot(q, (querySnapshot) => {
      let data = [];
      querySnapshot.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });
      setCart(data.filter((item) => item.uid == (user && user.uid)));
    });

    return () => cartlist();
  }, [user == null ? null : user.uid]);

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
          marginTop: { xs: "56px", md: "72px" },
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
            {auth.currentUser && carts.length !== 0 ? (
              <Grid container spacing={4}>
                <Grid item xs={12} md={8}>
                  <StyledHeadingCart>Products</StyledHeadingCart>
                  {carts.length == 0 ? (
                    <Typography>Giỏ hàng trống</Typography>
                  ) : (
                    carts.map((product) => (
                      <CartItem
                        key={product.id}
                        product={product}
                        confirmDialog={confirmDialog}
                        setConfirmDialog={setConfirmDialog}
                      />
                    ))
                  )}

                  <Stack justifyContent="space-between" direction="row">
                    <Button variant="contained">Continue shopping</Button>
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
                    Subtotal:{" "}
                    {carts.reduce((total, cur) => {
                      return (total += cur.price * cur.quantity);
                    }, 0)}{" "}
                    $
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
                    Shipping, taxes, and discounts will be calculated at
                    checkout.
                  </Typography>

                  <Link href="/checkout">
                    <Button variant="contained" sx={{ width: "100%" }}>
                      Proceed to Checkout
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            ) : (
              <Stack direction="column" alignItems="center">
                <Box
                  sx={{
                    width: "150px",
                    height: "150px",
                    backgroundImage: `url(/assets/img/cart/empty-cart.png)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    marginBottom: "30px",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "30px",
                    fontWeight: "700",
                    fontFamily: "'Kodchasan', sans-serif",
                    marginBottom: "20px",
                  }}
                >
                  No Items in cart
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: "400",
                    fontFamily: "'Kodchasan', sans-serif",
                    marginBottom: "20px",
                  }}
                >
                  Add items you want to shop
                </Typography>
                <Link href="/products">
                  <Button variant="contained">Start Shopping</Button>
                </Link>
              </Stack>
            )}
          </Container>
          <ConfirmDialog
            confirmDialog={confirmDialog}
            setConfirmDialog={setConfirmDialog}
          />
          <ToastContainer />
        </Box>
      </Box>
    </>
  );
};

export default Cart;
