import NavBar from "../components/Utilities/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RenAnimeList",
  description: "Website List Indonesia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`{inter.className} bg-color-dark`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
