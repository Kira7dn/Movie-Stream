// import React from "react";
import ReactPlayer from "react-player/youtube";

type Props = {
  id: string;
  isPlayerOpen: boolean;
};

const VideoPlayer = ({ id, isPlayerOpen }: Props) => {
  // Ngăn tương tác với YouTube player
  const handleWrapperClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      onClick={handleWrapperClick}
      style={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${id}`}
        playing={isPlayerOpen}
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default VideoPlayer;
