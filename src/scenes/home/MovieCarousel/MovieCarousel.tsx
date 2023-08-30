import { useGetMoviesQuery } from "@/state/api";
import CarouselWrapper from "@/components/carousel/CarouselWrapper";
import Error from "@/components/apiHandle/Error";
import CarouselItem from "@/components/carousel/CarouselItem";
import MovieCarouselSkeleton from "./MovieCarouselSkeleton";

const MovieCarousel = () => {
  const { data, error, isLoading } = useGetMoviesQuery();
  isLoading && <MovieCarouselSkeleton />;
  error && <Error error={error} />;
  if (data) {
    const movies = data.results.slice(0, 10);
    return (
      <CarouselWrapper>
        {movies.map((movie, index) => {
          return <CarouselItem movie={movie} key={index} />;
        })}
      </CarouselWrapper>
    );
  }
};

export default MovieCarousel;
