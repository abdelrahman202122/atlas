import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Atlas",
};

function RootLayout({ children }) {
  return (
    <html>
      <body className={`${inter.className} text-white`}>{children}</body>
    </html>
  );
}
export default RootLayout;
