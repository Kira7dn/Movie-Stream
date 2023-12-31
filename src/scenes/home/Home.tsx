// import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import ContinueWatching from "./ContinueWatching";
import NewRelease from "./NewRelease";
import Popular from "./Popular";
import MovieCarousel from "./MovieCarousel/MovieCarousel";

const Home = () => {
  // const location = useLocation().pathname.slice(1);
  // const MovieCarousel = React.lazy(
  //   () => import("./MovieCarousel/MovieCarousel")
  // );
  return (
    <Box>
      <MovieCarousel />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        <ContinueWatching />
        <NewRelease />
        <Popular />
      </Box>
    </Box>
  );
};

export default Home;
