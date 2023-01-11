import styles from "./Header.module.css";
import React, { useEffect } from "react";
import { useState } from "react";

import {
  AppBar,
  Badge,
  Box,
  Button,
  Container,
  IconButton,
  Input,
  Menu,
  MenuItem,
  Stack,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Popover from "@mui/material/Popover";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MobileMenu from "../MobileMenu/MobileMenu";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";

import { searchFilterChange } from "../../store/features/Filter.slice";

import Link from "next/link";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";

import { useDispatch, useSelector } from "react-redux";

import { setUser } from "../../store/features/auth.slice";

import {
  getFirestore,
  collection,
  doc,
  deleteDoc,
  onSnapshot,
  query,
} from "firebase/firestore";
import { app } from "../../lib/firebase";
import {
  productsSearched,
  selectAllProduct,
  userSelector,
} from "../../store/selector";
import { fetchProducts } from "../../store/features/Product.slice";
import ItemSearch from "../ItemSearch";
import { useRouter } from "next/router";
import Nav from "../Nav/Nav";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorAuth, setanchorAuth] = useState(null);
  const [value, setValue] = useState(1);
  const [search, setSearch] = useState("");
  const [carts, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const auth = getAuth(app);
  const router = useRouter();

  const dispatch = useDispatch();
  const user = useSelector(userSelector);

  const cartRef = collection(getFirestore(app), "cart");

  const wishlistRef = collection(getFirestore(app), "wishlist");

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const productSearched = useSelector(productsSearched);

  useEffect(() => {
    const q = query(cartRef);
    onSnapshot(q, async (querySnapshot) => {
      let data = [];
      querySnapshot.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });
      setCart(data.filter((item) => item.uid == (user && user.uid)));
    });
  }, [user == null ? null : user.uid]);

  useEffect(() => {
    const q = query(wishlistRef);
    const wishlist = onSnapshot(q, (querySnapshot) => {
      let data = [];
      querySnapshot.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });
      setWishlist(data.filter((item) => item.uid == (user && user.uid)));
    });
    return () => wishlist();
  }, [user == null ? null : user.uid]);

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  function handleClick(event) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  }

  // Modal Login

  function handleClose() {
    setAnchorEl(null);
  }

  function handleClickModalAuth(event) {
    if (anchorAuth !== event.currentTarget) {
      setanchorAuth(event.currentTarget);
    }
  }

  function handleCloseModalAuth() {
    setanchorAuth(null);
  }

  const openAuth = Boolean(anchorAuth);
  const idAuth = openAuth ? "simple-popover" : undefined;

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    dispatch(searchFilterChange(e.target.value));
  };

  return (
    <React.Fragment>
      <Container>
        <AppBar sx={{ background: "#FFF" }} position="fixed">
          <Toolbar classes={{ padding: "0 200px" }}>
            <Box>
              <img src="/assets/img/logo.png" alt="" />
            </Box>
            {!isMatch ? (
              <>
                <Tabs
                  sx={{ marginLeft: "auto" }}
                  value={value}
                  indicatorColor="primary"
                  onChange={(e, value) => {
                    console.log(value);
                    setValue(value);
                  }}
                >
                  <Tab
                    label="Home"
                    component={Link}
                    href="/"
                    className={
                      router.pathname == "/"
                        ? styles["nav-active"]
                        : styles["nav-link"]
                    }
                  />
                  <Tab label="About VR" component={Link} href="/about" />
                  <Tab label="Services" component={Link} href="/services" />
                  <Tab label="Shop" component={Link} href="/products" />
                  <Tab
                    label="Page"
                    icon={<KeyboardArrowDownIcon />}
                    iconPosition="end"
                    aria-owns={anchorEl ? "simple-menu" : undefined}
                    aria-haspopup="true"
                    onClick={handleClick}
                    onMouseOver={handleClick}
                  />
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    MenuListProps={{ onMouseLeave: handleClose }}
                  >
                    <MenuItem
                      onClick={handleClose}
                      component={Link}
                      href="/news"
                    >
                      News
                    </MenuItem>
                    <MenuItem
                      onClick={handleClose}
                      component={Link}
                      href="/faq"
                    >
                      Faq
                    </MenuItem>
                    <MenuItem
                      onClick={handleClose}
                      component={Link}
                      href="/contact"
                    >
                      Contact Us
                    </MenuItem>
                  </Menu>
                </Tabs>

                {/* <Nav /> */}
                <Stack
                  direction="row"
                  sx={{ marginLeft: "auto" }}
                  alignItems="center"
                >
                  {!auth.currentUser ? (
                    <Link href="/login">
                      <Button
                        variant="contained"
                        sx={{
                          width: "80px",
                        }}
                      >
                        Log in
                      </Button>
                    </Link>
                  ) : (
                    <Box>
                      <IconButton
                        aria-describedby={auth}
                        onClick={handleClickModalAuth}
                      >
                        <PersonIcon />
                      </IconButton>

                      <Popover
                        anchorReference="anchorPosition"
                        anchorPosition={{ top: 72, left: 1100 }}
                        id={idAuth}
                        open={openAuth}
                        anchorEl={anchorAuth}
                        onClose={handleCloseModalAuth}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "left",
                        }}
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "left",
                        }}
                      >
                        <Stack>
                          <Link
                            href="/account"
                            sx={{}}
                            className={styles["link-account"]}
                          >
                            <Button>{auth.currentUser.displayName}</Button>
                          </Link>

                          <Button
                            variant="contained"
                            onClick={() => auth.signOut()}
                          >
                            Đăng xuất
                          </Button>
                        </Stack>
                      </Popover>
                    </Box>
                  )}

                  <Link href="/wishList">
                    <IconButton>
                      <Badge badgeContent={wishlist.length} color="primary">
                        <FavoriteIcon sx={{ color: "#757575" }} />
                      </Badge>
                    </IconButton>
                  </Link>
                  <Box
                    sx={{
                      position: "relative",
                    }}
                  >
                    <Input
                      placeholder="Search..."
                      sx={{ width: "100%", padding: "10px" }}
                      onChange={(e) => handleSearchChange(e)}
                      value={search}
                    />
                    <Box
                      sx={{
                        maxHeight: "500px",
                        width: "300px",
                        background: "#fff",
                        position: "absolute",
                        paddingLeft: "10px",
                        top: "62px",
                        right: "0px",
                        zIndex: "1000",
                        overflow: "scroll",
                        "::-webkit-scrollbar": {
                          display: "none",
                        },
                        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                        borderBottomLeftRadius: "15px",
                        borderBottomRightRadius: "15px",
                      }}
                    >
                      {productSearched.length !== 0
                        ? productSearched.map((product) => (
                            <ItemSearch product={product} key={product.id} />
                          ))
                        : ""}
                    </Box>
                  </Box>

                  <Link href="/cart">
                    <Badge
                      badgeContent={carts.reduce(
                        (total, cur) => (total += cur.quantity),
                        0
                      )}
                      color="primary"
                    >
                      <ShoppingCartOutlinedIcon sx={{ color: "#757575" }} />
                    </Badge>
                  </Link>
                </Stack>
              </>
            ) : (
              <MobileMenu />
            )}
          </Toolbar>
        </AppBar>
      </Container>
    </React.Fragment>
  );
};

export default Header;
