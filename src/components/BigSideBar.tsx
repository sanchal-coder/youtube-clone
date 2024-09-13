import { useState } from "react";
import { NavBar } from "./NavBar";

interface BigSideBarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface SidebarItemProps {
  icon: string;
  text: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, text }) => (
  <div className="flex items-center h-[40px] w-[180px] hover:bg-[#2E2E2E] rounded-lg">
    <img className="h-[24px] w-[24px] mr-[24px]" src={icon} alt="" />
    <p className="text-sm text-gray-300">{text}</p>
  </div>
);

export function BigSideBar({ isOpen, setIsOpen }: BigSideBarProps) {
  const [isSubExpand, setisSubExpand] = useState(false);
  return (
    <div
      className={`${
        isOpen ? "w-0" : "w-[240px] "
      } fixed top-16 z-20  md:static md:z-0 bg-[#0F0F0F] md:bg-transparent`}
    >
      <div
        className={`h-[calc(100vh-70px)] sticky top-[70px] flex  overflow-hidden flex-col hover:overflow-y-scroll scrollbar-thin scrollbar-thumb-[#5E5E5D] scrollbar-track-transparent`}
        onMouseEnter={() => (document.body.style.overflow = "hidden")}
        onMouseLeave={() => (document.body.style.overflow = "auto")}
      >
        <div className="flex flex-col  p-[12px] items-center">
          <SidebarItem icon="home.svg" text="Home" />
          <SidebarItem icon="youtube-shorts-logo.svg" text="Shorts" />
          <SidebarItem
            icon="youtube_subscription_icon.svg"
            text="Subscriptions"
          />
        </div>

        <div className="flex">
          <hr className="border-[#4E4E4E] w-[200px] h-[1px] ml-[12px]" />
        </div>

        <div className="flex flex-col p-[12px]  items-center ">
          <div className="flex w-full items-center self-start hover:bg-[#2E2E2E] rounded-lg">
            <p className="text-[16px] text-white font-medium  pb-2 p-[12px] self-start">
              You
            </p>
            <img className="pt-[8px]" src="you_side_arrow.svg" alt="" />
          </div>

          <SidebarItem icon="you_your_Channel.svg" text="Your channel" />
          <SidebarItem icon="you_history.svg" text="History" />
          <SidebarItem icon="you_playlist.svg" text="Playlists" />
          <SidebarItem icon="you_videos.svg" text="Your videos" />
          <SidebarItem icon="you_watch_later.svg" text="Watch later" />
          <SidebarItem icon="you_liked_videos.svg" text="Liked videos" />
        </div>

        <div className="flex">
          <hr className="border-[#4E4E4E] w-[200px] h-[1px] ml-[12px]" />
        </div>

        <div className="flex flex-col  p-[12px] pt-0   items-center ">
          <p className="text-[16px] text-white font-medium  pb-2 p-[12px] self-start">
            Subscriptions
          </p>

          <div
            className={`flex flex-col  p-[12px] gap-4 ${
              isSubExpand ? "h-full" : "h-[120px]"
            } overflow-hidden`}
          >
            {[...Array(20)].map((_, i) => (
              <SidebarItem
                key={i}
                icon="youtube_subscription_icon.svg"
                text={`Channel ${i}`}
              />
            ))}
          </div>

          <div className="flex gap-6 p-[12px] pl-[15px] self-start hover:bg-[#2E2E2E] rounded-lg">
            <img src="subscriptions_down_arrow.svg" alt="" />
            <button
              className="text-sm text-gray-300 "
              onClick={() => {
                setisSubExpand(!isSubExpand);
              }}
            >
              {isSubExpand ? "Show Less" : "Show More "}{" "}
            </button>
          </div>
        </div>

        <div className="flex">
          <hr className="border-[#4E4E4E] w-[200px] h-[1px] ml-[12px]" />
        </div>

        <div className="flex flex-col p-[12px] pt-0 items-center ">
          <p className="text-[16px] text-white font-medium  pb-2 p-[12px] self-start ">
            Explore
          </p>
          <SidebarItem icon="explore_trending.svg" text="Trending" />
          <SidebarItem icon="explore_shopping.svg" text="Shopping" />
          <SidebarItem icon="explore_music.svg" text="Music" />
          <SidebarItem icon="explore_movies.svg" text="Movies" />
          <SidebarItem icon="explore_live.svg" text="Live" />
          <SidebarItem icon="explore_gaming.svg" text="Gaming" />
          <SidebarItem icon="explore_news.svg" text="News" />
          <SidebarItem icon="explore_sports.svg" text="Sports" />
          <SidebarItem icon="explore_courses.svg" text="Courses" />
          <SidebarItem icon="explore_f&b.svg" text="Fashion & Beauty" />
          <SidebarItem icon="explore_podcasts.svg" text="Podcasts" />
        </div>

        <div className="flex">
          <hr className="border-[#4E4E4E] w-[200px] h-[1px] ml-[12px]" />
        </div>

        <div className="flex flex-col  p-4 pt-0  items-center">
          <p className="text-[16px] text-white font-medium pl-0 pb-2 p-[12px] self-start">
            More from YouTube
          </p>
          <SidebarItem icon="youtube_premium.svg" text="YouTube Premium" />
          <SidebarItem icon="youtube_studio.svg" text="YouTube Studio" />
          <SidebarItem icon="youtube_music.svg" text="YouTube Music" />
          <SidebarItem icon="youtube_kids.svg" text="YouTube Kids" />
        </div>
        <div className="flex">
          <hr className="border-[#4E4E4E] w-[200px] h-[1px] ml-[12px]" />
        </div>
        <div className="flex flex-col   p-[12px] items-center">
          <SidebarItem icon="youtube_settings.svg" text="Settings" />
          <SidebarItem icon="youtube_reportHistory.svg" text="Report history" />
          <SidebarItem icon="youtube_help.svg" text="Help" />
          <SidebarItem icon="youtube_sendfeedback.svg" text="Send feedback" />
        </div>
        <hr className="border-[#4E4E4E] border-t-[1px] mt-[12px]" />
        <div className="flex flex-col p-4 pt-0">
          <p className="text-[13px] text-gray-400 mb-2">
            About Press Copyright Contact us Creators Advertise Developers
          </p>
          <p className="text-[13px] text-gray-400 mb-2">
            Terms Privacy Policy & Safety How YouTube works Test new features
          </p>
          <p className="text-[11px] text-gray-500 mt-4">© 2024 Google LLC</p>
        </div>
      </div>
    </div>
  );
}
