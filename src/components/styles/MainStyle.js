import styled from "styled-components";
import theme from "../../theme";
import { Box, Button, Chip, InputBase, Paper } from "@mui/material";

export const BoxLogoMainStyle = styled(Box)(() => ({
  width: 50,
  display: "flex",
  flexGrow: 1,
  marginLeft: "1rem",
  marginRight: "1rem",
}));

export const BoxMainStyle = styled(Box)(() => ({
  color: theme.palette.secondary.main,
  flexGrow: 1,
  display: "flex",
}));
export const BoxMenuMainStyle = styled(Box)(() => ({
  flexGrow: 1,
  display: "flex",
}));

export const Search = styled("div")(() => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.primary.main,
  border: `2px solid ${theme.palette.secondary.main}`,
  color: theme.palette.text.light,
  flexGrow: 1,
  display: "flex",

  "&:hover": {},
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "auto",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
  },
}));

export const SearchIconWrapper = styled("div")(() => ({
  padding: theme.spacing(0, 2),
  height: "100% !important",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledInputBase = styled(InputBase)(() => ({
  color: theme.palette.text.light,
  width: "100%",
  "& .MuiInputBase-input": {
    color: theme.palette.text.light,
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      //   width: "20ch",
    },
  },
}));
export const ChipMainStyle = styled(Chip)(() => ({
  backgroundColor: `${theme.palette.secondary.main} !important`,
  width: 36,
  height: "36px !important",
  "&:hover": {
    backgroundColor: `${theme.palette.quaternary.main} !important`,
  },
  borderRadius: `${theme.shape.borderRadius}px !important`,
  "& .MuiChip-icon": {
    color: `${theme.palette.text.dark} !important`,
  },
  "& .MuiChip-label": {
    paddingRight: 0,
  },
}));
export const ChipMainStyleNoConnectMetamask = styled(Chip)(() => ({
  backgroundColor: `${theme.palette.warning.dark} !important`,
  width: 36,
  height: "36px !important",
  borderRadius: `${theme.shape.borderRadius}px !important`,
  "&:hover": {
    backgroundColor: `${theme.palette.warning.main} !important`,
  },
  "& .MuiChip-icon": {
    color: `${theme.palette.text.dark} !important`,
  },
  "& .MuiChip-label": {
    paddingRight: 0,
  },
}));
export const ChipMainStyleConnectMetamask = styled(Chip)(() => ({
  backgroundColor: `${theme.palette.success.main} !important`,
  width: 36,
  height: "36px !important",
  borderRadius: `${theme.shape.borderRadius}px !important`,
  "& .MuiChip-icon": {
    color: `${theme.palette.text.dark} !important`,
  },
  "& .MuiChip-label": {
    paddingRight: 0,
  },
}));

export const ButtonMenuMainStyle = styled(Button)(() => ({
  backgroundColor: "unset !important",
  border: "0 !important",
  boxShadow:"unset !important",
  color: theme.palette.text.light,
  display: "block",
  "&:hover": {
    color: theme.palette.secondary.main,
    backgroundColor: "unset !important",
  },
}));

export const ButtonMenuMainProfileStyle = styled(Button)(() => ({
  color: theme.palette.text.light,
  display: "block",
  padding: "0 !important",
  width: 36,
  height: 36,
  minWidth: "36px !important",
  margin: 0,
  "&:hover": {
    color: theme.palette.secondary.main,
    backgroundColor: "unset !important",
  },
}));
export const PaperCarouselMainStyle = styled(Paper)(() => ({
  padding: "1rem",
  borderRadius: theme.shape.borderRadius,
}));
