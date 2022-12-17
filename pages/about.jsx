import * as React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  styled,
  Stack,
} from "@mui/material";
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import PublicIcon from "@mui/icons-material/Public";
import TheatersIcon from "@mui/icons-material/Theaters";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import TheatersOutlinedIcon from "@mui/icons-material/TheatersOutlined";

import BreadCumb from "../components/BreadCumb/BreadCumb";
import { fontWeight } from "@mui/system";

const about = () => {
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
      About Us
    </Typography>,
  ];

  const StyledTitle = styled(Typography)({
    fontSize: "24px",
    fontFamily: "'Kodchasan', sans-serif",
    fontWeight: "700",
    marginLeft: "20px",
  });

  const StyledIcon = styled(ListItemIcon)({
    display: "flex",
    width: "60px",
    height: "60px",
    backgroundColor: "#fff1f5",
    justifyContent: "center",
    alignItems: "center",
    color: "#d23369",
    fontSize: "30px",
  });

  const StyledBorderIcon = styled(Box)({
    width: "170px",
    height: "170px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "2px solid #fff",
    borderRadius: "50%",
  });

  const StyledFs18px = styled(Typography)({
    fontSize: "18px",
    fontFamily: "'Kodchasan', sans-serif",
    fontWeight: "500",
    color: "#fff",
  });

  const StyledFs20px = styled(Typography)({
    fontSize: "20px",
    fontFamily: "'Kodchasan', sans-serif",
    fontWeight: "500",
    color: "#fff",
  });

  const StyledFs24px = styled(Typography)({
    fontSize: "24px",
    fontFamily: "'Kodchasan', sans-serif",
    fontWeight: "500",
    color: "#fff",
  });

  const StyledFs30px = styled(Typography)({
    fontSize: "30px",
    fontFamily: "'Kodchasan', sans-serif",
    fontWeight: "600",
    color: "#fff",
  });

  const StyledIconBgWhite = styled(ListItemIcon)({
    width: "70px",
    height: "70px",
    borderRadius: "100%",
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
        <BreadCumb breadcrumbs={breadcrumbs} Page={"About Us"} />

        {/* A Virtual World of Live Pictures. Helping Dreams Become Reality. */}
        <Box
          sx={{
            display: "block",
            bgcolor: "#fff",
            padding: "95px 0px",
          }}
        >
          <Container>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Typography
                  sx={{
                    fontSize: "30px",
                    fontWeight: "700",
                    fontFamily: "'Kodchasan', sans-serif",
                    marginBottom: "30px",
                  }}
                >
                  A Virtual World of Live Pictures. Helping Dreams Become
                  Reality.
                </Typography>

                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: "500",
                    fontFamily: "'Kodchasan', sans-serif",
                    marginBottom: "30px",
                  }}
                >
                  Morbi quis vehicula libero. Quisque sagittis ligula eu euismod
                  lobortis. Mauris dapibus mi vitae mi pellentesque congue. Duis
                  vitae metus enim. Nullam nisi justo, varius nec sagittis in,
                  tincidunt vel ligula. Maecenas ornare libero nulla, nec
                  dictum.
                </Typography>

                <List>
                  <ListItem sx={{ margin: "30px 0" }}>
                    <StyledIcon>
                      <EmojiObjectsOutlinedIcon fontSize="large" />
                    </StyledIcon>
                    <StyledTitle>Dynamic Lighting</StyledTitle>
                  </ListItem>

                  <ListItem sx={{ margin: "30px 0" }}>
                    <StyledIcon>
                      <VolumeUpIcon fontSize="large" />
                    </StyledIcon>
                    <StyledTitle>Foveated Rendering</StyledTitle>
                  </ListItem>

                  <ListItem sx={{ margin: "30px 0" }}>
                    <StyledIcon>
                      <PublicIcon fontSize="large" />
                    </StyledIcon>
                    <StyledTitle>Motion Tracking</StyledTitle>
                  </ListItem>

                  <ListItem sx={{ margin: "30px 0" }}>
                    <StyledIcon>
                      <TheatersIcon fontSize="large" />
                    </StyledIcon>
                    <StyledTitle>Positional Sensor</StyledTitle>
                  </ListItem>
                </List>
              </Grid>

              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    backgroundImage: `url(./assets/img/about/about-1.png)`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    width: "100%",
                    height: "100%",
                  }}
                ></Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Turning Dreams Into Reality */}
        <Box
          sx={{
            display: "flex",
            bgcolor: "#d23369",
            padding: "95px 0px",
            flexDirection: "column",
            justifyItems: "center",
            alignItems: "center",
          }}
        >
          <Container>
            <StyledFs30px sx={{ textAlign: "center", marginBottom: "50px" }}>
              Turning Dreams Into Reality
            </StyledFs30px>

            <Grid container justifyContent="space-between">
              <Grid item sm={6} md={4} lg={2}>
                <Stack direction="column" alignItems="center" spacing={1}>
                  <StyledBorderIcon>
                    <AllInclusiveIcon fontSize="large" sx={{ color: "#fff" }} />
                  </StyledBorderIcon>
                  <StyledFs30px>80+</StyledFs30px>
                  <StyledFs20px>Argumented </StyledFs20px>
                  <StyledFs20px>Reality</StyledFs20px>
                </Stack>
              </Grid>

              <Grid item sm={6} md={4} lg={2}>
                <Stack direction="column" alignItems="center" spacing={1}>
                  <StyledBorderIcon>
                    <AllInclusiveIcon fontSize="large" sx={{ color: "#fff" }} />
                  </StyledBorderIcon>
                  <StyledFs30px>80+</StyledFs30px>
                  <StyledFs20px>Argumented </StyledFs20px>
                  <StyledFs20px>Reality</StyledFs20px>
                </Stack>
              </Grid>

              <Grid item sm={6} md={4} lg={2}>
                <Stack direction="column" alignItems="center" spacing={1}>
                  <StyledBorderIcon>
                    <AllInclusiveIcon fontSize="large" sx={{ color: "#fff" }} />
                  </StyledBorderIcon>
                  <StyledFs30px>80+</StyledFs30px>
                  <StyledFs20px>Argumented </StyledFs20px>
                  <StyledFs20px>Reality</StyledFs20px>
                </Stack>
              </Grid>

              <Grid item sm={6} md={4} lg={2}>
                <Stack direction="column" alignItems="center" spacing={1}>
                  <StyledBorderIcon>
                    <AllInclusiveIcon fontSize="large" sx={{ color: "#fff" }} />
                  </StyledBorderIcon>
                  <StyledFs30px>80+</StyledFs30px>
                  <StyledFs20px>Argumented </StyledFs20px>
                  <StyledFs20px>Reality</StyledFs20px>
                </Stack>
              </Grid>

              <Grid item sm={6} md={4} lg={2}>
                <Stack direction="column" alignItems="center" spacing={1}>
                  <StyledBorderIcon>
                    <AllInclusiveIcon fontSize="large" sx={{ color: "#fff" }} />
                  </StyledBorderIcon>
                  <StyledFs30px>80+</StyledFs30px>
                  <StyledFs20px>Argumented </StyledFs20px>
                  <StyledFs20px>Reality</StyledFs20px>
                </Stack>
              </Grid>

              <Grid item sm={6} md={4} lg={2}>
                <Stack direction="column" alignItems="center" spacing={1}>
                  <StyledBorderIcon>
                    <AllInclusiveIcon fontSize="large" sx={{ color: "#fff" }} />
                  </StyledBorderIcon>
                  <StyledFs30px>80+</StyledFs30px>
                  <StyledFs20px>Argumented </StyledFs20px>
                  <StyledFs20px>Reality</StyledFs20px>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* List Image */}

        <Box
          sx={{
            bgcolor: "#fff",
            padding: "95px 0px",
          }}
        >
          <Container>
            <Grid container spacing={2}>
              <Grid item xs={12} md={8}>
                <Box
                  sx={{
                    backgroundImage: `url(./assets/img/about/turning-dream.png)`,
                    height: "100%",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    minHeight: "400px",
                    backgroundPosition: "center",
                  }}
                />
              </Grid>

              <Grid item xs={12} md={4}>
                <Stack sx={{ height: "100%" }} spacing={2}>
                  <Box
                    sx={{
                      backgroundImage: `url(./assets/img/about/interaction.png)`,
                      height: "50%",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      minHeight: "400px",
                      backgroundPosition: "center",
                    }}
                  />
                  <Box
                    sx={{
                      backgroundImage: `url(./assets/img/about/reality.png)`,
                      height: "50%",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      minHeight: "400px",
                      backgroundPosition: "center",
                    }}
                  />
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Welcome To World Of Virtux */}

        <Box
          sx={{
            display: "flex",
            bgcolor: "#d23369",
            padding: "95px 0px",
            flexDirection: "column",
            justifyItems: "center",
            alignItems: "center",
          }}
        >
          <Container>
            <StyledFs30px sx={{ textAlign: "center", marginBottom: "50px" }}>
              Welcome To World Of Virtux
            </StyledFs30px>

            <Grid container justifyContent="space-between" spacing={4}>
              <Grid item sm={6}>
                <List>
                  <ListItem disablePadding alignItems="flex-start">
                    <Stack
                      direction="column"
                      textAlign="end"
                      marginRight="20px"
                    >
                      <StyledFs24px sx={{ marginBottom: "15px" }}>
                        Six degrees of freedom
                      </StyledFs24px>
                      <StyledFs18px sx={{ fontSize: "16px" }}>
                        Pellentesque gravida scelerisque pretium. Quisque ut
                        quis neque lacinia lacinia. Ut eget augue nec ipsum
                        pharetra venenatis. Nullam eget lacus sed lorem.
                      </StyledFs18px>
                    </Stack>
                    <StyledIconBgWhite>
                      <TheatersOutlinedIcon
                        sx={{ color: "#d23369", fontSize: "35px" }}
                      />
                    </StyledIconBgWhite>
                  </ListItem>
                </List>
              </Grid>

              <Grid item sm={6}>
                <List>
                  <ListItem disablePadding alignItems="flex-start">
                    <StyledIconBgWhite>
                      <TheatersOutlinedIcon
                        sx={{ color: "#d23369", fontSize: "35px" }}
                      />
                    </StyledIconBgWhite>

                    <Stack
                      direction="column"
                      textAlign="end"
                      marginRight="20px"
                    >
                      <StyledFs24px sx={{ marginBottom: "15px" }}>
                        Augmented virtuality
                      </StyledFs24px>
                      <StyledFs18px sx={{ fontSize: "16px" }}>
                        Donec erat ligula, ultricies ut eleifend egestas,
                        imperdiet vitae felis. Vestibulum imperdiet mauris arcu,
                        at commodo neque gravida in aliquam.
                      </StyledFs18px>
                    </Stack>
                  </ListItem>
                </List>
              </Grid>

              <Grid item sm={6}>
                <List>
                  <ListItem disablePadding alignItems="flex-start">
                    <Stack
                      direction="column"
                      textAlign="end"
                      marginRight="20px"
                    >
                      <StyledFs24px sx={{ marginBottom: "15px" }}>
                        Navigation and tracking
                      </StyledFs24px>
                      <StyledFs18px sx={{ fontSize: "16px" }}>
                        Pellentesque gravida scelerisque pretium. Quisque ut
                        quis neque lacinia lacinia. Ut eget augue nec ipsum
                        pharetra venenatis. Nullam eget lacus sed lorem.
                      </StyledFs18px>
                    </Stack>
                    <StyledIconBgWhite>
                      <TheatersOutlinedIcon
                        sx={{ color: "#d23369", fontSize: "35px" }}
                      />
                    </StyledIconBgWhite>
                  </ListItem>
                </List>
              </Grid>

              <Grid item sm={6}>
                <List>
                  <ListItem disablePadding alignItems="flex-start">
                    <StyledIconBgWhite>
                      <TheatersOutlinedIcon
                        sx={{ color: "#d23369", fontSize: "35px" }}
                      />
                    </StyledIconBgWhite>

                    <Stack
                      direction="column"
                      textAlign="end"
                      marginRight="20px"
                    >
                      <StyledFs24px sx={{ marginBottom: "15px" }}>
                        Open-world exploration
                      </StyledFs24px>
                      <StyledFs18px sx={{ fontSize: "16px" }}>
                        Pellentesque gravida scelerisque pretium. Quisque ut
                        quis neque lacinia lacinia. Ut eget augue nec ipsum
                        pharetra venenatis. Nullam eget lacus sed lorem.
                      </StyledFs18px>
                    </Stack>
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Our Team */}

        <Box
          sx={{
            bgcolor: "#fff",
            padding: "95px 0px",
          }}
        >
          <Container>
            <StyledFs30px
              sx={{ textAlign: "center", marginBottom: "50px", color: "#000" }}
            >
              Our Team
            </StyledFs30px>

            <Grid container justifyContent="space-between" spacing={2}>
              <Grid item xs={12} sm={6} md={3}>
                <Stack width="100%">
                  <Box component="img" src="./assets/img/about/ceo.png"></Box>
                  <StyledFs20px sx={{ color: "#d23369", textAlign: "center" }}>
                    Sam Morales
                  </StyledFs20px>
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontWeight: "600",
                      fontFamily: "'Kodchasan', sans-serif",
                    }}
                  >
                    CEO
                  </Typography>
                </Stack>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <Stack width="100%">
                  <Box
                    component="img"
                    src="./assets/img/about/support.png"
                  ></Box>
                  <StyledFs20px sx={{ color: "#d23369", textAlign: "center" }}>
                    Sam Morales
                  </StyledFs20px>
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontWeight: "600",
                      fontFamily: "'Kodchasan', sans-serif",
                    }}
                  >
                    Customer Support
                  </Typography>
                </Stack>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <Stack width="100%">
                  <Box
                    component="img"
                    src="./assets/img/about/manager.png"
                  ></Box>
                  <StyledFs20px sx={{ color: "#d23369", textAlign: "center" }}>
                    Sam Morales
                  </StyledFs20px>
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontWeight: "600",
                      fontFamily: "'Kodchasan', sans-serif",
                    }}
                  >
                    Retail Manager
                  </Typography>
                </Stack>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <Stack width="100%">
                  <Box
                    component="img"
                    src="./assets/img/about/marketing.png"
                  ></Box>
                  <StyledFs20px sx={{ color: "#d23369", textAlign: "center" }}>
                    Sam Morales
                  </StyledFs20px>
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontWeight: "600",
                      fontFamily: "'Kodchasan', sans-serif",
                    }}
                  >
                    Marketing Manager
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default about;
