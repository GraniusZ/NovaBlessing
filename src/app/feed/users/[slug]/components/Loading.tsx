import { Box, CircularProgress } from "@mui/material";
export const Loading = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ boxShadow: 0 }}
    >
      <CircularProgress sx={{ mt: "100px", mx: "auto" }} />
    </Box>
  );
};
