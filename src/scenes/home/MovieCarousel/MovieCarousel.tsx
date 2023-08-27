import { useGetMoviesQuery } from "@/state/api";
import CarouselWrapper from "@/components/carousel/CarouselWrapper";
import CarouselItemSkeleton from "@/components/carousel/CarouselItemSkeleton";
import Error from "@/components/apiHandle/Error";
import CarouselItem from "@/components/carousel/CarouselItem";

const MovieCarousel = () => {
  const { data, error, isLoading } = useGetMoviesQuery();
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  isLoading && (
    <CarouselWrapper>
      {array.map((item) => {
        return <CarouselItemSkeleton key={item} />;
      })}
    </CarouselWrapper>
  );
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
