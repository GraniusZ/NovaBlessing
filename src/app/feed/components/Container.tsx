"use client";
import { Container } from "@mui/material";
import { ReactNode } from "react";
export const FeedContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Container maxWidth="lg" sx={{ px: "8px" }}>
      {children}
    </Container>
  );
};
