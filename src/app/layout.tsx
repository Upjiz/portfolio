import type { Metadata } from "next";
import { Inter, Raleway, Unbounded, DM_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script";

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
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-LCDSQD7SCN"
        ></Script>
        <Script id="google-analytics">
          {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-LCDSQD7SCN')`}
        </Script>
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
