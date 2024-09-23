import Image from "next/image";
import { VideoCard } from "@/components/VideoCard";
import { NavBar } from "@/components/NavBar";
import { SideBar } from "@/components/SideBar";
import { BigSideBar } from "@/components/BigSideBar";
import { SetStateAction, useRef, useState } from "react";
import { VideoNotificationsTile } from "@/components/VideoNotificationsTile";
import { ProfileTile } from "@/components/ProfileTile";
import { BellTile } from "@/components/BellTIle";


export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isProfileTileOpen, setIsProfileTileOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const videoIconRef = useRef(null);
  const bellIconRef = useRef(null);
  const profileIconRef=useRef(null)
  return (
    <div>
      <div>
        <NavBar
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          isSearchOpen={isSearchOpen}
          setIsSearchOpen={setIsSearchOpen}
          isVideoOpen={isVideoOpen}
          setIsVideoOpen={setIsVideoOpen}
          isProfileTileOpen={isProfileTileOpen}
          setIsProfileTileOpen={setIsProfileTileOpen}
          isNotificationsOpen={isNotificationsOpen}
          setIsNotificationsOpen={setIsNotificationsOpen}
          videoIconRef={videoIconRef}
          bellIconRef={bellIconRef}
          profileIconRef={profileIconRef}
        />
      </div>

      {/* <NavBarSmall/> */}

      <div className="flex">
        {isOpen ? (
          <SideBar />
        ) : (
          <BigSideBar isOpen={isOpen} setIsOpen={setIsOpen} />
        )}

        <div className="grid grid-cols-1  content-center  md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 2xl:grid-cols-5 gap-4 p-5 mt-20 flex-grow">
          {[...Array(20)].map((_, i) => (
            <VideoCard />
          ))}
        </div>
        {isVideoOpen && (
          <VideoNotificationsTile
            setIsVideoOpen={setIsVideoOpen}
            videoIconRef={videoIconRef}
          />
        )}
        {isProfileTileOpen && <ProfileTile  
        setIsProfileTileOpen={setIsProfileTileOpen}
        profileIconRef={profileIconRef}
        />}
        {isNotificationsOpen && (
          <BellTile
            setIsNotificationsOpen={setIsNotificationsOpen}
            bellIconRef={bellIconRef}
          />
        )}
      </div>
    </div>
  );
}
