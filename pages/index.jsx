import {
  Box,
  Typography,
  styled,
  Grid,
  Paper,
  Card,
  CardMedia,
  Button,
  Modal,
  Fade,
} from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { display } from "@mui/system";
import Head from "next/head";
import Header from "../components/Header/Header";
import Item from "../components/Item/Item";
import Review from "../components/Review";
import SliderItem from "../components/SliderItem/SliderItem";
import Footer from "../components/Footer/Footer";

import Backdrop from "@mui/material/Backdrop";

import Slider from "../components/SliderItem/SliderItem";
import { useState } from "react";
import DetailModal from "../components/DetailModal";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   width: "60%",
//   transform: "translate(-50%, -50%)",
//   bgcolor: "background.paper",
//   boxShadow: 24,
//   p: 4,
// };

export default function Home() {
  const StyledSection = styled(Box)({
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    alignItems: "center",
    margin: "100px 0",
  });

  // const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Header />

      <Box sx={{ marginTop: "72px", position: "relative" }}>
        <Slider />

        <Box
          component="img"
          alt="The house from the offer."
          src="./assets/img/hight-light.png"
          sx={{
            position: "absolute",
            bottom: "-1px",
            zIndex: 1,
            display: { xs: "none", md: "block" },
          }}
        ></Box>
      </Box>

      {/* Hight Quality VR */}
      <StyledSection>
        <Typography sx={{ fontSize: "18px", fontWeight: "100" }}>
          High-Quality VR
        </Typography>
        <Typography
          sx={{
            fontSize: "30px",
            fontWeight: "700",
            fontFamily: "'Kodchasan', sans-serif",
          }}
        >
          The Real World Immersion
        </Typography>
        <Box
          sx={{
            display: "block",
            bgcolor: "#d23369",
            width: "50px",
            height: "3px",
          }}
        ></Box>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} lg={3}>
              <Item />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <Item />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <Item />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <Item />
            </Grid>
          </Grid>
        </Box>
      </StyledSection>

      {/* <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <DetailModal />
          </Box>
        </Fade>
      </Modal> */}

      {/* About Project */}
      <Box sx={{ padding: { md: "0 80px" } }}>
        <Grid container bgcolor="#fff1f5">
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                backgroundImage: `url(./assets/img/about-hero.png)`,
                minHeight: "400px",
                height: "100%",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </Grid>
          <Grid item xs={12} md={7}>
            <Box sx={{ padding: "50px" }}>
              <Typography
                sx={{ fontSize: "18px", fontWeight: "100" }}
                mb="25px"
              >
                About the Project
              </Typography>
              <Typography
                sx={{
                  fontSize: "60px",
                  fontWeight: "700",
                  fontFamily: "'Kodchasan', sans-serif",
                  lineHeight: 1,
                  marginBottom: "35px",
                }}
              >
                Reach out & let your mind explore
              </Typography>

              <Box
                sx={{
                  display: "block",
                  bgcolor: "#d23369",
                  width: "60px",
                  height: "5px",
                  marginBottom: "35px",
                }}
              ></Box>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "100",

                  marginBottom: "35px",
                }}
              >
                Immerse yourself in an incredible new worlds, find yourself in
                the center of fascinating universe and try out a new way to play
                with immerse yourself in an incredible new worlds.
              </Typography>

              <Button variant="contained">Explore More</Button>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Lastest Arrivals */}
      <StyledSection>
        <Typography sx={{ fontSize: "18px", fontWeight: "100" }}>
          Latest Arrivals
        </Typography>
        <Typography
          sx={{
            fontSize: "30px",
            fontWeight: "700",
            fontFamily: "'Kodchasan', sans-serif",
          }}
        >
          VR With Better Perspective
        </Typography>
        <Box
          sx={{
            display: "block",
            bgcolor: "#d23369",
            width: "50px",
            height: "3px",
          }}
        ></Box>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} lg={3}>
              <Item />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <Item />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <Item />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <Item />
            </Grid>
          </Grid>
        </Box>
      </StyledSection>

      {/* Our VR Features */}
      <Box sx={{ padding: { md: "0 80px" } }}>
        <Grid container bgcolor="#fff1f5">
          <Grid item xs={12} md={7} sx={{ order: { xs: 2, md: 1 } }}>
            <Box sx={{ padding: "50px" }}>
              <Typography
                sx={{ fontSize: "18px", fontWeight: "100" }}
                mb="25px"
              >
                Our VR Features
              </Typography>
              <Typography
                sx={{
                  fontSize: "60px",
                  fontWeight: "700",
                  fontFamily: "'Kodchasan', sans-serif",
                  lineHeight: 1,
                  marginBottom: "35px",
                }}
              >
                New & Better Features
              </Typography>

              <Box
                sx={{
                  display: "block",
                  bgcolor: "#d23369",
                  width: "60px",
                  height: "5px",
                  marginBottom: "35px",
                }}
              ></Box>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "100",

                  marginBottom: "35px",
                }}
              >
                Donec ipsum neque, tincidunt non auctor at, finibus vitae nunc.
                Fusce sagittis, tortor sed viverra elementum, odio odio tempus
                quam, ac imperdiet dui lacus eu magna.
              </Typography>

              <Button variant="contained">Explore More</Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={5} sx={{ order: { xs: 1, md: 2 } }}>
            <Box
              sx={{
                backgroundImage: `url(./assets/img/about-hero-2.png)`,
                minHeight: "400px",
                height: "100%",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </Grid>
        </Grid>
      </Box>

      {/* Our Prestugious */}
      <StyledSection>
        <Typography sx={{ fontSize: "18px", fontWeight: "100" }}>
          Our Prestigious
        </Typography>
        <Typography
          sx={{
            fontSize: "30px",
            fontWeight: "700",
            fontFamily: "'Kodchasan', sans-serif",
          }}
        >
          Partners
        </Typography>
        <Box
          sx={{
            display: "block",
            bgcolor: "#d23369",
            width: "50px",
            height: "3px",
            marginBottom: "50px",
          }}
        ></Box>

        <Box sx={{ padding: "0 80px" }}>
          <Grid container spacing={4}>
            <Grid
              item
              xs={12}
              sm={6}
              md={2}
              sx={{ marginBottom: { sx: "20px", md: "0px" } }}
            >
              <Box component="img" src="./assets/img/partner-01.png"></Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={2}
              sx={{ marginBottom: { sx: "20px", md: "0px" } }}
            >
              <Box component="img" src="./assets/img/partner-02.png"></Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={2}
              sx={{ marginBottom: { sx: "20px", md: "0px" } }}
            >
              <Box component="img" src="./assets/img/partner-03.png"></Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={2}
              sx={{ marginBottom: { sx: "20px", md: "0px" } }}
            >
              <Box component="img" src="./assets/img/partner-04.png"></Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={2}
              sx={{ marginBottom: { sx: "20px", md: "0px" } }}
            >
              <Box component="img" src="./assets/img/partner-05.png"></Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={2}
              sx={{ marginBottom: { sx: "20px", md: "0px" } }}
            >
              <Box component="img" src="./assets/img/partner-05.png"></Box>
            </Grid>
          </Grid>
        </Box>
      </StyledSection>

      {/* Testimonial */}
      <StyledSection>
        <Typography sx={{ fontSize: "18px", fontWeight: "100" }}>
          Testimonial
        </Typography>
        <Typography
          sx={{
            fontSize: "30px",
            fontWeight: "700",
            fontFamily: "'Kodchasan', sans-serif",
          }}
        >
          What Clients Says
        </Typography>
        <Box
          sx={{
            display: "block",
            bgcolor: "#d23369",
            width: "50px",
            height: "3px",
            marginBottom: "50px",
          }}
        ></Box>
        <Box sx={{ padding: "0 120px" }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Review />
            </Grid>
            <Grid item xs={4}>
              <Review />
            </Grid>
            <Grid item xs={4}>
              <Review />
            </Grid>
          </Grid>
        </Box>
      </StyledSection>
    </div>
  );
}
