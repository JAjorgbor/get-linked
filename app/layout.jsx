import "@/public/css/globals.css";
import { Montserrat } from "next/font/google";
import localFont from 'next/font/local'
import Header from "./scaffold/Header";

const montserrat = Montserrat({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Get Linked",
};
const clashDisplay = localFont({
  src: '../public/fonts/ClashDisplay-Variable.ttf',
  display: 'swap',
  variable:'--font-clash'
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-dark-purple ${clashDisplay.variable} ${montserrat.className} container mx-auto relative`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
