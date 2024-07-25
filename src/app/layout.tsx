import type { Metadata } from "next";
import { Inter, Raleway, Unbounded, DM_Sans } from "next/font/google";
import "./globals.css";

const dm_sans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Upiz Web - Votre nouveau partenaire web",
  description:
    "Agence web spécialisée dans la création de sites internet vitrine et e-commerce - Service de webmastering",
  icons: {
    icon: ["/favicon.ico?v=2"],
    apple: ["/apple-touch-icon.png"],
    shortcut: ["/apple-touch-icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="\favicon.ico" />
      </head>
      <body
        className={dm_sans.className}
        style={{ backgroundColor: "#F3F4F6" }}
      >
        {children}
      </body>
    </html>
  );
}
