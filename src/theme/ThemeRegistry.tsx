"use client";
import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ReactNode } from "react";
import NextAppDirEmotionCacheProvider from "./EmotionCache";

const themeOptions: ThemeOptions = {
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
  },
};
const theme = createTheme(themeOptions);

export default function ThemeRegistry({ children }: { children: ReactNode }) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
