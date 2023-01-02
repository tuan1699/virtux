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

import Link from "next/link";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { app } from "../../lib/firebase";
import { useDispatch, useSelector } from "react-redux";

import { userSelector } from "../../store/selector";
import { setUser } from "../../store/features/auth.slice";

const Header = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const dispatch = useDispatch();
  const user = useSelector(userSelector);

  useEffect(() => {
    auth.onAuthStateChanged((auth, error) => {
      if (auth && !user) {
        dispatch(
          setUser({
            accessToken: auth.accessToken,
            uid: auth.uid,
            displayName: auth.displayName,
            email: auth.email,
          })
        );
      } else {
        dispatch(setUser(null));
      }
    });
  }, []);

  console.log(auth.currentUser);

  const [value, setValue] = useState(1);

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const [anchorEl, setAnchorEl] = useState(null);

  function handleClick(event) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  }

  function handleClose() {
    setAnchorEl(null);
  }

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
                  onChange={(e, value) => setValue(value)}
                >
                  <Tab label="Home" component={Link} href="/" />
                  <Tab label="About VR" component={Link} href="/about" />
                  <Tab label="Services" component={Link} href="/services" />
                  <Tab
                    label="Shop"
                    // icon={<KeyboardArrowDownIcon />}
                    // iconPosition="end"
                    component={Link}
                    href="/products"
                  />
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
                <Stack
                  direction="row"
                  sx={{ marginLeft: "auto" }}
                  alignItems="center"
                >
                  {/* <Link href="/signup">
                    <IconButton>
                      <PersonIcon />
                    </IconButton>
                  </Link> */}

                  {!auth.currentUser ? (
                    <Link href="/login">
                      <Button variant="contained">Log in</Button>
                    </Link>
                  ) : (
                    <Stack direction="row">
                      <IconButton>
                        <PersonIcon />
                        <Typography>{auth.currentUser.displayName}</Typography>
                      </IconButton>
                      <Button
                        variant="contained"
                        onClick={() => auth.signOut()}
                      >
                        Đăng xuất
                      </Button>
                    </Stack>
                  )}

                  <Link href="/wishList">
                    <IconButton>
                      <FavoriteIcon />
                    </IconButton>
                  </Link>
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                  <Link href="/cart">
                    <Badge badgeContent={4} color="primary">
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
