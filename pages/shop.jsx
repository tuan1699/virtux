import * as React from "react";
import { useState } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";

import Item from "../components/Item/Item";

import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ListIcon from "@mui/icons-material/List";
import AppsIcon from "@mui/icons-material/Apps";

import {
  Box,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  Slider,
  styled,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import BreadCumb from "../components/BreadCumb/BreadCumb";

const Shop = () => {
  const [view, setView] = useState("grid");
  const [sort, setSort] = useState("");
  const [value, setValue] = useState([20, 37]);

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
      Shop
    </Typography>,
  ];

  const StyledSwitchButton = styled(ToggleButton)({
    width: "35px",
    height: "35px",
    bgcolor: "#fff",
  });

  const StyledHeadingFilter = styled(Typography)({
    fontSize: "20px",
    fontWeight: "700",
    fontFamily: "'Kodchasan', sans-serif",
    paddingBottom: "10px",
    borderBottom: "1px solid #d23369",
  });

  const handleChangeView = (e, nextView) => {
    setView(nextView);
  };

  const handleChangeSort = (e) => {
    setSort(e.target.value);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function valuetext(value) {
    return `${value}°C`;
  }

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(./assets/img/background-page.png)`,
          minHeight: "900px",
          marginTop: "70px",
        }}
      >
        <BreadCumb breadcrumbs={breadcrumbs} Page={"Shop"} />
        <Box sx={{ display: "block", padding: "95px 0", bgcolor: "#fff" }}>
          <Container>
            <Grid container>
              <Grid item xs={12} sm={5} md={3} p={2}>
                <Box mb="30px">
                  <StyledHeadingFilter>Category</StyledHeadingFilter>
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="Headsets"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Accessories"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Media Players"
                    />
                  </FormGroup>
                </Box>
                <Box mb="30px">
                  <StyledHeadingFilter>Shop By Size</StyledHeadingFilter>
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="4.2"
                    />

                    <FormControlLabel control={<Checkbox />} label="4.5" />

                    <FormControlLabel control={<Checkbox />} label="4.7" />

                    <FormControlLabel control={<Checkbox />} label="5.2" />

                    <FormControlLabel control={<Checkbox />} label="6.2" />
                  </FormGroup>
                </Box>
                <Box mb="30px">
                  <StyledHeadingFilter>Shop By Price</StyledHeadingFilter>
                  <Box p="20px 10px 0 0 ">
                    <Slider
                      getAriaLabel={() => "Temperature range"}
                      value={value}
                      onChange={handleChange}
                      valueLabelDisplay="auto"
                      getAriaValueText={valuetext}
                    />
                  </Box>
                </Box>
                <Box mb="30px">
                  <StyledHeadingFilter>Shop By Brand</StyledHeadingFilter>

                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="4.2"
                    />

                    <FormControlLabel
                      control={<Checkbox />}
                      label="3D Reality"
                    />

                    <FormControlLabel
                      control={<Checkbox />}
                      label="Virtual Revenue"
                    />

                    <FormControlLabel
                      control={<Checkbox />}
                      label="Digital World"
                    />

                    <FormControlLabel
                      control={<Checkbox />}
                      label="Digital Dock"
                    />

                    <FormControlLabel
                      control={<Checkbox />}
                      label="Sputnik Virtual"
                    />
                  </FormGroup>
                </Box>
                <Box mb="30px">
                  <StyledHeadingFilter>Shop By Type</StyledHeadingFilter>

                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="Standalone"
                    />

                    <FormControlLabel control={<Checkbox />} label="Tethered" />

                    <FormControlLabel control={<Checkbox />} label="Gaming" />

                    <FormControlLabel
                      control={<Checkbox />}
                      label="Play Station"
                    />
                  </FormGroup>
                </Box>
              </Grid>

              <Grid item xs={12} sm={7} md={9}>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{
                    padding: "10px",
                    // bgcolor: "#ccc",
                  }}
                >
                  <ToggleButtonGroup
                    orientation="horizontal"
                    value={view}
                    exclusive
                    onChange={handleChangeView}
                  >
                    <StyledSwitchButton value="list" aria-label="list">
                      <ListIcon />
                    </StyledSwitchButton>
                    <StyledSwitchButton value="grid" aria-label="grid">
                      <AppsIcon />
                    </StyledSwitchButton>
                  </ToggleButtonGroup>

                  <Stack
                    direction="row"
                    sx={{
                      width: "240px",
                    }}
                    alignItems="center"
                  >
                    <Typography>Sort by</Typography>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                      <Select
                        displayEmpty
                        inputProps={{ "aria-label": "Without label" }}
                        value={sort}
                        onChange={handleChangeSort}
                        sx={{
                          height: "30px",
                        }}
                      >
                        <MenuItem value={"feature"}>Featured</MenuItem>
                        <MenuItem value={"bestSell"}>Best Selling</MenuItem>
                        <MenuItem value={"AZ"}> A-Z</MenuItem>
                        <MenuItem value={"ZA"}> Z-A</MenuItem>
                        <MenuItem value={"highToLow"}>high to low</MenuItem>
                        <MenuItem value={"lowToHigh"}>low to high</MenuItem>
                        <MenuItem value={"newToOld"}> new to old</MenuItem>
                        <MenuItem value={"oldToNew"}> old to new</MenuItem>
                      </Select>
                    </FormControl>
                  </Stack>
                </Stack>

                <Grid container>
                  <Grid item xs={12} md={6} lg={4}>
                    <Item />
                  </Grid>

                  <Grid item xs={12} md={6} lg={4}>
                    <Item />
                  </Grid>

                  <Grid item xs={12} md={6} lg={4}>
                    <Item />
                  </Grid>

                  <Grid item xs={12} md={6} lg={4}>
                    <Item />
                  </Grid>

                  <Grid item xs={12} md={6} lg={4}>
                    <Item />
                  </Grid>

                  <Grid item xs={12} md={6} lg={4}>
                    <Item />
                  </Grid>

                  <Grid item xs={12} md={6} lg={4}>
                    <Item />
                  </Grid>

                  <Grid item xs={12} md={6} lg={4}>
                    <Item />
                  </Grid>

                  <Grid item xs={12} md={6} lg={4}>
                    <Item />
                  </Grid>
                </Grid>

                <Stack
                  spacing={2}
                  sx={{ alignItems: "center", marginTop: "60px" }}
                >
                  <Pagination count={10} variant="outlined" shape="rounded" />
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Shop;
