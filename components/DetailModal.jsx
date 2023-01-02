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
  ListItemText,
  Rating,
  Stack,
  styled,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import React, { useState, useRef, useEffect } from "react";

import Counter from "../components/Counter";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";

import { userSelector } from "../store/selector";
import {
  collection,
  doc,
  getFirestore,
  onSnapshot,
  query,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { app } from "../lib/firebase";
import { useSelector } from "react-redux";

const DetailModal = ({ product }) => {
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const user = useSelector(userSelector);

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
    marginBottom: "20px",
  });

  const StyledTitleDetail = styled(Typography)({
    fontSize: "18px",
    fontWeight: "600",
    fontFamily: "'Kodchasan', sans-serif",
    display: "inline-block",
    width: "140px",
  });

  const [count, setCount] = useState(1);

  const [size, setSize] = useState(1);
  const [model, setModel] = useState("VRG07E");
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const handleSelectSize = (event, newSize) => {
    setSize(newSize);
  };

  const handleSelectModel = (event, newModel) => {
    setModel(newModel);
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

    if (check.length > 0) {
      const reference = doc(cartRef, check[0].id);
      await updateDoc(reference, {
        quantity: check[0].quantity + count,
      });
    } else {
      const reference = doc(cartRef);
      await setDoc(reference, {
        uid: user.uid,
        productId: product.id,
        quantity: 1,
        ...product,
      });
    }
  };

  return (
    <>
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
              <SwiperSlide>
                <Box
                  component="img"
                  src="./assets/img/detail/detaildemo-1.png"
                ></Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box
                  component="img"
                  src="./assets/img/detail/detaildemo-2.png"
                ></Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box
                  component="img"
                  src="./assets/img/detail/detaildemo-3.png"
                ></Box>
              </SwiperSlide>
            </Swiper>
          </Grid>

          <Grid item xs={12} md={6}>
            <StyledHeadingDetail>3D VR Headset Glass</StyledHeadingDetail>

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
                <StyledDecrDetail>Rs. 3,990.00</StyledDecrDetail>
              </ListItem>

              <ListItem
                sx={{
                  padding: "0px",

                  minHeight: "50px",
                }}
              >
                <StyledTitleDetail>Size:</StyledTitleDetail>
                <StyledToggleButtonGroup
                  value={size}
                  color="primary"
                  exclusive
                  onChange={handleSelectSize}
                  aria-label="text alignment"
                >
                  <ToggleButton value="1" aria-label="left aligned">
                    4.7
                  </ToggleButton>
                  <ToggleButton value="2" aria-label="centered">
                    5.2
                  </ToggleButton>
                  <ToggleButton value="3" aria-label="right aligned">
                    6.2
                  </ToggleButton>
                </StyledToggleButtonGroup>
              </ListItem>

              <ListItem
                sx={{
                  padding: "0px",
                  minHeight: "50px",
                }}
              >
                <StyledTitleDetail>Model:</StyledTitleDetail>
                <StyledToggleButtonGroup
                  value={model}
                  color="primary"
                  exclusive
                  onChange={handleSelectModel}
                  aria-label="text alignment"
                >
                  <ToggleButton value="VRG07E" aria-label="left aligned">
                    VRG07E
                  </ToggleButton>
                  <ToggleButton value="VRG06E" aria-label="centered">
                    VRG06E
                  </ToggleButton>
                  <ToggleButton value="VRG08E" aria-label="right aligned">
                    VRG08E
                  </ToggleButton>
                </StyledToggleButtonGroup>
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
              <Button variant="contained">Add to wishlist</Button>
            </Stack>

            <StyledDecrDetail
              sx={{
                marginTop: "10px",
              }}
            >
              Nam tempus turpis at metus scelerisque placerat nulla deumantos
              solicitud felis. Pellentesque diam dolor, elementum etos lobortis
              des mollis ut risus. Sedcus faucibus an sullamcorper mattis
              drostique des commodo pharetras...
            </StyledDecrDetail>

            <Link
              href="./detail"
              sx={{
                "&:hover": {
                  color: "#d23369",
                },
              }}
            >
              {" "}
              View Product
            </Link>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default DetailModal;
