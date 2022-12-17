import {
  Box,
  Button,
  Grid,
  Input,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

import HomeIcon from "@mui/icons-material/Home";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";

const Footer = () => {
  const StyledFooter = styled(Box)({
    backgroundImage: `url(./assets/img/bg-footer.png)`,
    padding: "250px 80px 50px",
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
  });

  const StyledHeadingFooter = styled(Typography)({
    fontSize: "24px",
    fontWeight: "700",
    marginBottom: "20px",
    fontFamily: "'Kodchasan', sans-serif",
  });

  const StyledTitleFooter = styled(Typography)({
    fontSize: "18px",
    fontWeight: "400",
    fontFamily: "'Kodchasan', sans-serif",
    "&:hover": {
      color: "#d23369",
      textDecoration: "none",
    },
  });

  return (
    <>
      <StyledFooter padding="0 80px">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} lg={3}>
            <List>
              <StyledHeadingFooter>CONTACT</StyledHeadingFooter>
              <ListItem>
                <ListItemIcon>
                  <HomeIcon sx={{ color: "#fff" }} />
                </ListItemIcon>
                <StyledTitleFooter>
                  {" "}
                  35 W 46nd Street, Wall Road New York, USA.
                </StyledTitleFooter>
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <LocalPhoneIcon sx={{ color: "#fff" }} />
                </ListItemIcon>

                <StyledTitleFooter>+(000) 1234-56789</StyledTitleFooter>
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <MailIcon sx={{ color: "#fff" }} />
                </ListItemIcon>
                <StyledTitleFooter>tuandangvan1699@gmail.com</StyledTitleFooter>
              </ListItem>
            </List>
          </Grid>

          <Grid item xs={12} sm={6} lg={2}>
            <List>
              <StyledHeadingFooter>SUPPORT</StyledHeadingFooter>
              <ListItem>
                <Link
                  sx={{ textDecoration: "none", color: "inherit" }}
                  href="#"
                  variant="body2"
                >
                  <StyledTitleFooter>Faq</StyledTitleFooter>
                </Link>
              </ListItem>

              <ListItem>
                <Link
                  sx={{ textDecoration: "none", color: "inherit" }}
                  href="#"
                  variant="body2"
                >
                  <StyledTitleFooter>Shipping $ Return</StyledTitleFooter>
                </Link>
              </ListItem>

              <ListItem>
                <Link
                  sx={{ textDecoration: "none", color: "inherit" }}
                  href="#"
                  variant="body2"
                >
                  <StyledTitleFooter>Contact Us</StyledTitleFooter>
                </Link>
              </ListItem>

              <ListItem>
                <Link
                  sx={{ textDecoration: "none", color: "inherit" }}
                  href="#"
                  variant="body2"
                >
                  <StyledTitleFooter>Our Partners</StyledTitleFooter>
                </Link>
              </ListItem>
            </List>
          </Grid>

          <Grid item xs={12} sm={6} lg={2}>
            <List>
              <StyledHeadingFooter>INFO</StyledHeadingFooter>
              <ListItem>
                <Link
                  sx={{ textDecoration: "none", color: "inherit" }}
                  href="#"
                  variant="body2"
                >
                  <StyledTitleFooter>About Us</StyledTitleFooter>
                </Link>
              </ListItem>

              <ListItem>
                <Link
                  sx={{ textDecoration: "none", color: "inherit" }}
                  href="#"
                  variant="body2"
                >
                  <StyledTitleFooter>Our Stores</StyledTitleFooter>
                </Link>
              </ListItem>

              <ListItem>
                <Link
                  sx={{ textDecoration: "none", color: "inherit" }}
                  href="#"
                  variant="body2"
                >
                  <StyledTitleFooter>Size Guide</StyledTitleFooter>
                </Link>
              </ListItem>

              <ListItem>
                <Link
                  sx={{ textDecoration: "none", color: "inherit" }}
                  href="#"
                  variant="body2"
                >
                  <StyledTitleFooter>Our Piercing Service</StyledTitleFooter>
                </Link>
              </ListItem>
            </List>
          </Grid>

          <Grid item xs={12} sm={6} lg={5}>
            <List>
              <StyledHeadingFooter>
                SUBSCRIBE TO OUR NEWSLETTER
              </StyledHeadingFooter>
              <Box
                sx={{
                  width: "100%",
                  bgcolor: "#fff",
                }}
              >
                <Stack direction="row">
                  <Input
                    placeholder="Your email address"
                    sx={{ width: "80%", padding: "12px 30px" }}
                  />

                  <Button
                    variant="contained"
                    sx={{
                      padding: "0px 16px",
                      width: "20%",
                      borderRadius: "0",
                    }}
                  >
                    Sign Up
                  </Button>
                </Stack>
              </Box>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "400",
                  marginTop: "32px",
                  fontFamily: "'Kodchasan', sans-serif",
                }}
              >
                Your email address will be used in accordance with our privacy
                policy
              </Typography>
            </List>
          </Grid>
        </Grid>
      </StyledFooter>
    </>
  );
};

export default Footer;
