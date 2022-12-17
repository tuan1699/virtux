import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";

import AdjustIcon from "@mui/icons-material/Adjust";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import CrisisAlertIcon from "@mui/icons-material/CrisisAlert";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";

import {
  Avatar,
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Rating,
  styled,
} from "@mui/material";
import BreadCumb from "../components/BreadCumb/BreadCumb";
import Item from "../components/Item/Item";

const services = () => {
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
      Services
    </Typography>,
  ];

  const StyledSection = styled(Box)({
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    alignItems: "center",
    // margin: "100px 0",
  });

  const StyledUnderline = styled(Box)({
    display: "block",
    bgcolor: "#d23369",
    width: "50px",
    height: "3px",
    marginBottom: "50px",
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
        <BreadCumb breadcrumbs={breadcrumbs} Page={"Services"} />

        {/* Virtual Reality Hardware */}
        <Box
          sx={{
            display: "block",
            bgcolor: "#fff",
            padding: "95px 0px",
          }}
        >
          <Container>
            <StyledSection>
              <Typography sx={{ fontSize: "18px", fontWeight: "100" }}>
                Reality Instruments
              </Typography>
              <Typography
                sx={{
                  fontSize: "30px",
                  fontWeight: "700",
                  fontFamily: "'Kodchasan', sans-serif",
                }}
              >
                Virtual Reality Hardware
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
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={4}>
                  <Grid item xs={12} md={6}>
                    <Box
                      component="img"
                      src="./assets/img/servies/computing.png"
                    ></Box>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Box
                      component="img"
                      src="./assets/img/servies/headset.png"
                    ></Box>
                  </Grid>
                </Grid>
              </Box>
            </StyledSection>
          </Container>
        </Box>

        {/* Virtual Reality Technology */}

        <Box
          sx={{
            bgcolor: "#d23369",
            padding: "95px 0px",
          }}
        >
          <Container>
            <Grid container alignItems="center" spacing={4}>
              <Grid item xs={12} md={4}>
                <Typography
                  sx={{
                    fontSize: "30px",
                    fontWeight: "700",
                    fontFamily: "'Kodchasan', sans-serif",
                    color: "#fff",
                    marginBottom: "20px",
                  }}
                >
                  Virtual Reality Technology
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: "400",
                    fontFamily: "'Kodchasan', sans-serif",
                    color: "#fff",
                  }}
                >
                  Sed vestibulum nulla elementum auctor tincidunt. Aliquam sit
                  amet cursus mauris. Sed vitae mattis ipsum. Vestibulum enim
                  nulla, sollicitudin ac hendrerit nec, tempor quis nisl
                </Typography>
              </Grid>

              <Grid item xs={12} md={8}>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  alignItems="center"
                  spacing={4}
                >
                  <Box
                    sx={{
                      backgroundImage: "url(./assets/img/servies/reality.png)",
                      width: "340px",
                      height: "340px",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></Box>
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <AdjustIcon sx={{ color: "#fff" }} />
                      </ListItemIcon>
                      <Typography
                        sx={{
                          marginLeft: "-20px",
                          color: "#fff",
                          fontFamily: "'Kodchasan', sans-serif",
                        }}
                      >
                        Responsive
                      </Typography>
                    </ListItem>

                    <ListItem>
                      <ListItemIcon>
                        <AdjustIcon sx={{ color: "#fff" }} />
                      </ListItemIcon>
                      <Typography
                        sx={{
                          marginLeft: "-20px",
                          color: "#fff",
                          fontFamily: "'Kodchasan', sans-serif",
                        }}
                      >
                        Interactive
                      </Typography>
                    </ListItem>

                    <ListItem>
                      <ListItemIcon>
                        <AdjustIcon sx={{ color: "#fff" }} />
                      </ListItemIcon>
                      <Typography
                        sx={{
                          marginLeft: "-20px",
                          color: "#fff",
                          fontFamily: "'Kodchasan', sans-serif",
                        }}
                      >
                        More Realistic
                      </Typography>
                    </ListItem>

                    <ListItem>
                      <ListItemIcon>
                        <AdjustIcon sx={{ color: "#fff" }} />
                      </ListItemIcon>
                      <Typography
                        sx={{
                          marginLeft: "-20px",
                          color: "#fff",
                          fontFamily: "'Kodchasan', sans-serif",
                        }}
                      >
                        Fully Immersive
                      </Typography>
                    </ListItem>

                    <ListItem spacing="10px">
                      <ListItemIcon>
                        <AdjustIcon sx={{ color: "#fff" }} />
                      </ListItemIcon>
                      <Typography
                        sx={{
                          marginLeft: "-20px",
                          color: "#fff",
                          fontFamily: "'Kodchasan', sans-serif",
                        }}
                      >
                        More Affordable
                      </Typography>
                    </ListItem>
                  </List>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Virtual Reality Devices */}

        <Box
          sx={{
            display: "block",
            bgcolor: "#fff",
            padding: "95px 0px",
          }}
        >
          <Container>
            <StyledSection>
              <Typography sx={{ fontSize: "18px", fontWeight: "100" }}>
                More Realistic
              </Typography>
              <Typography
                sx={{
                  fontSize: "30px",
                  fontWeight: "700",
                  fontFamily: "'Kodchasan', sans-serif",
                }}
              >
                Virtual Reality Devices
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
              <Box sx={{ flexGrow: 1 }}>
                <Grid container sx={{ marginBottom: "60px" }}>
                  <Grid item xs={12} sm={6}>
                    <Box
                      component="img"
                      src="./assets/img/servies/architecture.png"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Stack
                      direction="column"
                      justifyContent="space-evenly"
                      height="100%"
                      sx={{
                        padding: "20px 0px 20px 50px",
                      }}
                    >
                      <FlashOnIcon
                        sx={{ fontSize: "50px", color: "#d23369" }}
                      />
                      <Typography
                        sx={{
                          fontSize: "30px",
                          fontFamily: "'Kodchasan', sans-serif",
                          fontWeight: "700",
                          "&:hover": {
                            color: "#d23369",
                          },
                        }}
                      >
                        Virtual Reality for Architecture
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "18px",
                          fontFamily: "'Kodchasan', sans-serif",
                          fontWeight: "400",
                        }}
                      >
                        Pellentesque gravida scelerisque pretium. Quisque ut
                        lacus quis neque lacinia lacinia. Ut eget augue nec
                        ipsum pharetra venenatis. Nullam eget lacus sed lorem
                        vehicula facilisis. Maecenas blandit nisi eu scelerisque
                        tempus.
                      </Typography>
                    </Stack>
                  </Grid>
                </Grid>

                <Grid container sx={{ marginBottom: "60px" }}>
                  <Grid item xs={12} sm={6}>
                    <Stack
                      direction="column"
                      justifyContent="space-evenly"
                      height="100%"
                      sx={{
                        padding: "20px 0px 20px 50px",
                      }}
                    >
                      <CrisisAlertIcon
                        sx={{ fontSize: "50px", color: "#d23369" }}
                      />
                      <Typography
                        sx={{
                          fontSize: "30px",
                          fontFamily: "'Kodchasan', sans-serif",
                          fontWeight: "700",
                          "&:hover": {
                            color: "#d23369",
                          },
                        }}
                      >
                        Virtual Reality for Education
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "18px",
                          fontFamily: "'Kodchasan', sans-serif",
                          fontWeight: "400",
                        }}
                      >
                        Vestibulum ante ipsum primis in faucibus orci luctus et
                        ultrices posuere cubilia curae; Nulla pharetra elit
                        erat, ac rhoncus orci aliquet in. Nullam bibendum elit
                        sed leo malesuada, a lacinia magna elementum. Curabitur
                        vitae sem at libero.
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box
                      component="img"
                      src="./assets/img/servies/education.png"
                    />
                  </Grid>
                </Grid>

                <Grid container sx={{ marginBottom: "60px" }}>
                  <Grid item xs={12} sm={6}>
                    <Box
                      component="img"
                      src="./assets/img/servies/entertainment.png"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Stack
                      direction="column"
                      justifyContent="space-evenly"
                      height="100%"
                      sx={{
                        padding: "20px 0px 20px 50px",
                      }}
                    >
                      <SportsEsportsIcon
                        sx={{ fontSize: "50px", color: "#d23369" }}
                      />
                      <Typography
                        sx={{
                          fontSize: "30px",
                          fontFamily: "'Kodchasan', sans-serif",
                          fontWeight: "700",
                          "&:hover": {
                            color: "#d23369",
                          },
                        }}
                      >
                        Virtual Reality for Entertainment
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "18px",
                          fontFamily: "'Kodchasan', sans-serif",
                          fontWeight: "400",
                        }}
                      >
                        Sed vestibulum nulla elementum auctor tincidunt. Aliquam
                        sit amet cursus mauris. Sed vitae mattis ipsum.
                        Vestibulum enim nulla, sollicitudin ac hendrerit nec,
                        tempor quis nisl
                      </Typography>
                    </Stack>
                  </Grid>
                </Grid>
              </Box>
            </StyledSection>
          </Container>
        </Box>

        {/* VR Devices */}

        <Box
          sx={{
            display: "block",
            bgcolor: "#d23369",
            padding: "95px 0px",
          }}
        >
          <Container>
            <StyledSection>
              <Typography
                sx={{ fontSize: "18px", fontWeight: "100", color: "#fff" }}
              >
                High-Tech
              </Typography>
              <Typography
                sx={{
                  fontSize: "30px",
                  fontWeight: "700",
                  fontFamily: "'Kodchasan', sans-serif",
                  color: "#fff",
                }}
              >
                VR Devices
              </Typography>
              <Box
                sx={{
                  display: "block",
                  bgcolor: "#fff",
                  width: "50px",
                  height: "3px",
                  marginBottom: "50px",
                }}
              ></Box>
              <Box
                sx={{
                  width: "100%",
                }}
              >
                <Grid
                  container
                  justifyContent="space-evenly"
                  sx={{
                    width: "100%",
                  }}
                >
                  <Grid
                    item
                    xs={12}
                    sm="6"
                    md={3}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      marginBottom: "30px",
                    }}
                  >
                    <Box
                      sx={{
                        backgroundImage:
                          "url(./assets/img/servies/iconVR-1.png)",
                        width: "100px",
                        height: "100px",
                        backgroundSize: "contain",
                        marginBottom: "30px",
                      }}
                    />
                    <Typography sx={{ fontSize: "20px", color: "#fff" }}>
                      Dynamic Lighting
                    </Typography>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    sm="6"
                    md={3}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      marginBottom: "30px",
                    }}
                  >
                    <Box
                      sx={{
                        backgroundImage:
                          "url(./assets/img/servies/iconVR-2.png)",
                        width: "100px",
                        height: "100px",
                        backgroundSize: "contain",
                        marginBottom: "30px",
                      }}
                    />
                    <Typography sx={{ fontSize: "20px", color: "#fff" }}>
                      Foveated Rendering
                    </Typography>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    sm="6"
                    md={3}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      marginBottom: "30px",
                    }}
                  >
                    <Box
                      sx={{
                        backgroundImage:
                          "url(./assets/img/servies/iconVR-3.png)",
                        width: "100px",
                        height: "100px",
                        backgroundSize: "contain",
                        marginBottom: "30px",
                      }}
                    />
                    <Typography sx={{ fontSize: "20px", color: "#fff" }}>
                      Motion Tracking
                    </Typography>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    sm="6"
                    md={3}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      marginBottom: "30px",
                    }}
                  >
                    <Box
                      sx={{
                        backgroundImage:
                          "url(./assets/img/servies/iconVR-4.png)",
                        width: "100px",
                        height: "100px",
                        backgroundSize: "contain",
                        marginBottom: "30px",
                      }}
                    />
                    <Typography sx={{ fontSize: "20px", color: "#fff" }}>
                      Positional Sensor
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </StyledSection>
          </Container>
        </Box>

        {/* Happy Customer */}

        <Box
          sx={{
            display: "block",
            bgcolor: "#fff",
            padding: "95px 0px",
          }}
        >
          <Container>
            <StyledSection>
              <Typography sx={{ fontSize: "18px", fontWeight: "100" }}>
                Happy Customers
              </Typography>
              <Typography
                sx={{
                  fontSize: "30px",
                  fontWeight: "700",
                  fontFamily: "'Kodchasan', sans-serif",
                }}
              >
                Testimonials
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
              <Box sx={{ flexGrow: 1 }}>
                <Stack direction="column" alignItems="center" spacing={2}>
                  <Typography
                    align="center"
                    sx={{
                      fontFamily: "'Kodchasan', sans-serif",
                      fontSize: "18px",
                    }}
                  >
                    Donec erat ligula, ultricies ut eleifend egestas, imperdiet
                    vitae felis. Vestibulum imperdiet mauris arcu, at commodo
                    neque gravida in sed fringilla nisi egestas volutpat massa.
                  </Typography>
                  <Rating
                    name="simple-controlled"
                    value="5"
                    sx={{ color: "#d23369" }}
                  />
                  <Avatar
                    sx={{ width: "75px", height: "75px" }}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF3f4-ZFXn4tMJI7o4K2Jevg4flyxRwJQpvQ&usqp=CAU"
                  ></Avatar>
                  <Box
                    sx={{
                      display: "block",
                      bgcolor: "#d23369",
                      width: "50px",
                      height: "3px",
                      marginBottom: "20px",
                    }}
                  ></Box>

                  <Typography
                    sx={{
                      fontFamily: "'Kodchasan', sans-serif",
                      fontSize: "18px",
                    }}
                  >
                    Childcare worker
                  </Typography>
                </Stack>
              </Box>
            </StyledSection>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default services;
