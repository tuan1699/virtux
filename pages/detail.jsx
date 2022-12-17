import {
  Box,
  Button,
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
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import BreadCumb from "../components/BreadCumb/BreadCumb";
import Counter from "../components/Counter";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import Item from "../components/Item/Item";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Detail = () => {
  const [value, setValue] = useState(0);
  const [size, setSize] = useState(1);
  const [model, setModel] = useState("VRG07E");
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

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
    marginBottom: "20px",
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
          backgroundImage: `url(./assets/img/background-page.png)`,
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
                <Swiper
                  //   onSwiper={setThumbsSwiper}
                  spaceBetween={10}
                  slidesPerView={3}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper"
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
                <Rating value={5} />

                <StyledDecrDetail
                  sx={{
                    marginTop: "10px",
                  }}
                >
                  Nam tempus turpis at metus scelerisque placerat nulla
                  deumantos solicitud felis. Pellentesque diam dolor, elementum
                  etos lobortis des mollis ut risus. Sedcus faucibus an
                  sullamcorper mattis drostique des commodo pharetras...
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
                    <StyledTitleDetail>Vendor: </StyledTitleDetail>
                    <StyledDecrDetail>3D Reality</StyledDecrDetail>
                  </ListItem>

                  <ListItem sx={{ padding: "0px", minHeight: "50px" }}>
                    <StyledTitleDetail>Type:</StyledTitleDetail>
                    <StyledDecrDetail>Gaming</StyledDecrDetail>
                  </ListItem>

                  <ListItem sx={{ padding: "0px", minHeight: "50px" }}>
                    <StyledTitleDetail>Quantity:</StyledTitleDetail>
                    <Counter />
                  </ListItem>
                </List>

                <Stack
                  direction="row"
                  spacing={2}
                  sx={{
                    margin: "20px 0",
                  }}
                >
                  <Button variant="contained">Add to Cart</Button>
                  <Button variant="contained">Buy it now</Button>
                  <Button variant="contained">Add to wishlist</Button>
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

            <Grid container>
              <Grid item xs={12} sm={6} md={3}>
                <Item />
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <Item />
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <Item />
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <Item />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Detail;
