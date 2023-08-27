import React, { useRef } from "react";
import ContainerWrapper from "./ContainerWrapper";
import FlexBetween from "./FlexBetween";
import { Box, Typography, IconButton } from "@mui/material";
import { ArrowCircleLeft, ArrowCircleRight } from "@mui/icons-material";
import carouselNavigation from "@/function/carouselNavigation";

type Props = {
  title: string;
  children: Array<React.ReactElement>;
};

const MovieList = ({ title, children }: Props) => {
  const carouselContainer = useRef<HTMLDivElement | null>(null);
  return (
    <ContainerWrapper sx={{ marginTop: "20px" }}>
      <FlexBetween>
        <Typography variant="h2">{title}</Typography>
        <Box sx={{ display: "flex", gap: "16px" }}>
          <IconButton
            aria-label="left"
            onClick={() => carouselNavigation("left", carouselContainer)}
            sx={{ color: "#fff", padding: "0" }}
          >
            <ArrowCircleLeft sx={{ height: "40px", width: "40px" }} />
          </IconButton>
          <IconButton
            aria-label="right"
            onClick={() => carouselNavigation("right", carouselContainer)}
            size="large"
            sx={{ color: "#fff", padding: "0" }}
          >
            <ArrowCircleRight sx={{ height: "40px", width: "40px" }} />
          </IconButton>
        </Box>
      </FlexBetween>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          gap: "40px",
          marginTop: "10px",
          overflowY: "hidden",
          "&::-webkit-scrollbar": { width: 0, height: 0 },
        }}
        ref={carouselContainer}
      >
        {children}
      </Box>
    </ContainerWrapper>
  );
};

export default MovieList;
