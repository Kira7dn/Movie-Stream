import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface MoviesResponse {
  page: number;
  results: Array<Movie>;
}
export interface Movie {
  adult?: boolean;
  backdrop_path: string;
  first_air_date?: string;
  genres?: Array<{
    id: number;
    name: string;
  }>;
  genre_ids?: Array<number>;
  id: number;
  title?: string;
  name?: string;
  overview?: string;
  poster_path?: string;
  release_date?: string;
  media_type?: string;
  currentTime?: string;
}
export interface TrailerResponse {
  id: string;
  results: Array<{
    key: string;
    site: string;
    name: string;
    type: string;
  }>;
}
export interface Cast {
  id: number;
  name: string;
  known_for_department: string;
  character: string;
  profile_path: string;
  job?: string;
}
export interface CastResponse {
  id: number;
  cast: Array<Cast>;
  crew: Array<Cast>;
}

const headers = {
  accept: "application/json",
  Authorization: `Bearer ${import.meta.env.VITE_API_Access_Token}`,
};
export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  reducerPath: "tmdb",
  tagTypes: [
    "Movies",
    "NewRealease",
    "Popular",
    "MovieDetail",
    "MovieTrailer",
    "CastList",
  ],
  endpoints: (builder) => ({
    getMovies: builder.query<MoviesResponse, void>({
      query: () => ({
        url: "trending/all/week",
        method: "GET",
        language: "en-US",
        page: 1,
        headers: headers,
      }),
      providesTags: ["Movies"],
    }),
    getNewReleaseMovies: builder.query<MoviesResponse, void>({
      query: () => ({
        url: "movie/now_playing",
        method: "GET",
        language: "en-US",
        page: 1,
        headers: headers,
      }),
      providesTags: ["NewRealease"],
    }),
    getPopularMovie: builder.query<MoviesResponse, void>({
      query: () => ({
        url: "movie/popular",
        method: "GET",
        language: "en-US",
        page: 1,
        headers: headers,
      }),
      providesTags: ["Popular"],
    }),
    getMovieDetail: builder.query<Movie, number>({
      query: (movie_id) => ({
        url: `movie/${movie_id}`,
        method: "GET",
        language: "en-US",
        headers: headers,
      }),
      providesTags: ["MovieDetail"],
    }),
    getMovieCast: builder.query<CastResponse, number>({
      query: (movie_id) => ({
        url: `movie/${movie_id}/credits`,
        method: "GET",
        language: "en-US",
        headers: headers,
      }),
      providesTags: ["CastList"],
    }),
    getMovieTrailer: builder.query<TrailerResponse, number>({
      query: (movie_id) => ({
        url: `/movie/${movie_id}/videos`,
        method: "GET",
        language: "en-US",
        headers: headers,
      }),
      providesTags: ["MovieTrailer"],
    }),
  }),
});
export const {
  useGetMoviesQuery,
  useGetMovieDetailQuery,
  useGetMovieTrailerQuery,
  useGetNewReleaseMoviesQuery,
  useGetPopularMovieQuery,
  useGetMovieCastQuery,
} = api;
