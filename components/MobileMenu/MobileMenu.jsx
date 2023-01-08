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
          <Link href="/">
            <ListItemButton sx={{ padding: "4px 150px 4px 50px" }}>
              <ListItemIcon>
                <ListItemText onClick={() => setOpenMenu(!openMenu)}>
                  Home
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
          </Link>

          <Link href="/about">
            <ListItemButton sx={{ padding: "4px 150px 4px 50px" }}>
              <ListItemIcon>
                <ListItemText onClick={() => setOpenMenu(!openMenu)}>
                  About VR
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
          </Link>

          <Link href="/services">
            <ListItemButton sx={{ padding: "4px 150px 4px 50px" }}>
              <ListItemIcon>
                <ListItemText onClick={() => setOpenMenu(!openMenu)}>
                  Services
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
          </Link>

          <Link href="/products">
            <ListItemButton sx={{ padding: "4px 150px 4px 50px" }}>
              <ListItemIcon>
                <ListItemText onClick={() => setOpenMenu(!openMenu)}>
                  Shop
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
          </Link>

          <Link href="/news" className={styles["link-page"]}>
            <ListItemButton sx={{ padding: "4px 150px 4px 50px" }}>
              <ListItemIcon>
                <ListItemText
                  sx={{
                    color: "#000",
                  }}
                  onClick={() => setOpenMenu(!openMenu)}
                >
                  News
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
          </Link>

          <Link href="/faq">
            <ListItemButton sx={{ padding: "4px 150px 4px 50px" }}>
              <ListItemIcon>
                <ListItemText onClick={() => setOpenMenu(!openMenu)}>
                  Faq
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
          </Link>

          <Link href="/contact">
            <ListItemButton sx={{ padding: "4px 150px 4px 50px" }}>
              <ListItemIcon>
                <ListItemText onClick={() => setOpenMenu(!openMenu)}>
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
