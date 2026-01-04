import Image from "next/image";
import Homepage from "./homepage/page";
import { Inter, Poppins } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // choose weights you need
  variable: "--font-poppins",
});

export default function Home() {

  return (
    <div className="">
      <Homepage />
   
    </div>
  );
}
