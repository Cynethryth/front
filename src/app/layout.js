import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "./providers";
import Redux from "@/redux/provider";
import Navbar from "@/components/navbar";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Eugenia",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Head>
          <title>Eugenia</title>
        </Head>
        <Providers>
          <Redux>
            <div className="bg-gray-900 min-h-screen ">
              <Navbar />
              {children}
            </div>
          </Redux>
        </Providers>
      </body>
    </html>
  );
}
