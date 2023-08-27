import { Movie } from "@/state/api";
import { Box, Typography, Button, Fade } from "@mui/material";
import { PlayArrow, Info } from "@mui/icons-material";

type Props = {
  movie: Movie;
  isSelected?: boolean;
};

const CarouselItem = ({ movie, isSelected = true }: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { backdrop_path, title, name, overview } = movie;
  const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";
  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#333",
          opacity: "0.3",
          marginTop: "30px",
        }}
      >
        <img
          src={IMG_BASE_URL + backdrop_path}
          style={{ width: "100%", height: "500px", objectFit: "cover" }}
        />
      </Box>
      <Fade
        in={isSelected}
        appear={false}
        timeout={{ appear: 500, enter: 1000, exit: 300 }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "60%",
            textAlign: "left",
            width: "100%",
            padding: "0 15%",
            rowGap: "30px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box>
            <Typography variant="h2">{title || name}</Typography>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 500,
                color: "#9c9c9c",
                display: "-webkit-box",
                WebkitLineClamp: "3",
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                lineHeight: "20px",
              }}
            >
              {overview}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "20px",
            }}
          >
            <Button sx={{ width: "fit-content" }} variant="contained">
              <Box
                sx={{
                  display: "flex",
                  columnGap: "6px",
                }}
              >
                <PlayArrow />
                <Typography
                  variant="h4"
                  sx={{ fontWeight: 500, color: "#fff" }}
                >
                  WATCH NOW
                </Typography>
              </Box>
            </Button>
            <Button
              sx={{ width: "fit-content" }}
              variant="outlined"
              color="secondary"
            >
              <Box
                sx={{
                  display: "flex",
                  columnGap: "6px",
                }}
              >
                <Info />
                <Typography
                  variant="h4"
                  sx={{ fontWeight: 500, color: "#fff" }}
                >
                  MORE INFORMATION
                </Typography>
              </Box>
            </Button>
          </Box>
        </Box>
      </Fade>
    </Box>
  );
};

export default CarouselItem;
