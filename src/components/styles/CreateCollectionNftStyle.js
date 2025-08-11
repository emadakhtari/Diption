import styled from "styled-components";
import {
  Alert,
  Box,
  Button,
  CardMedia,
  CircularProgress,
  Divider,
  Grid,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import theme from "../../theme";
import { Card, Stack } from "react-bootstrap";

export const CardUploadCCollectionStyle = styled(Card)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
}));

export const LabelUploadCCollectionStyle = styled("label")(() => ({
  backgroundColor: theme.palette.primary.main,
  boxShadow: ` ${theme.palette.secondary.main} 0px 0px 8px 0px`,
  position: "relative",
  border: ` 3px dashed  ${theme.palette.primary.light} `,
  display: "block",
  padding: "6px 12px",
  cursor: "pointer",
  borderRadius: 10,
  textAlign: "center",
  width: "100%",
  height: "180px",
  maxWidth: "180px",
  margin: "25px auto",
}));

export const InputUploadCCollectionStyle = styled("input")(() => ({
  width: 0,
  height: 0,
  display: "none",
}));
export const BoxCCollectionStyle = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "& span": {
    width: "2em !important",
    height: "2em !important",
    display: "block",

    "& svg": {
      color: theme.palette.secondary.main,
      width: "2em !important",
      height: "2em !important",
    },
  },
}));
export const TypographyUploadCCollectionStyle = styled(Typography)(() => ({
  marginBottom: "10px !important",
}));
export const ButtonUploadCCollectionUploaderStyle = styled(Button)(() => ({
  border: `1px solid ${theme.palette.secondary.main} !important`,
  borderRadius: `${theme.shape.borderRadius}px !important`,
  height: 32,
  width: "80%",
  marginLeft: "10% !important",
  marginRight: "10% !important",
  fontSize: "10px !important",
  color: `${theme.palette.primary.main}`,
  "& svg": {
    color: `${theme.palette.secondary.main} !important`,
    width: "20px !important",
    height: "20px !important",
  },
  cursor: "pointer !important",
}));
export const ButtonUploadDisCCollectionUploaderStyle = styled(Button)(() => ({
  border: `1px solid ${theme.palette.secondary.light} !important`,
  borderRadius: `${theme.shape.borderRadius}px !important`,
  height: 32,
  width: "80%",
  marginLeft: "10% !important",
  marginRight: "10% !important",
  fontSize: "10px !important",
  justifyContent: "space-evenly !important",
  color: `${theme.palette.primary.main} !important`,
  "& svg": {
    color: `${theme.palette.secondary.light} !important`,
    width: "20px !important",
    height: "20px !important",
  },
}));

// MuiCircularProgress-root
export const StackUploadCCollectionStyle = styled(Stack)(() => ({
  height: "100%",
}));

export const CircularProgressUploadCCollectionUploaderStyle = styled(
  CircularProgress
)(() => ({
  width: "20px !important",
  height: "20px !important",
}));
export const CircularProgressCreateCollectionStyle = styled(CircularProgress)(
  () => ({
    width: "20px !important",
    height: "20px !important",
    marginLeft: 10,
  })
);

export const CardMediaUploadCCollectionStyle = styled(CardMedia)(() => ({
  width: "175px",
  height: "175px",
  borderRadius: 12,
}));
export const LabelUploadAfterCollectionStyle = styled("label")(() => ({
  backgroundColor: theme.palette.primary.main,
  boxShadow: ` ${theme.palette.secondary.main} 0px 0px 8px 0px`,
  position: "relative",
  border: ` 3px dashed  ${theme.palette.primary.light} `,
  display: "block",
  cursor: "pointer",
  borderRadius: 10,
  textAlign: "center",
  width: "100%",
  height: "180px",
  maxWidth: "180px",
  margin: "25px auto",
  padding: "0 !important",
}));
export const DividerCCollectionStyle = styled(Divider)(() => ({
  marginTop: "2rem !important",
  marginBottom: "2rem !important",
  "&:after": {
    color: `${theme.palette.secondary.light} !important`,
    border: `thin solid  ${theme.palette.secondary.main} !important`,
  },
  "&:before": {
    color: `${theme.palette.secondary.light} !important`,
    border: `thin solid  ${theme.palette.secondary.main} !important`,
  },
}));
export const TextFieldCollectionNameStyle = styled(TextField)(() => ({
  width: "80%",
}));
export const PaperCCollectionStyle = styled(Paper)(() => ({
  padding: 8,
  textAlign: "center",
  flexGrow: 1,
}));
export const AlertCCollectionStyle = styled(Alert)(() => ({
  alignItems: "center",
  "& svg": {
    color: theme.palette.error.dark,
    marginLeft: "1rem",
  },
  "& .MuiAlert-message": {
    display: "flex",
    width: "100%",
    alignItems: "center",
    "& svg": {
      color: theme.palette.primary.main,
      marginLeft: "1rem",
    },
  },
  "& .MuiTypography-root": {
    display: "inline-flex",
  },
}));
export const GridItemButtonCCollectionStyle = styled(Grid)(() => ({
  display: "flex",
  justifyContent: "center",
  margin: "3rem 0 !important",
}));
export const ButtonCCollectionStyle = styled(Button)(() => ({
  fontSize: "15px !important",
  paddingRight: "2rem !important",
  paddingLeft: "2rem !important",
  fontWeight: "bold !important",
}));
export const SelectCCollectionStyle = styled(Select)(() => ({
  width: "80% !important",
}));
export const TextFieldMultilineCollectionNameStyle = styled(TextField)(() => ({
  width: "80% !important",
}));
export const BoxCreateCollectionSelect = styled(Box)(() => ({
  display: "flex",
}));
