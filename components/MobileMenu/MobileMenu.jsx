import styles from "../../styles/MobildeMenu.module.css";

import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import Link from "next/link";

const MobileMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <React.Fragment>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)}>
        <List>
          <Link href="/" className={styles["link-page"]}>
            <ListItemButton
              sx={{ padding: "4px 150px 4px 50px" }}
              className={styles["link-button"]}
              onClick={() => setOpenMenu(!openMenu)}
            >
              <ListItemText
                sx={{
                  color: "#000",
                }}
                className={styles["link-text"]}
              >
                Home
              </ListItemText>
            </ListItemButton>
          </Link>

          <Link href="/about" className={styles["link-page"]}>
            <ListItemButton
              sx={{ padding: "4px 150px 4px 50px" }}
              className={styles["link-button"]}
              onClick={() => setOpenMenu(!openMenu)}
            >
              <ListItemIcon>
                <ListItemText
                  sx={{
                    color: "#000",
                  }}
                >
                  About VR
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
          </Link>

          <Link href="/services" className={styles["link-page"]}>
            <ListItemButton
              sx={{ padding: "4px 150px 4px 50px" }}
              className={styles["link-button"]}
              onClick={() => setOpenMenu(!openMenu)}
            >
              <ListItemIcon>
                <ListItemText
                  sx={{
                    color: "#000",
                  }}
                >
                  Services
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
          </Link>

          <Link href="/products" className={styles["link-page"]}>
            <ListItemButton
              sx={{ padding: "4px 150px 4px 50px" }}
              className={styles["link-button"]}
              onClick={() => setOpenMenu(!openMenu)}
            >
              <ListItemIcon>
                <ListItemText
                  sx={{
                    color: "#000",
                  }}
                >
                  Shop
                </ListItemText>
              </ListItemIcon>
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
              <ListItemIcon>
                <ListItemText
                  sx={{
                    color: "#000",
                  }}
                >
                  News
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
          </Link>

          <Link href="/faq" className={styles["link-page"]}>
            <ListItemButton
              sx={{ padding: "4px 150px 4px 50px" }}
              onClick={() => setOpenMenu(!openMenu)}
              className={styles["link-button"]}
            >
              <ListItemIcon>
                <ListItemText
                  sx={{
                    color: "#000",
                  }}
                >
                  Faq
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
          </Link>

          <Link href="/contact" className={styles["link-page"]}>
            <ListItemButton
              sx={{ padding: "4px 150px 4px 50px" }}
              onClick={() => setOpenMenu(!openMenu)}
              className={styles["link-button"]}
            >
              <ListItemIcon>
                <ListItemText
                  sx={{
                    color: "#000",
                  }}
                >
                  Contact Us
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
          </Link>
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
