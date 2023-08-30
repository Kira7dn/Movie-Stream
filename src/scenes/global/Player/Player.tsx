import { Box, Fade, Zoom, IconButton } from "@mui/material";
import { setIsPlayerOpen } from "@/state/playerReducer";
import { useAppSelector, useAppDispatch } from "@/state/hooks";
import { ArrowBack } from "@mui/icons-material";
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";

// Create video player same with Netflix

const Player = () => {
  const dispatch = useAppDispatch();
  const isPlayerOpen = useAppSelector((state) => state.player.isPlayerOpen);
  return (
    <Box>
      <Fade in={isPlayerOpen}>
        <Box
          sx={{
            position: "fixed",
            zIndex: 100,
            left: "0",
            top: "0",
            bottom: "0",
            right: "0",
          }}
        >
          <Zoom
            in={isPlayerOpen}
            timeout={{ appear: 100, enter: 500, exit: 100 }}
          >
            <Box
              position="relative"
              padding={{ xs: "8px", md: "30px" }}
              height="100%"
              width="100%"
              sx={{
                backgroundColor: "#181818",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  position: "absolute",
                  top: "0",
                  left: "0",
                }}
              >
                <IconButton
                  sx={{ padding: "8px" }}
                  onClick={() => dispatch(setIsPlayerOpen())}
                >
                  <ArrowBack
                    sx={{
                      fontSize: "50px",
                      color: "#ffffff",
                    }}
                  />
                </IconButton>
              </Box>
              <VideoPlayer id="uYPbbksJxIg" isPlayerOpen={isPlayerOpen} />
            </Box>
          </Zoom>
        </Box>
      </Fade>
    </Box>
  );
};

export default Player;
