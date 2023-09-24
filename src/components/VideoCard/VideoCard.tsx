import { Movie } from "@/state/api";
import { Box, Typography } from "@mui/material";
import { tokens } from "@/theme";
import { PlayCircleFilledOutlined } from "@mui/icons-material";
import genre from "@/assets/genre.json";
import idToName from "@/utils/idToName";
import VideoPlayCard from "./VideoPlayCard";
import PopOverCenter from "../popover/PopOverCenter";

type Props = {
  movie: Movie;
};

const VideoCard = ({ movie }: Props) => {
  const { title, backdrop_path, genre_ids, id } = movie;
  const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500/";
  const genreList = idToName(genre_ids || [1], genre.data).slice(0, 2);
  const genreRender = genreList.reduce((acc, genre) => {
    return `${acc} | ${genre}`;
  });
  const current = Math.random();
  return (
    <Box
      sx={{
        width: "400px",
        flexShrink: 0,
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <PopOverCenter>
        <Box
          sx={{
            width: "100%",
            borderRadius: "4px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <img
            src={IMG_BASE_URL + backdrop_path}
            style={{
              width: "100%",
              height: "auto",
            }}
          />
          <PlayCircleFilledOutlined
            sx={{
              height: "50px",
              width: "50px",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              cursor: "pointer",
            }}
          />{" "}
          <Box
            sx={{
              width: "100%",
              height: "8px",
              backgroundColor: "#8E8E8E",
              position: "absolute",
              left: "0",
              bottom: "0",
            }}
          >
            <Box
              sx={{
                width: current,
                height: "100%",
                background: tokens.primary[50],
              }}
            ></Box>
          </Box>
        </Box>
        <VideoPlayCard id={id} />
      </PopOverCenter>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { xs: "4px", sm: "14px" },
        }}
      >
        <Typography
          variant="h3"
          sx={{ padding: "0", fontSize: { xs: "20px" } }}
        >
          {title}
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: { xs: "8px", sm: "14px" },
            fontSize: "22px",
          }}
        >
          <Typography
            variant="h3"
            sx={{ opacity: "50%", fontSize: { xs: "14px", sm: "20px" } }}
          >
            2023
          </Typography>
          <Typography
            variant="h3"
            sx={{ opacity: "50%", fontSize: { xs: "14px", sm: "20px" } }}
          >
            {genreRender}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default VideoCard;
