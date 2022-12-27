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

const CartItem = ({ productItem }) => {
  const dispatch = useDispatch();

  const { incQty, decQty, removeItem } = useSelector(selectCart);

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

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
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
                backgroundImage: `url(${productItem.product.thumbnail_1})`,
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
                    query: { productId: productItem.product.id },
                  }}
                  className={styles["link-item"]}
                >
                  {productItem.product.name}
                </Link>
              </StyledItemTitle>

              <StyledItemPrice>{productItem.product.price} $</StyledItemPrice>
              <ButtonGroup
                variant="outlined"
                aria-label="outlined button group"
              >
                <Button
                  onClick={() => {
                    dispatch(decQty(productItem.product.id));
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
                  {productItem.quantity}
                </Button>
                <Button
                  onClick={() => {
                    dispatch(incQty(productItem.product.id));
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
                {productItem.quantity * productItem.product.price} $
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
          onClick={() => handleRemoveItem(productItem.product.id)}
        >
          <CloseIcon />
        </IconButton>
      </Box>
    </>
  );
};

export default CartItem;
