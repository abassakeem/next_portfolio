import Image from "next/image";
import Hero from "./hero/page";

export default function Home() {

  const name = "Akeem";
  return (
   <div className="">
    <Hero />
    {name}

   </div>
  );
}
