import config from "@config/config.json";
import TwSizeIndicator from "@layouts/components/TwSizeIndicator";
import Footer from "@layouts/partials/Footer";
import Header from "@layouts/partials/Header";
import Providers from "@layouts/partials/Providers";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";
import PageTransition from "./layouts/components/PageTransition";

const hind_siliguri = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  weight: ["400", "600", "700"],
  variable: "--font-hind-siliguri",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${hind_siliguri.variable}`}>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />

        <link rel="shortcut icon" href={config.site.favicon} />
        <meta name="theme-name" content="andromeda-light-nextjs" />

        <meta name="theme-name" content="andromeda-light-nextjs" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#fff"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#000"
        />
      </head>
      <body suppressHydrationWarning={true}>
        <TwSizeIndicator />
        <Providers>
          <Header />
          <PageTransition>
            <main>{children}</main>
          </PageTransition>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
