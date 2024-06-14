import type { Metadata } from "next";
import { Inter, Raleway, Unbounded, DM_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const raleway = Raleway({ subsets: ["latin"] });
const unbounded = Unbounded({ subsets: ["latin"] });
const dm_sans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Upiz Web",
  description: "Créateur de site web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={dm_sans.className}
        style={{ backgroundColor: "#F3F4F6" }}
      >
        {children}
      </body>
    </html>
  );
}
