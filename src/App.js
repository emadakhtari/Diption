import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";

import { BreakpointProvider } from "react-socks";

// MUI Start
import { ThemeProvider } from "@mui/material/styles";
import Backdrop from "@mui/material/Backdrop";
import { GlobalStyles, LinearProgress } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import CircularProgress from "@mui/material/CircularProgress";
import theme from "./theme";
import Header from "./components/elements/AppBar/Header";
import Footer from "./components/elements/AppDown/Footer";
// MUI End

const MainPage = lazy(() => import("./components/pages/MainPage"));
const CreateCollectionPage = lazy(() =>
  import("./components/pages/CreateCollectionPage")
);
const CreateNFTPage = lazy(() => import("./components/pages/CreateNFTPage"));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline
        
      />
      <GlobalStyles styles={{
          background: "#333333",
        }}/>
      <BreakpointProvider>
        <Router>
          <ToastContainer />

          <Suspense
            fallback={
              <Backdrop
                sx={{
                  color: "#FF9800",
                  zIndex: 1,
                  backgroundColor: "#333333",
                }}
                open={true}
              >
                <LinearProgress color="tertiary" />
                <CircularProgress color="inherit" />
              </Backdrop>
            }
          >
            {/* elements/Header.js */}
            <Header />

            <Routes>
              <Route path="/" exact element={<MainPage />} />
              <Route
                path="/create-collection"
                element={<CreateCollectionPage />}
              />
              <Route path="/create-nft" element={<CreateNFTPage />} />
            </Routes>
            <Footer />
          </Suspense>
        </Router>
      </BreakpointProvider>
    </ThemeProvider>
  );
}

export default App;
