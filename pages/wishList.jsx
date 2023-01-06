import styles from "../styles/WishItem.module.css";

import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  IconButton,
  Paper,
  Stack,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import BreadCumb from "../components/BreadCumb/BreadCumb";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

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

import { ToastContainer, toast } from "react-toastify";

const wishList = () => {
  const [confirmDel, setConfirmDel] = useState(false);
  const [open, setOpen] = useState(false);
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: "",
    subTitle: "",
  });

  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  const auth = getAuth(app);

  // wishList

  const wishlistRef = collection(getFirestore(app), "wishlist");
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const q = query(wishlistRef);
    const wishlist = onSnapshot(q, (querySnapshot) => {
      let data = [];
      querySnapshot.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });
      setWishlist(data.filter((item) => item.uid == (user && user.uid)));
    });
    return () => wishlist();
  }, [user == null ? null : user.uid]);

  const handleRemoveItem = async (productId) => {
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
    const reference = doc(wishlistRef, productId);
    await deleteDoc(reference);
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
    fontSize: "18px",
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
        {console.log(wishlist)}
        <Box
          sx={{
            display: "block",
            bgcolor: "#fff",
            padding: "95px 0px",
            minHeight: "60vh",
          }}
        >
          <Container>
            {auth.currentUser && wishlist.length !== 0 ? (
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
                    {wishlist.map((product) => (
                      <TableRow
                        key={product.id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell
                          component="th"
                          scope="row"
                          align="center"
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <Box
                            sx={{
                              backgroundImage: `url(${product.thumbnail_1})`,
                              backgroundSize: "cover",
                              backgroundRepeat: "no-repeat",
                              backgroundPosition: "center",
                            }}
                            width="120px"
                            height="100px"
                          ></Box>
                        </TableCell>
                        <StyledNameProduct align="center">
                          <Link
                            href={{
                              pathname: "products/[productId]",
                              query: { productId: product.productId },
                            }}
                            className={styles["link-item"]}
                          >
                            {product.name}
                          </Link>
                        </StyledNameProduct>

                        <TableCell
                          align="center"
                          sx={{
                            fontSize: "18px",
                            fontWeight: "600",
                            fontFamily: "'Kodchasan', sans-serif",
                            color: "#d23369",
                          }}
                        >
                          {product.price} $
                        </TableCell>

                        <TableCell align="center">
                          <IconButton
                            onClick={() =>
                              setConfirmDialog({
                                isOpen: true,
                                title:
                                  "Are you sure to remove this product from wishlist",
                                subTitle: "You can't undo this operation",
                                onConfirm: () => {
                                  handleRemoveItem(product.id);
                                },
                              })
                            }
                          >
                            <DeleteOutlineIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
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
                  Nothing found in wishlist!
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

export default wishList;
