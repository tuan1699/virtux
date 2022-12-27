import * as React from "react";
import { useState, useEffect } from "react";
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
import qs from "query-string";

import { fetchProducts } from "../../store/features/Product.slice";
import { useDispatch, useSelector } from "react-redux";
import {
  productsRemainingSelector,
  selectAllProduct,
} from "../../store/selector";
import {
  brandFilterChange,
  categoriesFilterChange,
} from "../../store/features/Filter.slice";
import { Toys } from "@mui/icons-material";

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

const PriceRange = () => {
  const [price, setPrice] = useState([100, 200]);

  const handlePriceChange = (e, newPrice) => {
    console.log(newPrice);
    setPrice(newPrice);
  };

  return (
    <Slider
      value={price}
      min={10}
      max={2000}
      step={100}
      onChange={handlePriceChange}
      valueLabelDisplay="auto"
    />
  );
};

const Shop = ({ data, filtered, filter, total, page }) => {
  const [view, setView] = useState("grid");
  const [sort, setSort] = useState("");
  const [category, setCategories] = useState([]);
  const [brands, setBrand] = useState([]);

  const router = useRouter();
  const dispatch = useDispatch();

  const { register, handleSubmit, getValues } = useForm({
    defaultValues: {
      // categories: filter.categories,
      // brand: filter.brand,
    },
  });

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

  const handleChangePageCur = (event, value) => {
    let categories = getValues("categories");
    let brand = getValues("brand");

    router.push({
      pathname: "/products",
      query: { ...router.query, page: value },
    });

    // console.log(categories);
    // console.log(brand);

    // if (categories && brand) {
    //   router.push({
    //     pathname: "/products",
    //     query: {
    //       page: value,
    //       categories: categories,
    //       brand: brand,
    //     },
    //   });
    // } else {
    //   router.push({
    //     pathname: "/products",
    //     query: categories
    //       ? {
    //           page: value,
    //           categories,
    //         }
    //       : brand
    //       ? {
    //           page: value,
    //           brand,
    //         }
    //       : {
    //           page: value,
    //         },
    //   });
    // }

    // console.log(value);
    // router.push({
    //   url: "/products",
    //   query: {
    //     page: value,
    //   },
    // });
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
        <BreadCumb breadcrumbs={breadcrumbs} Page={"Shop"} />
        <Box sx={{ display: "block", padding: "95px 0", bgcolor: "#fff" }}>
          <Container>
            <Grid container>
              <Grid item xs={12} sm={5} md={3} p={2}>
                <form
                  onSubmit={handleSubmit((data) => {
                    if (data.categories && data.brand) {
                      router.push({
                        pathname: "/products",
                        query: data,
                      });
                    } else {
                      router.push({
                        pathname: "/products",
                        query: data.categories
                          ? {
                              categories: data.categories,
                            }
                          : data.brand
                          ? {
                              brand: data.brand,
                            }
                          : "",
                      });
                    }
                  })}
                >
                  <Box mb="30px">
                    <StyledHeadingFilter>Category</StyledHeadingFilter>
                    <FormGroup>
                      {categories.map((categories) => {
                        return (
                          <FormControlLabel
                            key={categories.id}
                            control={<Checkbox />}
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
                      <PriceRange />
                    </Box>
                  </Box>
                  <Box mb="30px">
                    <StyledHeadingFilter>Shop By Brand</StyledHeadingFilter>
                    <FormGroup>
                      {brand.map((brand) => {
                        return (
                          <FormControlLabel
                            key={brand.id}
                            control={<Checkbox />}
                            label={brand.label}
                            value={brand.value}
                            {...register("brand", {})}
                          />
                        );
                      })}
                    </FormGroup>
                  </Box>
                  <Button type="submit" variant="contained">
                    Lọc
                  </Button>
                </form>
              </Grid>

              <Grid item xs={12} sm={7} md={9}>
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
                        <MenuItem value={"AZ"}>A-Z</MenuItem>
                        <MenuItem value={"ZA"}>Z-A</MenuItem>
                        <MenuItem value={"highToLow"}>high to low</MenuItem>
                        <MenuItem value={"lowToHigh"}>low to high</MenuItem>
                      </Select>
                    </FormControl>
                  </Stack>
                </Stack>

                <Grid container spacing={1}>
                  {data
                    ? data.map((product) => (
                        <Grid key={product.id} item xs={12} md={6} lg={4}>
                          <Item product={product} />
                        </Grid>
                      ))
                    : "Chưa lấy được API"}
                </Grid>

                <Stack
                  spacing={2}
                  sx={{ alignItems: "center", marginTop: "60px" }}
                >
                  <Pagination
                    count={total}
                    page={page}
                    variant="outlined"
                    shape="rounded"
                    onChange={handleChangePageCur}
                  />
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

export const getServerSideProps = async (context) => {
  let { categories = [], brand = [], page = 1 } = context.query;
  let cate = [];
  let brands = [];

  if (typeof categories == "string") {
    cate.push(categories);
  }

  if (typeof brand == "string") {
    brands.push(brand);
  }

  if (typeof categories == "object") {
    Array.prototype.push.apply(cate, categories);
  }

  if (typeof brand == "object") {
    Array.prototype.push.apply(brands, brand);
  }

  const res = await fetch(
    "https://63a8fbcd100b7737b987d5fd.mockapi.io/products"
  );

  const data = await res.json();

  console.log(brands);
  console.log(cate);

  const filtered = data.filter((product) => {
    if (categories.length !== 0 && brands.length !== 0) {
      return (
        cate.includes(product.categories) && brands.includes(product.brand)
      );
    } else
      return categories.length !== 0
        ? cate.includes(product.categories)
        : brands.length !== 0
        ? brands.includes(product.brand)
        : product;
  });

  return {
    props: {
      filtered,
      filter: {
        categories,
        brand,
      },
      page: Number(page),
      total: Math.ceil(filtered.length / 6),
      data: filtered.slice((page - 1) * 6, page * 6),
    },
  };
};
