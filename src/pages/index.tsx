import Image from "next/image";
import { Inter } from "next/font/google";
import { VideoCard } from "@/components/VideoCard";
import { NavBar } from "@/components/NavBar";
import { SideBar } from "@/components/SideBar";
import { BigSideBar } from "@/components/BigSideBar";
import { SetStateAction, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="flex">
        <BigSideBar isOpen={isOpen} setIsOpen={setIsOpen} />

        <div className="grid grid-cols-1 ml-14  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 p-5 mt-20 ">
          {[...Array(20)].map((_, i) => (
            <VideoCard />
          ))}
        </div>
      </div>
    </>
  );
}
