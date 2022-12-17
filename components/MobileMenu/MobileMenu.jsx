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

const MobileMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <React.Fragment>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)}>
        <List>
          <ListItemButton sx={{ padding: "4px 150px" }}>
            <ListItemIcon>
              <ListItemText>Home</ListItemText>
            </ListItemIcon>
          </ListItemButton>
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
