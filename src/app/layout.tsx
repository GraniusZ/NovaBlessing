import ThemeRegistry from "@/theme/ThemeRegistry";
import Providers from "./providers";
import { ReactNode } from "react";
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      {" "}
      <ThemeRegistry>
        {" "}
        <body style={{ background: "white" }}>
          <Providers>{children}</Providers>
        </body>
      </ThemeRegistry>
    </html>
  );
}
