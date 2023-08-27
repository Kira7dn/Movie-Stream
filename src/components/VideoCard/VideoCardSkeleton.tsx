import { Box, Typography, Skeleton } from "@mui/material"; // Import các components cần thiết từ thư viện của bạn
import { PlayCircleFilledOutlined } from "@mui/icons-material";
const VideoCardSkeleton = () => {
  return (
    <Box
      sx={{
        width: "400px",
        flexShrink: 0,
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        backgroundColor: "#1f1f1f",
        borderRadius: "8px", // Bo góc
        padding: "16px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          borderRadius: "4px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Skeleton
          variant="rectangular"
          width="100%"
          height={0}
          sx={{
            paddingTop: "56.25%",
          }}
        />
        {/* Placeholder cho hình ảnh */}
        <PlayCircleFilledOutlined
          sx={{
            height: "50px",
            width: "50px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            cursor: "pointer",
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "14px",
        }}
      >
        <Skeleton variant="text" width="80%" height={30} />{" "}
        {/* Placeholder cho tiêu đề */}
        <Box
          sx={{
            display: "flex",
            gap: "14px",
            fontSize: "22px",
          }}
        >
          <Typography variant="h3" sx={{ opacity: "50%", fontSize: "20px" }}>
            <Skeleton variant="text" width={50} />{" "}
            {/* Placeholder cho năm phát hành */}
          </Typography>
          <Typography variant="h3" sx={{ opacity: "50%", fontSize: "20px" }}>
            <Skeleton variant="text" width={80} />{" "}
            {/* Placeholder cho thể loại */}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default VideoCardSkeleton;
