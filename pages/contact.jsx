import { Box, Container, Grid, Link, styled, Typography } from "@mui/material";
import React from "react";
import BreadCumb from "../components/BreadCumb/BreadCumb";

import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";
import NearMeIcon from "@mui/icons-material/NearMe";

const Contact = () => {
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
      Contact
    </Typography>,
  ];

  const StyledSection = styled(Box)({
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    alignItems: "center",
    // margin: "100px 0",
  });

  const StyledContactInfo = styled(Box)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    gap: "20px",
    border: "1px solid #ccc",
    padding: "20px",
    "&:hover": {
      ".test": {
        border: "1px solid #d23369",
      },
    },
  });

  const StyledIconInfo = styled(Box)({
    width: "50px",
    height: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#d23369",
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
        <BreadCumb breadcrumbs={breadcrumbs} Page={"Contact"} />
        <Box
          sx={{
            backgroundColor: "#fff",
            padding: "95px 0",
          }}
        >
          <Container>
            <StyledSection>
              {/* <Typography sx={{ fontSize: "18px", fontWeight: "100" }}>
                Happy Customers
              </Typography> */}
              <Typography
                sx={{
                  fontSize: "30px",
                  fontWeight: "700",
                  fontFamily: "'Kodchasan', sans-serif",
                }}
              >
                We'd Love To Hear From You
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
              <Typography
                textAlign="center"
                sx={{
                  fontFamily: "'Kodchasan', sans-serif",
                }}
              >
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cumsociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies
              </Typography>
            </StyledSection>

            <Grid container spacing={4} mt={4}>
              <Grid item xs={12} md={4}>
                <StyledContactInfo className="test">
                  <StyledIconInfo>
                    <LocalPhoneIcon sx={{ color: "#fff" }} />
                  </StyledIconInfo>

                  <Typography
                    sx={{
                      fontSize: "26px",
                      fontFamily: "'Kodchasan', sans-serif",
                      fontWeight: "600",
                    }}
                  >
                    Phone
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "'Kodchasan', sans-serif",
                    }}
                  >
                    <Box
                      component="span"
                      sx={{
                        fontWeight: "700",
                      }}
                    >
                      Toll-Free
                    </Box>
                    : 0000 - 123 - 456789
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "'Kodchasan', sans-serif",
                    }}
                  >
                    <Box
                      component="span"
                      sx={{
                        fontWeight: "700",
                      }}
                    >
                      Fax
                    </Box>
                    : 0000 - 123 - 456789
                  </Typography>
                </StyledContactInfo>
              </Grid>

              <Grid item xs={12} md={4}>
                <StyledContactInfo className="test">
                  <StyledIconInfo>
                    <MailIcon sx={{ color: "#fff" }} />
                  </StyledIconInfo>

                  <Typography
                    sx={{
                      fontSize: "26px",
                      fontFamily: "'Kodchasan', sans-serif",
                      fontWeight: "600",
                    }}
                  >
                    Email
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "'Kodchasan', sans-serif",
                    }}
                  >
                    mail@example.com
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "'Kodchasan', sans-serif",
                    }}
                  >
                    support@example.com
                  </Typography>
                </StyledContactInfo>
              </Grid>

              <Grid item xs={12} md={4}>
                <StyledContactInfo className="test">
                  <StyledIconInfo>
                    <NearMeIcon sx={{ color: "#fff" }} />
                  </StyledIconInfo>

                  <Typography
                    sx={{
                      fontSize: "26px",
                      fontFamily: "'Kodchasan', sans-serif",
                      fontWeight: "600",
                    }}
                  >
                    Address
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "'Kodchasan', sans-serif",
                    }}
                  >
                    No: 58 A, East Madison Street,
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "'Kodchasan', sans-serif",
                    }}
                  >
                    Baltimore, MD, USA 4508
                  </Typography>
                </StyledContactInfo>
              </Grid>
            </Grid>

            <Grid container>
              <Grid item xs={12} md={6}></Grid>

              <Grid item xs={12} md={6}>
                <Typography
                  sx={{
                    fontSize: "30px",
                    fontWeight: "700",
                    fontFamily: "'Kodchasan', sans-serif",
                  }}
                >
                  Send us a Message
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
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Contact;
