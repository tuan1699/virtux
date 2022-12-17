import styles from "./Header.module.css";
import React from "react";
import { useState } from "react";

import {
  AppBar,
  Badge,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Tab,
  Tabs,
  Toolbar,
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

const Header = () => {
  const [value, setValue] = useState("");

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
      <AppBar sx={{ background: "#FFF" }} position="fixed">
        <Toolbar classes={{ padding: "0 200px" }} className="padding">
          <Box>
            <img src="./assets/img/logo.png" alt="" />
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
                  href="/shop"
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
                  <MenuItem onClick={handleClose} component={Link} href="/news">
                    News
                  </MenuItem>
                  <MenuItem onClick={handleClose} component={Link} href="/faq">
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
                <Link href="/account">
                  <IconButton>
                    <PersonIcon />
                  </IconButton>
                </Link>
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
    </React.Fragment>
  );
};

export default Header;
