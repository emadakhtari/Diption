import { createTheme } from "@mui/material/styles";
const theme = createTheme({
  "@global": {
    body: {
      backgroundColor: "#333333",
    },
  },
  direction: "ltr",

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    background: {
      main: "#333333",
    },
    primary: {
      main: "#333333",
      light: "#999999",
      dark: "#272727",
    },
    secondary: {
      main: "#f1c40e",
      light: "#FBEDB7",
      dark: "#E7A204 ",
    },
    tertiary: {
      main: "#FFFBEA",
      light: "#fff",
      dark: "#FFF8DB",
    },
    quaternary: {
      main: "#5b5b05",
      light: "#CECEB4",
      dark: "#2F2F01",
    },
    // quinary: {
    //   main: "#616161",
    //   light: "#D0D0D0",
    //   dark: "#333333",
    // },
    error: {
      main: "#F44336",
      light: "#FFCDD2",
      dark: "#D32F2F",
    },
    warning: {
      main: "#FF9800",
      light: "#FFE0B2",
      dark: "#F57C00",
    },
    info: {
      main: "#3F51B5",
      light: "#536DFE",
      dark: "#303F9F",
    },
    success: {
      main: "#009688",
      light: "#B2DFDB",
      dark: "#00796B",
    },
    text: {
      main: "#fbfbdd",
      light: "#FFFFFF",
      dark: "#000000",
    },
  },
  shape: {
    borderRadius: 5,
  },
  transitions: {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    },
    easing: {
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
    },
  },
  typography: {
    fontFamily: "Poppins",
    h6: {
      fontSize: "10px", // Responsive font size for h5
      "@media (min-width:600px)": {
        fontSize: "1.5rem",
      },
    },
  },
  components: {
    MuiDivider: {
      styleOverrides: {
        root: {},
      },
    },
    MuiBox: {
      styleOverrides: {
        root: {},
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {},
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          "@media (min-width:600px)": {},
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: "#FFFFFF",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#f1c40f80",
          },
          "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#f1c40f80",
          },
          "& .MuiOutlinedInput-root.Mui-focused  .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "#f1c40f80",
            },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#f1c40f80 !important",
          },
          "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#f1c40f80 !important",
          },
          "& .MuiOutlinedInput-root.Mui-focused  .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "#f1c40f80 !important",
            },
        },
      },
    },

    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: "#E2E2E3",
          "&.Mui-focused": {
            color: "#E1E1E1",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          "&.Mui-disabled": {},
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {},
      },
    },

    MuiFormControl: {
      styleOverrides: {
        root: {
          ".Mui-error": {
            ".MuiInputBase-input": {
              color: "#A31545",
            },
            ".MuiInputAdornment-root": {
              ".MuiButtonBase-root": {
                ".MuiSvgIcon-root": {
                  color: "#A31545",
                },
              },
            },
          },
        },
      },
    },
    MuiFormControlLabel: {},
    MuiAppBar: {
      styleOverrides: {
        root: {},
      },
    },
    MuiCheckbox: {},
    MuiLink: {},
    MuiGrid: {},

    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#FFFFFF",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#333333",
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          ".MuiTypography-root": {
            color: "#FFFFFF",
          },
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          backgroundColor: "#f1c40e",
          boxShadow: "0 .5rem 10px #0000004d",
          border: "1px solid #f1c40e",
          "&:hover": {
            color: "#FFFFFF",
            border: "1px solid #f1c40e",
          },
        },
      },
    },
    MuiTheme: {},
    MuiIconButton: {},
    MuiSvgIcon: {},
    MuiInputAdornment: {},
  },
});

export default theme;
