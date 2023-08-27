import React, { useState } from "react";
import { Box, Zoom } from "@mui/material";
// import { Popover, Box } from "@mui/material";

type Props = { children: Array<React.ReactElement>; delay?: number };

const PopOverCenter = ({ children, delay = 500 }: Props) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  let timeout: ReturnType<typeof setTimeout>;
  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    const currentTarget = event.currentTarget;
    timeout = setTimeout(() => {
      setAnchorEl(currentTarget);
    }, delay);
  };

  const handlePopoverClose = () => {
    clearTimeout(timeout);
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const FirstChild = React.cloneElement(children[0]);
  const SecondChild = React.cloneElement(children[1], { isPlay: { open } });
  return (
    <>
      <Box
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
        sx={{
          position: "relative",
        }}
      >
        {FirstChild}
        <Zoom in={open}>
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          >
            {SecondChild}
          </Box>
        </Zoom>
        {/* {open && (
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          >
            {SecondChild}
          </Box>
        )} */}
      </Box>
    </>
  );
};

export default PopOverCenter;
