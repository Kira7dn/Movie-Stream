import { Box } from "@mui/material";

type Props = {
  name: string;
};

function CastItem({ name }: Props) {
  return (
    <Box
      display="inline"
      sx={{
        color: "#fff",
      }}
    >
      {name}
    </Box>
  );
}

export default CastItem;
