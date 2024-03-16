import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./css/globals.scss";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio of Patrick Figueroa",
  description:
    "Portfolio of Patrick Figueroa. Experienced Software Engineer with 6 years of experience with a proven track record of delivering high-impact solutions for leading companies. This portfolio takes as base Abu Said project with some modifications.",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Patrick Figueroa",
    "Software Engineer",
    "Next.js",
    "React",
    "JavaScript",
  ],
  authors: [{ name: "Patrick Figueroa" }],
  creator: "Patrick Figueroa",
  publisher: "Patrick Figueroa",
  // openGraph: {
  //   title: "Portfolio - Patrick Figueroa",
  //   description:
  //     "Experienced Software Engineer with 6 years of experience with a proven track record of delivering high-impact solutions for leading companies. This portfolio takes as base Abu Said project with some modifications.",
  //   // url: 'https://nextjs.org',
  //   siteName: "Patrick Figueroa",
  //   locale: "en_US",
  //   type: "website",
  //   authors: ["Patrick Figueroa"],
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
