import MovieCard from "@/components/MovieCard/MovieCard";
import MovieCardSkeleton from "@/components/MovieCard/MovieCardSkeleton";
import Error from "@/components/apiHandle/Error";
import MovieList from "@/components/wrapper/MovieList";
import { useGetPopularMovieQuery } from "@/state/api";

function Popular() {
  const { data, isLoading, error } = useGetPopularMovieQuery();
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  isLoading && array.map((item) => <MovieCardSkeleton key={item} />);
  error && <Error error={error} />;
  if (data)
    return (
      <MovieList title="POPULAR">
        {data.results.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </MovieList>
    );
}

export default Popular;
