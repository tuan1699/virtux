import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Link,
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import BreadCumb from "../components/BreadCumb/BreadCumb";

import { selectWishList } from "../store/features/Wishlist.slice";
import WishListSlice from "../store/features/Wishlist.slice";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useDispatch, useSelector } from "react-redux";

function createData(image, product, price) {
  return { image, product, price };
}

const rows = [
  createData(
    "./assets/img/cart/cartdemo-1.png",
    "Deluxe Audio Strap",
    "Rs. 3,228.00"
  ),

  createData(
    "./assets/img/cart/cartdemo-2.png",
    "Multifunctional VR",
    "Rs. 2,555.00"
  ),
];

const wishList = () => {
  const dispatch = useDispatch();

  const { productsInWishList, removeItemInWishList } =
    useSelector(selectWishList);

  console.log(productsInWishList);

  const handleRemoveItem = (productId) => {
    dispatch(removeItemInWishList(productId));
  };

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
      Wish List
    </Typography>,
  ];

  const StyledTh = styled(TableCell)({
    fontSize: "18px",
    fontWeight: "700",
    fontFamily: "'Kodchasan', sans-serif",
  });

  const StyledNameProduct = styled(TableCell)({
    fontSize: "16px",
    fontWeight: "600",
    fontFamily: "'Kodchasan', sans-serif",
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
        <BreadCumb breadcrumbs={breadcrumbs} Page={" Wish List"} />

        <Box
          sx={{
            display: "block",
            bgcolor: "#fff",
            padding: "95px 0px",
            minHeight: "60vh",
          }}
        >
          <Container>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead
                  sx={{
                    background: "#ccc",
                  }}
                >
                  <TableRow>
                    <StyledTh align="center">IMAGE</StyledTh>
                    <StyledTh align="center">PRODUCT</StyledTh>
                    <StyledTh align="center">PRICE</StyledTh>
                    <StyledTh align="center">REMOVE</StyledTh>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {productsInWishList.map((product) => (
                    <TableRow
                      key={product.id}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row" align="center">
                        <Box
                          component="img"
                          src={product.thumbnail_1}
                          width="120px"
                          height="100px"
                        ></Box>
                      </TableCell>
                      <StyledNameProduct align="center">
                        {product.name}
                      </StyledNameProduct>

                      <TableCell align="center">{product.price} $</TableCell>

                      <TableCell align="center">
                        <IconButton
                          onClick={() => handleRemoveItem(product.id)}
                        >
                          <DeleteOutlineIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default wishList;
