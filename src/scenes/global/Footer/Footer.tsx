import { Box, Typography } from "@mui/material";
import netflix from "@/assets/netflix.svg";
import hbomax from "@/assets/HBOmax.svg";
import prime from "@/assets/prime.svg";
import disney from "@/assets/Disney+.svg";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ width: "100%", height: "1px", backgroundColor: "#333" }}></Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          padding: "40px 0",
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: "1440px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "60%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <Typography variant="h4">FQA</Typography>
              <Typography variant="h4">Media Center</Typography>
              <Typography variant="h4">Ways to Watch</Typography>
              <Typography variant="h4">Cookies Preferences</Typography>
              <Typography variant="h4">Speed Test</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <Typography variant="h4">Help Center</Typography>
              <Typography variant="h4">Investor Relations</Typography>
              <Typography variant="h4">Terms Of Use</Typography>
              <Typography variant="h4">Corporate Information</Typography>
              <Typography variant="h4">Legal Notices</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <Typography variant="h4">Account</Typography>
              <Typography variant="h4">Jobs</Typography>
              <Typography variant="h4">Privacy</Typography>
              <Typography variant="h4">Contact Us</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                alignItems: "flex-start",
              }}
            >
              <img src={netflix} style={{ height: "30px", width: "auto" }} />
              <img src={hbomax} style={{ height: "20px", width: "auto" }} />
              <img src={disney} style={{ height: "40px", width: "auto" }} />
              <img src={prime} style={{ height: "40px", width: "auto" }} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
