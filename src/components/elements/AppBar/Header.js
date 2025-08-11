import React from "react";
import {
  Container,
  Typography,
  IconButton,
  Toolbar,
  AppBar,
  Stack,
  Tooltip,
  MenuItem,
} from "@mui/material";
import { Menu } from "@mui/base/Menu";

import {
  BoxLogoMainStyle,
  BoxMainStyle,
  BoxMenuMainStyle,
  Search,
  SearchIconWrapper,
  StyledInputBase,
  ChipMainStyle,
  ChipMainStyleNoConnectMetamask,
  ChipMainStyleConnectMetamask,
  ButtonMenuMainStyle,
} from "../../styles/MainStyle";

import PersonIcon from "@mui/icons-material/Person";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import logo512 from "../../../assets/images/logo512.png";

import useScreenSize from "../../../services/useScreenSize";
import MetaMaskService from "../../../services/MetaMaskService";
import ProfileMenu from "./ProfileMenu";

const pages = [
  { href: "/", name: "MainPage" },
  { href: "/create-collection", name: "Create Collection" },
  { href: "/create-nft", name: "Create Nft" },
];

function Header() {
  const screenSize = useScreenSize();
  const { isConnected, errorMessage, connectToMetaMask } = MetaMaskService();
  const handleConnect = () => {
    connectToMetaMask();
  };

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {screenSize.width >= 960 && (
            <div>
              <BoxLogoMainStyle component="img" alt="Diption" src={logo512} />
            </div>
          )}
          {screenSize.width <= 960 && (
            <>
              <BoxMainStyle>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {pages.map(function (data, index) {
                    return (
                      <MenuItem key={index} onClick={data.href}>
                        <Typography textAlign="center">{data.name}</Typography>
                      </MenuItem>
                    );
                  })}
                </Menu>
              </BoxMainStyle>
            </>
          )}
          {screenSize.width <= 960 && (
            <>
              <box>
                <BoxLogoMainStyle component="img" src={logo512} />
              </box>
            </>
          )}
          {screenSize.width >= 960 && (
            <>
              <BoxMenuMainStyle>
                {pages.map((data, index) => (
                  <ButtonMenuMainStyle
                    variant="text"
                    color="text"
                    key={index}
                    href={data.href}
                  >
                    {data.name}
                  </ButtonMenuMainStyle>
                ))}
              </BoxMenuMainStyle>
            </>
          )}
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Stack direction="row" spacing={3}>
            <ChipMainStyle icon={<PersonIcon />} />
            <ChipMainStyle icon={<ShoppingBagIcon />} />
            <ProfileMenu />
            {isConnected ? (
              <Tooltip title="You are connected to MetaMask!">
                <ChipMainStyleConnectMetamask
                  icon={<AccountBalanceWalletIcon />}
                />
              </Tooltip>
            ) : (
              <Tooltip title={errorMessage + " Please Connect to MetaMask"}>
                <ChipMainStyleNoConnectMetamask
                  onClick={handleConnect}
                  icon={<AccountBalanceWalletIcon />}
                />
              </Tooltip>
            )}
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
