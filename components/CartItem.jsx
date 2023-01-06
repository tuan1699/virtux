import styles from "../styles/CartItem.module.css";

import {
  Box,
  Button,
  ButtonGroup,
  Grid,
  IconButton,
  Stack,
  styled,
  Typography,
} from "@mui/material";

import React from "react";
import Counter from "./Counter";

import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { selectCart } from "../store/features/Cart.slice";
import Link from "next/link";

import {
  getFirestore,
  collection,
  doc,
  deleteDoc,
  onSnapshot,
  query,
  updateDoc,
} from "firebase/firestore";
import { app } from "../lib/firebase";
import { userSelector } from "../store/selector";

import { ToastContainer, toast } from "react-toastify";

const CartItem = ({ product, confirmDialog, setConfirmDialog }) => {
  const dispatch = useDispatch();

  const { incQty, decQty, removeItem } = useSelector(selectCart);
  const cartRef = collection(getFirestore(app), "cart");

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
    color: "#d23369",
  });

  const handleRemoveItem = async (id) => {
    toast.success(`Remove succesfully`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    setConfirmDialog({
      ...confirmDialog,
      isOpen: false,
    });

    const reference = doc(cartRef, id);
    await deleteDoc(reference);
  };

  const incrementCart = async (id, quantity) => {
    const reference = doc(cartRef, id);
    await updateDoc(reference, {
      quantity: quantity + 1,
    });
  };

  const decrementCart = async (id, quantity) => {
    const reference = doc(cartRef, id);
    await updateDoc(reference, {
      quantity: Math.max(quantity - 1, 1),
    });
  };

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
                backgroundImage: `url(${product.thumbnail_1})`,
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
              <StyledItemTitle>
                <Link
                  href={{
                    pathname: "products/[productId]",
                    query: { productId: product.id },
                  }}
                  className={styles["link-item"]}
                >
                  {product.name}
                </Link>
              </StyledItemTitle>

              <StyledItemPrice>{product.price} $</StyledItemPrice>
              <ButtonGroup
                variant="outlined"
                aria-label="outlined button group"
              >
                <Button
                  onClick={() => {
                    decrementCart(product.id, product.quantity);
                  }}
                  variant="outlined"
                  sx={{
                    maxWidth: "30px",
                    maxHeight: "30px",
                  }}
                >
                  -
                </Button>
                <Button
                  sx={{
                    maxWidth: "30px",
                    maxHeight: "30px",
                  }}
                >
                  {product.quantity}
                </Button>
                <Button
                  onClick={() => {
                    incrementCart(product.id, product.quantity);
                  }}
                  variant="outlined"
                  sx={{
                    width: "30px",
                    height: "30px",
                  }}
                >
                  +
                </Button>
              </ButtonGroup>
              <StyledItemPrice
                sx={{
                  marginTop: "15px",
                }}
              >
                <Box
                  component="span"
                  sx={{
                    color: "#000",
                  }}
                >
                  Total:{" "}
                </Box>
                {product.quantity * product.price} $
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
          onClick={() =>
            setConfirmDialog({
              isOpen: true,
              title: "Are you sure to remove this product from Cart",
              subTitle: "You can't undo this operation",
              onConfirm: () => {
                handleRemoveItem(product.id);
              },
            })
          }
        >
          <CloseIcon />
        </IconButton>
      </Box>
    </>
  );
};

export default CartItem;
