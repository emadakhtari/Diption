import React, { useState } from "react";
import { Fade, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  ChipMainStyle,
  ButtonMenuMainProfileStyle,
} from "../../styles/MainStyle";

function ProfileMenu() {
  const [prMenu, setPrMenu] = useState(null);
  const openPrMenu = Boolean(prMenu);
  const handleClickPrMenu = (event) => {
    setPrMenu(event.currentTarget);
  };
  const handleClose = () => {
    setPrMenu(null);
  };
  return (
    <>
      <ButtonMenuMainProfileStyle
        id="fade-button"
        aria-controls={openPrMenu ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={openPrMenu ? "true" : undefined}
        onClick={handleClickPrMenu}
      >
        <ChipMainStyle icon={<MenuIcon />} />
      </ButtonMenuMainProfileStyle>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={prMenu}
        open={openPrMenu}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </>
  );
}

export default ProfileMenu;
