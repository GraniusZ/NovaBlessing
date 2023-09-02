"use client";
import { Box, Typography } from "@mui/material";

export default function Error() {
  return (
    <main>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="80vh"
        sx={{ boxShadow: 0 }}
      >
        <Typography variant="h5" color="black" sx={{ fontWeight: "bold" }}>
          We could not load this page. Sorry:(
        </Typography>
      </Box>
    </main>
  );
}
