import VideoCard from "@/components/VideoCard/VideoCard";
// import VideoCardSkeleton from "@/components/VideoCard/VideoCardSkeleton";
import MovieList from "@/components/wrapper/MovieList";

const continueWatching = [
  {
    title: "Barbie",
    backdrop_path: "/nHf61UzkfFno5X1ofIhugCPus2R.jpg",
    genre_ids: [35, 12, 14],
    id: 346698,
    poster_path: "/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
    release_date: "2023-07-19",
    currentTime: "50%",
  },
  {
    title: "Guardians of the Galaxy Vol. 3",
    backdrop_path: "/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg",
    genre_ids: [878, 12, 28],
    id: 447365,
    poster_path: "/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
    release_date: "2023-05-03",
    currentTime: "50%",
  },
  {
    title: "The Flash",
    backdrop_path: "/yF1eOkaYvwiORauRCPWznV9xVvi.jpg",
    genre_ids: [28, 12, 878],
    id: 298618,
    poster_path: "/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg",
    release_date: "2023-06-13",
    currentTime: "50%",
  },
  {
    title: "Oppenheimer",
    backdrop_path: "/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
    genre_ids: [18, 36],
    id: 872585,
    poster_path: "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    release_date: "2023-07-19",
    currentTime: "50%",
  },
  {
    title: "Spider-Man: Across the Spider-Verse",
    backdrop_path: "/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg",
    genre_ids: [16, 28, 12, 878],
    id: 569094,
    poster_path: "/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
    release_date: "2023-05-31",
    currentTime: "50%",
  },
  {
    title: "Insidious: The Red Door",
    backdrop_path: "/i2GVEvltEu3BXn5crBSxgKuTaca.jpg",
    genre_ids: [27, 9648, 53],
    id: 614479,
    poster_path: "/uS1AIL7I1Ycgs8PTfqUeN6jYNsQ.jpg",
    release_date: "2023-07-05",
    currentTime: "50%",
  },
  {
    title: "Transformers: Rise of the Beasts",
    backdrop_path: "/2vFuG6bWGyQUzYS9d69E5l85nIz.jpg",
    genre_ids: [28, 12, 878],
    id: 667538,
    poster_path: "/gPbM0MK8CP8A174rmUwGsADNYKD.jpg",
    release_date: "2023-06-06",
    currentTime: "50%",
  },
];

function ContinueWatching() {
  return (
    <MovieList title="CONTINUE WATCHING">
      {continueWatching.map((movie) => {
        return <VideoCard key={movie.id} movie={movie} />;
      })}
    </MovieList>
  );
}

export default ContinueWatching;
