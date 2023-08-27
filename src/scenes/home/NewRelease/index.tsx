import MovieCard from "@/components/MovieCard/MovieCard";
import MovieCardSkeleton from "@/components/MovieCard/MovieCardSkeleton";
import MovieList from "@/components/wrapper/MovieList";
import { useGetNewReleaseMoviesQuery } from "@/state/api";

function NewRelease() {
  // apply 10 MovieCardSkeleton when loading
  const { data, isLoading } = useGetNewReleaseMoviesQuery();
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  if (isLoading)
    return (
      <MovieList title="NEW RELEASE">
        {array.map((item) => (
          <MovieCardSkeleton key={item} />
        ))}
      </MovieList>
    );
  if (data)
    return (
      <MovieList title="NEW RELEASE">
        {data.results.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </MovieList>
    );
}

export default NewRelease;
