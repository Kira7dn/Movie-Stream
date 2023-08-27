import { useGetMovieDetailQuery, useGetMovieCastQuery } from "@/state/api";
import { Box, Typography, Button } from "@mui/material";
import { PlayArrow } from "@mui/icons-material";
import { Cast } from "@/state/api";
import CastList from "./CastList";

type Props = { id: number };
const getRole = (crew: Array<Cast>, role: string) => {
  const roleList = crew.filter(
    (person) => person.job === role || person.known_for_department === role
  );
  const roles = roleList.map((role) => role.name);
  return roles.slice(0, 3);
};
const getGenre = (genres: Array<{ id: number; name: string }>) =>
  genres.map((genre) => genre.name);

function MovieCardDetail({ id }: Props) {
  const { data: movieData } = useGetMovieDetailQuery(id);
  const { data: castData } = useGetMovieCastQuery(id);
  if (movieData && castData) {
    const { overview, genres } = movieData;
    const directors = getRole(castData.crew, "Director");
    const actors = getRole(castData.cast, "Acting");
    return (
      <Box
        sx={{
          backgroundColor: "#181818",
          opacity: "80%",
          width: "100%",
          height: "100%",
          padding: "14px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "4px",
          }}
        >
          <CastList list={directors} title="Director" />
          <CastList list={actors} title="Actor" />
          {genres && <CastList list={getGenre(genres)} title="Genre" />}
        </Box>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 500,
            color: "#ffffff",
            display: "-webkit-box",
            WebkitLineClamp: "10",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            lineHeight: "20px",
          }}
        >
          {overview}
        </Typography>
        <Box
          sx={{
            position: "absolute",
            bottom: "4px",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          <Button
            sx={{
              width: "fit-content",
              opacity: "100%",
            }}
            variant="contained"
          >
            <Box
              sx={{
                display: "flex",
                columnGap: "6px",
              }}
            >
              <PlayArrow />
              <Typography variant="h4" sx={{ fontWeight: 500, color: "#fff" }}>
                PLAY
              </Typography>
            </Box>
          </Button>
        </Box>
      </Box>
    );
  }
}

export default MovieCardDetail;
