import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { IconButton } from "@mui/material";
import React, { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

type Props = {
  children: Array<React.ReactElement>;
};
const CarouselWrapper = ({ children }: Props) => {
  const isMobile = useMediaQuery("(max-width: 1200px)");
  const [selectItem, SetSelectItem] = useState(0);
  return (
    <Carousel
      infiniteLoop={true}
      showThumbs={false}
      showIndicators={true}
      showStatus={false}
      centerMode={true}
      centerSlidePercentage={isMobile ? 100 : 60}
      // centerSlidePercentage={60}
      onChange={(selected) => SetSelectItem(selected)}
      renderArrowPrev={(onClickHandler) => (
        <IconButton
          onClick={onClickHandler}
          sx={{
            position: "absolute",
            top: "50%",
            left: "20%",
            color: "white",
            padding: "5px",
            zIndex: 10,
            display: isMobile ? "none" : "block",
          }}
        >
          <NavigateBeforeIcon sx={{ fontSize: 40 }} />
        </IconButton>
      )}
      renderArrowNext={(onClickHandler) => (
        <IconButton
          onClick={onClickHandler}
          sx={{
            position: "absolute",
            top: "50%",
            right: "20%",
            color: "white",
            padding: "5px",
            zIndex: 10,
            display: isMobile ? "none" : "block",
          }}
        >
          <NavigateNextIcon sx={{ fontSize: 40 }} />
        </IconButton>
      )}
    >
      {children.map((child, index) => {
        const Child = React.cloneElement(child, {
          isSelected: index === selectItem,
        });
        return Child;
      })}
    </Carousel>
  );
};

export default CarouselWrapper;
