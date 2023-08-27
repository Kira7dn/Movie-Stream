import { Box, Fade, Skeleton } from "@mui/material"; // Import các components cần thiết từ thư viện của bạn

const CarouselItemSkeleton = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1f1f1f", // Màu nền đen
        borderRadius: "8px", // Bo góc
        padding: "8px",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#333",
          opacity: "0.3",
        }}
      >
        <Skeleton variant="rectangular" width="100%" height={500} />{" "}
        {/* Placeholder cho hình ảnh nền */}
      </Box>
      <Fade
        in={true}
        appear={false}
        timeout={{ appear: 500, enter: 1000, exit: 300 }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "60%",
            textAlign: "left",
            width: "100%",
            padding: "0 15%",
            rowGap: "30px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box>
            <Skeleton variant="text" width="70%" height={40} />{" "}
            {/* Placeholder cho tiêu đề */}
            <Skeleton variant="text" width="100%" height={60} />{" "}
            {/* Placeholder cho mô tả */}
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "20px",
            }}
          >
            <Skeleton variant="rectangular" width={120} height={40} />{" "}
            {/* Placeholder cho nút xem */}
            <Skeleton variant="rectangular" width={200} height={40} />{" "}
            {/* Placeholder cho nút thông tin thêm */}
          </Box>
        </Box>
      </Fade>
    </Box>
  );
};

export default CarouselItemSkeleton;
