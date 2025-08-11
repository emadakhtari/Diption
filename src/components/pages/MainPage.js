import React from "react";
import { Container, Typography } from "@mui/material";
import CollectionsSlider from "../elements/MainPage/CollectionsSlider";

function MainPage() {
  return (
    <>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          align="center"
          sx={{
            pt: 4,
            pb: 2,
          }}
        >
          The latest collections
        </Typography>
        <div className="parent">
          <CollectionsSlider />
        </div>
      </Container>
    </>
  );
}

export default MainPage;
