import { Box, Skeleton, Typography } from "@mui/material"; // Import các components cần thiết từ thư viện của bạn
const MovieCardSkeleton = () => {
  return (
    <Box
      sx={{
        width: "280px",
        flexShrink: 0,
        backgroundColor: "#1f1f1f", // Màu nền đen
        borderRadius: "8px", // Bo góc
        padding: "16px",
      }}
    >
      <Box
        sx={{
          marginTop: "10px",
          display: "flex",
          flexDirection: "column",
          gap: "14px",
        }}
      >
        <Skeleton variant="rectangular" width="100%" height={400} />{" "}
        {/* Placeholder cho hình ảnh */}
        <Skeleton variant="rectangular" width="100%" height={30} />{" "}
        {/* Placeholder cho chi tiết phim */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "14px",
          }}
        >
          <Skeleton variant="text" width="60%" height={40} />{" "}
          {/* Placeholder cho tiêu đề */}
          <Box
            sx={{
              display: "flex",
              gap: "14px",
              fontSize: "22px",
              color: "#ffffff", // Màu chữ trắng
            }}
          >
            <Typography variant="h3" sx={{ opacity: "50%", fontSize: "20px" }}>
              <Skeleton variant="text" width={80} />{" "}
              {/* Placeholder cho năm phát hành */}
            </Typography>
            <Typography variant="h3" sx={{ opacity: "50%", fontSize: "20px" }}>
              <Skeleton variant="text" width={100} />{" "}
              {/* Placeholder cho thể loại */}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MovieCardSkeleton;
