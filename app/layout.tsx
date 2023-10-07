import type { Metadata } from "next";
import { Providers } from "./providers";

import Navbar from "@/components/narbav/navbar";

export const metadata: Metadata = {
  title: "Clairlea Park Presbyterian Church",
  description: "Official website of Clairlea Park Presbyterian Church Canada",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
