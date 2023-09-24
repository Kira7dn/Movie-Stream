import { Movie } from "@/state/api";
import { Box, Typography } from "@mui/material";
import genre from "@/assets/genre.json";
import idToName from "@/utils/idToName";
import extractYear from "@/utils/extractYear";
import PopOverCenter from "../popover/PopOverCenter";
import MovieCardDetail from "./MovieCardDetail";

type Props = {
  movie: Movie;
};

const MovieCard = ({ movie }: Props) => {
  const { title, poster_path, genre_ids, release_date, id } = movie;
  const release_year = extractYear(release_date);
  const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500/";
  const genreList = idToName(genre_ids || [1], genre.data).slice(0, 2);
  const genreRender = genreList.reduce((acc, genre) => {
    return `${acc} | ${genre}`;
  });
  return (
    <Box
      sx={{
        width: "280px",
        flexShrink: 0,
      }}
    >
      <Box
        sx={{
          marginTop: "10px",
          display: "flex",
          flexDirection: "column",
          gap: "14px",
        }}
      >
        <PopOverCenter>
          <img
            src={IMG_BASE_URL + poster_path}
            style={{
              width: "100%",
              height: "auto",
            }}
          />
          <MovieCardDetail id={id} />
        </PopOverCenter>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: "8px", sm: "14px" },
          }}
        >
          <Typography
            variant="h3"
            sx={{ padding: "0", fontSize: { xs: "20px", sm: "24px" } }}
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
              {release_year}
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
    </Box>
  );
};

export default MovieCard;
