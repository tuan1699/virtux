import * as React from "react";
import { useState, useEffect, useRef } from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";

import Item from "../../components/Item/Item";

import ListIcon from "@mui/icons-material/List";
import AppsIcon from "@mui/icons-material/Apps";

import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  MenuItem,
  Pagination,
  Select,
  Slider,
  styled,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import BreadCumb from "../../components/BreadCumb/BreadCumb";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

import {
  clearFilter,
  fetchProducts,
  pageChanged,
  priceFilterChange,
  sortFilterChange,
} from "../../store/features/Product.slice";
import { useDispatch, useSelector } from "react-redux";

import { collection, getDocs, getFirestore, query } from "firebase/firestore";
import { app } from "../../lib/firebase";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { productsRemaining, selectAllProduct } from "../../store/selector";
import {
  brandFilterChange,
  categoriesFilterChange,
} from "../../store/features/Product.slice";

const categories = [
  {
    id: 1,
    label: "Headset",
    value: "headset",
  },
  {
    id: 2,
    label: "Accessories",
    value: "accessories",
  },
  {
    id: 3,
    label: "Smart Glasses",
    value: "smart_glasses",
  },
];

const brand = [
  {
    id: 1,
    label: "Nreal",
    value: "nreal",
  },
  {
    id: 2,
    label: "Pico",
    value: "pico",
  },
  {
    id: 3,
    label: "Rokid",
    value: "rokid",
  },
  {
    id: 4,
    label: "Oculus",
    value: "oculus",
  },
  {
    id: 5,
    label: "Sony",
    value: "sony",
  },
  {
    id: 6,
    label: "Valve",
    value: "valve",
  },
  {
    id: 7,
    label: "HTC",
    value: "htc",
  },
  {
    id: 8,
    label: "Ray-ban",
    value: "rayban",
  },
  {
    id: 9,
    label: "Goovis",
    value: "goovis",
  },
  {
    id: 10,
    label: "HP",
    value: "hp",
  },
];

const Shop = () => {
  const [view, setView] = useState("grid");
  const [priceFilter, setPriceFilter] = useState([10, 2000]);
  const [sort, setSort] = useState("");
  const [checked, setChecked] = useState(false);

  const filterRef = useRef();

  const router = useRouter();
  const dispatch = useDispatch();

  const { products, currentPage, totalPage, filteredProducts } =
    useSelector(productsRemaining);

  const { register, handleSubmit, getValues, reset } = useForm({
    defaultValues: {},
  });

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const handlePriceChange = (e, newPrice) => {
    setPriceFilter(newPrice);
    dispatch(priceFilterChange(newPrice));
  };

  const handleChangeView = (e, nextView) => {
    setView(nextView);
  };

  const handleChangePageCur = (event, value) => {
    dispatch(pageChanged(value));
  };

  const handleChangeSort = (e) => {
    setSort(e.target.value);
    dispatch(sortFilterChange(e.target.value));
  };

  const handleClearFilter = () => {};

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

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(./assets/img/background-page.png)`,
          minHeight: "900px",
          marginTop: { xs: "56px", md: "72px" },
        }}
      >
        <BreadCumb breadcrumbs={breadcrumbs} Page={"Shop"} />
        <Box sx={{ display: "block", padding: "95px 0", bgcolor: "#fff" }}>
          <Container>
            <Grid container>
              <Grid item xs={12} sm={4} md={3} p={2}>
                <form
                  ref={filterRef}
                  onChange={() => {
                    const cateChecked = [];
                    const brandChecked = [];

                    filterRef.current.elements.categories.forEach(
                      (checkbox) => {
                        if (checkbox.checked) cateChecked.push(checkbox.value);
                      }
                    );

                    filterRef.current.elements.brands.forEach((checkbox) => {
                      if (checkbox.checked) brandChecked.push(checkbox.value);
                    });

                    dispatch(categoriesFilterChange(cateChecked));
                    dispatch(brandFilterChange(brandChecked));
                  }}
                >
                  <Box mb="30px">
                    <StyledHeadingFilter>Category</StyledHeadingFilter>
                    <FormGroup>
                      {categories.map((categories) => {
                        return (
                          <FormControlLabel
                            key={categories.id}
                            control={
                              <Checkbox
                                name="categories"
                                className="check-box"
                              />
                            }
                            className="check-box"
                            label={categories.label}
                            value={categories.value}
                            {...register("categories", {})}
                          />
                        );
                      })}
                    </FormGroup>
                  </Box>
                  <Box mb="30px">
                    <StyledHeadingFilter>Shop By Price</StyledHeadingFilter>
                    <Box p="20px 10px 0 0 ">
                      <Slider
                        value={priceFilter}
                        min={10}
                        max={2000}
                        step={100}
                        onChange={handlePriceChange}
                        valueLabelDisplay="auto"
                      />
                    </Box>
                  </Box>
                  <Box mb="30px">
                    <StyledHeadingFilter>Shop By Brand</StyledHeadingFilter>
                    <FormGroup>
                      {brand.map((brand) => {
                        return (
                          <FormControlLabel
                            key={brand.id}
                            control={<Checkbox name="brands" />}
                            label={brand.label}
                            value={brand.value}
                            {...register("brand", {})}
                          />
                        );
                      })}
                    </FormGroup>
                  </Box>
                </form>
              </Grid>

              <Grid item xs={12} sm={8} md={9}>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{
                    padding: "10px",
                  }}
                >
                  <ToggleButtonGroup
                    orientation="horizontal"
                    value={view}
                    exclusive
                    onChange={handleChangeView}
                    sx={{
                      display: { xs: "none", md: "block" },
                    }}
                  >
                    <StyledSwitchButton value="grid" aria-label="grid">
                      <AppsIcon />
                    </StyledSwitchButton>

                    <StyledSwitchButton value="list" aria-label="list">
                      <ListIcon />
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
                        onChange={handleChangeSort}
                        value={sort}
                        sx={{
                          height: "30px",
                        }}
                      >
                        <MenuItem value={"AZ"}>A-Z</MenuItem>
                        <MenuItem value={"ZA"}>Z-A</MenuItem>
                        <MenuItem value={"highToLow"}>high to low</MenuItem>
                        <MenuItem value={"lowToHigh"}>low to high</MenuItem>
                      </Select>
                    </FormControl>
                  </Stack>
                </Stack>

                <Grid container spacing={1}>
                  {products
                    ? products.map((product) => (
                        <Grid
                          key={product.id}
                          item
                          xs={12}
                          sm={6}
                          md={view === "grid" ? 6 : 12}
                          lg={view === "grid" ? 4 : 12}
                        >
                          <Item product={product} view={view} />
                        </Grid>
                      ))
                    : "Chưa lấy được API"}
                </Grid>

                <Stack
                  spacing={2}
                  sx={{ alignItems: "center", marginTop: "60px" }}
                >
                  <Pagination
                    count={totalPage}
                    page={currentPage}
                    variant="outlined"
                    shape="rounded"
                    onChange={handleChangePageCur}
                  />
                </Stack>
              </Grid>
            </Grid>
          </Container>
          <ToastContainer />
        </Box>
      </Box>
    </>
  );
};

export default Shop;
