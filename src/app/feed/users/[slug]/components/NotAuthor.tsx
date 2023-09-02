import { Box, Typography } from "@mui/material";

export default function NotAuthor() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="80vh"
      sx={{ boxShadow: 0 }}
    >
      <Typography variant="h5" color="black" sx={{ fontWeight: "bold" }}>
        User is not author
      </Typography>
    </Box>
  );
}
