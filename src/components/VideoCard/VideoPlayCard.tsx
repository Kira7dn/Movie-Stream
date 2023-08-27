import { useGetMovieTrailerQuery } from "@/state/api";
import { Box } from "@mui/material";
import ReactPlayer from "react-player";
import { useMemo } from "react";

type Props = {
  id: number;
  isPlay?: { open: boolean };
};

const VideoPlayCard = ({ id, isPlay }: Props) => {
  const { data } = useGetMovieTrailerQuery(id);
  const trailer = useMemo(() => {
    return data && data.results.find((video) => video.type === "Trailer");
  }, [data]);
  if (trailer)
    return (
      <Box
        sx={{
          width: "400px",
          height: "100%",
          position: "relative",
        }}
      >
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${trailer.key}`}
          playing={isPlay?.open}
          controls={false}
          muted
          width="100%"
          height="100%"
        />
        <Box
          sx={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            opacity: 0,
          }}
        ></Box>
      </Box>
    );
};

export default VideoPlayCard;
