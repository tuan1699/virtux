import styles from "../../styles/MobildeMenu.module.css";

import {
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import Link from "next/link";

import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { getAuth } from "firebase/auth";
import { app } from "../../lib/firebase";

const MobileMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const auth = getAuth(app);

  return (
    <React.Fragment>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)}>
        <List>
          {auth.currentUser ? (
            <Stack
              direction="row"
              sx={{ padding: "4px 150px 4px 50px", marginBottom: "20px" }}
              spacing={1}
            >
              <Link href="/account" className={styles["user"]}>
                <AccountCircleOutlinedIcon />
                <Typography>Hi, {auth.currentUser.displayName}</Typography>
              </Link>
            </Stack>
          ) : (
            ""
          )}
          <Link href="/" className={styles["link-page"]}>
            <ListItemButton
              sx={{ padding: "8px 150px 8px 50px" }}
              className={styles["link-button"]}
              onClick={() => setOpenMenu(!openMenu)}
            >
              <ListItemText className={styles["link-text"]}>Home</ListItemText>
            </ListItemButton>
          </Link>

          <Link href="/about" className={styles["link-page"]}>
            <ListItemButton
              sx={{ padding: "4px 150px 4px 50px" }}
              className={styles["link-button"]}
              onClick={() => setOpenMenu(!openMenu)}
            >
              <ListItemText className={styles["link-text"]}>
                About VR
              </ListItemText>
            </ListItemButton>
          </Link>

          <Link href="/services" className={styles["link-page"]}>
            <ListItemButton
              sx={{ padding: "4px 150px 4px 50px" }}
              className={styles["link-button"]}
              onClick={() => setOpenMenu(!openMenu)}
            >
              <ListItemText className={styles["link-text"]}>
                Services
              </ListItemText>
            </ListItemButton>
          </Link>

          <Link href="/products" className={styles["link-page"]}>
            <ListItemButton
              sx={{ padding: "4px 150px 4px 50px" }}
              className={styles["link-button"]}
              onClick={() => setOpenMenu(!openMenu)}
            >
              <ListItemText className={styles["link-text"]}>Shop</ListItemText>
            </ListItemButton>
          </Link>

          <Link href="/news" className={styles["link-page"]}>
            <ListItemButton
              sx={{
                padding: "4px 150px 4px 50px",
              }}
              className={styles["link-button"]}
              onClick={() => setOpenMenu(!openMenu)}
            >
              <ListItemText className={styles["link-text"]}>News</ListItemText>
            </ListItemButton>
          </Link>

          <Link href="/faq" className={styles["link-page"]}>
            <ListItemButton
              sx={{ padding: "4px 150px 4px 50px" }}
              onClick={() => setOpenMenu(!openMenu)}
              className={styles["link-button"]}
            >
              <ListItemText className={styles["link-text"]}>Faq</ListItemText>
            </ListItemButton>
          </Link>

          <Link href="/contact" className={styles["link-page"]}>
            <ListItemButton
              sx={{ padding: "4px 150px 4px 50px" }}
              onClick={() => setOpenMenu(!openMenu)}
              className={styles["link-button"]}
            >
              <ListItemText className={styles["link-text"]}>
                Contact Us
              </ListItemText>
            </ListItemButton>
          </Link>

          <Box sx={{ padding: "4px 150px 4px 50px" }}>
            {!auth.currentUser ? (
              <Link href="/login">
                <Button
                  variant="contained"
                  onClick={() => {
                    setOpenMenu(!openMenu);
                  }}
                >
                  Login
                </Button>
              </Link>
            ) : (
              <Button
                variant="contained"
                onClick={() => {
                  setOpenMenu(!openMenu);
                  auth.signOut();
                }}
              >
                Log out
              </Button>
            )}
          </Box>
        </List>
      </Drawer>

      <IconButton
        sx={{ marginLeft: "auto" }}
        onClick={() => setOpenMenu(!openMenu)}
      >
        <MenuIcon />
      </IconButton>
    </React.Fragment>
  );
};

export default MobileMenu;
