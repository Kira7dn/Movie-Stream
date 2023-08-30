import { useGetMovieTrailerQuery } from "@/state/api";
import ReactPlayer from "react-player";
import { useMemo } from "react";

type Props = {
  id: number;
  isPlay?: { open: boolean };
};

const VideoPlayCard = ({ id, isPlay }: Props) => {
  const { data } = useGetMovieTrailerQuery(id);
  const handleWrapperClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  const trailer = useMemo(() => {
    return data && data.results.find((video) => video.type === "Trailer");
  }, [data]);
  if (trailer)
    return (
      <div
        style={{
          width: "400px",
          height: "100%",
          position: "relative",
          pointerEvents: "none",
        }}
        onClick={handleWrapperClick}
      >
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${trailer.key}`}
          playing={isPlay?.open}
          muted
          width="100%"
          height="100%"
        />
      </div>
    );
};

export default VideoPlayCard;
