import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Grid,
  IconButton,
  Link,
  List,
  ListItem,
  Rating,
  Stack,
  styled,
  Tab,
  Tabs,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import BreadCumb from "../../components/BreadCumb/BreadCumb";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, Pagination } from "swiper";
import Item from "../../components/Item/Item";

import { userSelector } from "../../store/selector";
import {
  collection,
  doc,
  getFirestore,
  onSnapshot,
  query,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { app } from "../../lib/firebase";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAuth } from "firebase/auth";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Detail = ({ product, productId, products }) => {
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const user = useSelector(userSelector);
  const [count, setCount] = useState(1);
  const auth = getAuth(app);
  const [value, setValue] = useState(0);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const dispatch = useDispatch();

  const swiperProps = {
    modules: [Navigation, Pagination],
    spaceBetween: 24,
    slidesPerView: 4,
    navigation: false,
  };

  const productsRelated = products.filter((item) =>
    item.categories.includes(product.categories)
  );

  // Add to WishList
  const wishlistRef = collection(getFirestore(app), "wishlist");

  useEffect(() => {
    const q = query(wishlistRef);
    const wishlist = onSnapshot(q, (querySnapshot) => {
      let data = [];
      querySnapshot.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
        console.log(doc);
      });
      setWishlist(data.filter((item) => item.uid == (user && user.uid)));
    });
    return () => wishlist();
  }, []);

  const handleAddtoWishList = async (product) => {
    const check = wishlist.filter(
      (item) => item.uid == user.uid && item.name == product.name
    );

    if (auth.currentUser) {
      if (check.length > 0) {
        toast.info(`${product.name} has been in wishlist`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        const reference = doc(wishlistRef);
        await setDoc(reference, {
          uid: user.uid,
          productId: product.id,
          ...product,
        });
        toast.success(`${product.name} added to wish list successfully`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } else {
      toast.warning(`You need to login to perform this function`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  // Add to Cart

  const cartRef = collection(getFirestore(app), "cart");

  useEffect(() => {
    const q = query(cartRef);
    const wishlist = onSnapshot(q, (querySnapshot) => {
      let data = [];
      querySnapshot.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });
      setCart(data.filter((item) => item.uid == (user && user.uid)));
    });
    return () => wishlist();
  }, []);

  const handleAddtoCart = async (product) => {
    // check product exist
    const check = cart.filter(
      (item) => item.uid == user.uid && item.name == product.name
    );

    if (auth.currentUser) {
      if (check.length > 0) {
        const reference = doc(cartRef, check[0].id);
        await updateDoc(reference, {
          quantity: check[0].quantity + count,
        });
        toast.success(`${product.name} added to cart successfully`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        const reference = doc(cartRef);
        await setDoc(reference, {
          uid: user.uid,
          productId: product.id,
          quantity: count,
          ...product,
        });

        toast.success(`${product.name} added to cart successfully`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } else {
      toast.warning(`You need to login to perform this function`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
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

    <Link
      underline="hover"
      key="2"
      sx={{
        fontFamily: "'Kodchasan', sans-serif",
      }}
      color="#fff"
      href="/shop"
    >
      Shop
    </Link>,

    <Typography
      key="3"
      sx={{
        fontFamily: "'Kodchasan', sans-serif",
        color: "#fff",
        fontSize: "18px",
      }}
    >
      3D VR Headset Glass
    </Typography>,
  ];

  const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    "& .MuiToggleButtonGroup-grouped": {
      margin: theme.spacing(0.5),
      border: 0,
      "&.Mui-disabled": {
        border: "1px solid #000",
      },
      "&:not(:first-of-type)": {
        borderRadius: theme.shape.borderRadius,
      },
      "&:first-of-type": {
        borderRadius: theme.shape.borderRadius,
      },

      fontFamily: "'Kodchasan', sans-serif",
    },
  }));

  const StyledHeadingDetail = styled(Typography)({
    fontSize: "40px",
    fontWeight: "700",
    fontFamily: "'Kodchasan', sans-serif",
    marginBottom: "30px",
  });

  const StyledDecrDetail = styled(Typography)({
    fontSize: "18px",
    fontWeight: "300",
    fontFamily: "'Kodchasan', sans-serif",
  });

  const StyledTitleDetail = styled(Typography)({
    fontSize: "18px",
    fontWeight: "600",
    fontFamily: "'Kodchasan', sans-serif",
    display: "inline-block",
    width: "140px",
  });

  const StyledReview = styled(Box)({
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    borderTop: "0.5px solid #ccc",
    borderBottom: "0.5px solid #ccc",
  });

  const StyledTitle = styled(Typography)({
    fontSize: "18px",
    fontWeight: "600",
    fontFamily: "'Kodchasan', sans-serif",
  });

  const StyledTextHighLight = styled(Box)({
    fontSize: "16px",
    fontWeight: "600",
    fontFamily: "'Kodchasan', sans-serif",
  });

  const StyledReviewDecr = styled(Box)({
    fontSize: "16px",
    fontWeight: "300",
    fontFamily: "'Kodchasan', sans-serif",
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSelectSize = (event, newSize) => {
    setSize(newSize);
  };

  const handleSelectModel = (event, newModel) => {
    setModel(newModel);
  };

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(/assets/img/background-page.png)`,
          minHeight: "900px",
          marginTop: "70px",
        }}
      >
        <BreadCumb breadcrumbs={breadcrumbs} Page={"Product"} />

        <Box
          sx={{
            display: "block",
            bgcolor: "#fff",
            padding: "95px 0px",
            minHeight: "60vh",
          }}
        >
          <Container>
            <Grid container>
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  padding: "20px",
                }}
              >
                <Swiper
                  style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                  }}
                  spaceBetween={10}
                  navigation={true}
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper2"
                >
                  {product.screen_shots.map((item) => {
                    return (
                      <SwiperSlide key={item.id}>
                        <Box
                          sx={{
                            width: "100%",
                            paddingTop: "100%",
                            backgroundImage: `url(${item})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}
                        ></Box>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
                <Swiper
                  spaceBetween={10}
                  slidesPerView={3}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper"
                >
                  {product.screen_shots.map((item) => {
                    return (
                      <SwiperSlide key={item.id}>
                        <Box
                          sx={{
                            width: "170px",
                            paddingTop: "80%",
                            backgroundImage: `url(${item})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}
                        ></Box>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </Grid>

              <Grid item xs={12} md={6}>
                <StyledHeadingDetail>{product.name}</StyledHeadingDetail>
                <Rating value={5} />

                <StyledDecrDetail
                  sx={{
                    marginTop: "10px",
                  }}
                >
                  {product.over_view}
                </StyledDecrDetail>

                <List
                  sx={{
                    padding: "0px",
                  }}
                >
                  <ListItem
                    sx={{
                      padding: "0px",
                      minHeight: "50px",
                    }}
                  >
                    <StyledTitleDetail>Price: </StyledTitleDetail>
                    <StyledDecrDetail>$ {product.price}</StyledDecrDetail>
                  </ListItem>

                  <ListItem sx={{ padding: "0px", minHeight: "50px" }}>
                    <StyledTitleDetail>Vendor: </StyledTitleDetail>
                    <StyledDecrDetail>3D Reality</StyledDecrDetail>
                  </ListItem>

                  <ListItem sx={{ padding: "0px", minHeight: "50px" }}>
                    <StyledTitleDetail>Quantity:</StyledTitleDetail>
                    <ButtonGroup
                      variant="outlined"
                      aria-label="outlined button group"
                    >
                      <Button
                        onClick={() => {
                          setCount(Math.max(count - 1, 1));
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
                        {count}
                      </Button>
                      <Button
                        onClick={() => {
                          setCount(count + 1);
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
                  </ListItem>
                </List>

                <Stack
                  direction="row"
                  spacing={2}
                  sx={{
                    margin: "20px 0",
                  }}
                >
                  <Button
                    variant="contained"
                    onClick={() => handleAddtoCart(product)}
                  >
                    Add to Cart
                  </Button>

                  <Button
                    variant="contained"
                    onClick={() => handleAddtoWishList(product)}
                  >
                    Add to wishlist
                  </Button>
                </Stack>

                <Stack direction="row" spacing={2} alignItems="center">
                  <Typography>Share with us</Typography>
                  <IconButton>
                    <FacebookIcon />
                  </IconButton>

                  <IconButton>
                    <TwitterIcon />
                  </IconButton>

                  <IconButton>
                    <GoogleIcon />
                  </IconButton>
                </Stack>
              </Grid>
            </Grid>

            <Box>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="Product Decription" {...a11yProps(0)} />
                <Tab label="Reviews" {...a11yProps(1)} />
              </Tabs>
            </Box>

            <Box value={value} index={0} hidden={value !== 0}>
              <Typography>
                Nam tempus turpis at metus scelerisque placerat nulla deumantos
                solicitud felis. Pellentesque diam dolor, elementum etos
                lobortis des mollis ut risus. Sedcus faucibus an sullamcorper
                mattis drostique des commodo pharetras loremos.Donec pretium
                egestas sapien et mollis.
              </Typography>
            </Box>

            <Box value={value} index={1} hidden={value !== 1}>
              <Typography>Customer Reviews</Typography>

              <StyledReview>
                <Rating value={5} />
                <StyledTitle>asd</StyledTitle>
                <Typography>
                  <StyledTextHighLight component="span">
                    Tuan Dang{" "}
                  </StyledTextHighLight>
                  on{" "}
                  <StyledTextHighLight component="span">
                    Jan 05, 2021
                  </StyledTextHighLight>
                </Typography>
                <StyledReviewDecr>w214rrf</StyledReviewDecr>
              </StyledReview>

              <StyledReview>
                <Rating value={5} />
                <StyledTitle>asd</StyledTitle>
                <Typography>
                  <StyledTextHighLight component="span">
                    Tuan Dang{" "}
                  </StyledTextHighLight>
                  on{" "}
                  <StyledTextHighLight component="span">
                    Jan 05, 2021
                  </StyledTextHighLight>
                </Typography>
                <StyledReviewDecr>w214rrf</StyledReviewDecr>
              </StyledReview>

              <StyledReview>
                <Rating value={5} />
                <StyledTitle>asd</StyledTitle>
                <Typography>
                  <StyledTextHighLight component="span">
                    Tuan Dang{" "}
                  </StyledTextHighLight>
                  on{" "}
                  <StyledTextHighLight component="span">
                    Jan 05, 2021
                  </StyledTextHighLight>
                </Typography>
                <StyledReviewDecr>w214rrf</StyledReviewDecr>
              </StyledReview>
            </Box>

            <Box
              sx={{
                margin: "20px 0",
              }}
            >
              <StyledHeadingDetail
                sx={{
                  textAlign: "center",
                }}
              >
                Related products
              </StyledHeadingDetail>
            </Box>

            <Box>
              <Swiper {...swiperProps}>
                {productsRelated.map((product) => (
                  <SwiperSlide key={product.id}>
                    <Item product={product} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Box>
          </Container>
          <ToastContainer />
        </Box>
      </Box>
    </>
  );
};

export default Detail;

export const getStaticProps = async (context) => {
  const productId = context.params.productId;

  const res = await fetch(
    "https://63a8fbcd100b7737b987d5fd.mockapi.io/products/" +
      context.params.productId
  );

  const resAll = await fetch(
    "https://63a8fbcd100b7737b987d5fd.mockapi.io/products"
  );

  const product = await res.json();
  const products = await resAll.json();

  return {
    props: {
      product,
      products,
      productId,
    },
  };
};

export async function getStaticPaths() {
  const res = await fetch(
    "https://63a8fbcd100b7737b987d5fd.mockapi.io/products"
  );

  const data = await res.json();

  const paths = data.map((product) => {
    return {
      params: { productId: product.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
