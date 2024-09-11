import { useState } from "react";
import { NavBar } from "./NavBar";

interface BigSideBarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function BigSideBar({ isOpen, setIsOpen }: BigSideBarProps) {
  const [isSubExpand, setisSubExpand] = useState(false);
  return (
    <div className={`${isOpen ? "w-0" : "w-[240px] "} fixed top-16 z-20 md:static md:z-0 bg-[#0F0F0F] md:bg-transparent` }>
      <div
        className={` h-screen sticky top-[70px] gap-1 flex overflow-hidden flex-col hover:overflow-y-scroll`}
      >
        <div className="flex flex-col gap-5 p-3  pl-5 justify-center">
          <div className="flex h-7 w-7 gap-4 items-center">
            <img src="home.svg" alt="" />
            <p>Home</p>
          </div>
          <div className="flex gap-3 h-7 w-7">
            <img src="youtube-shorts-logo.svg"></img>
            <p>Shorts</p>
          </div>
          <div className="flex gap-3 h-7 w-7">
            <img src="youtube_subscription_icon.svg"></img>
            <p>Subscriptions</p>
          </div>
          <hr className="border-[#4E4E4E]"></hr>
        </div>

        <div className="flex flex-col p-4 pl-5 gap-5 ">
          <div className="flex h-7 w-7 gap-4 items-center">
            <p>You </p>
          </div>
          <div className="flex gap-3 h-7 w-auto">
          <img src="you_your_Channel.svg"></img>
          <p>Your channel</p>
          </div>
          <div className="flex gap-3 h-7 w-auto">
            <img src="you_history.svg"></img>
            <p>History</p>
          </div>
          <div className="flex gap-3 h-7 w-auto">
            <img src="you_playlist.svg"></img>
            <p>Playlists</p>
          </div>
          <div className="flex gap-3 h-7 w-auto">
            <img src="you_videos.svg"></img>
            <p className="flex-grow">Your videos</p>
          </div>
          <div className="flex gap-3 h-7 w-auto">
            <img src="you_watch_later.svg"></img>
            <p className="flex-grow">Watch later</p>
          </div>
          <div className="flex gap-3 h-7 w-auto">
            <img src="you_liked_videos.svg"></img>
            <p className="flex-grow">Liked videos</p>
          </div>
          <hr className="border-[#4E4E4E]"></hr>
        </div>

        <div className="flex flex-col  p-4 pt-0 gap-4 ">
          <div className="flex h-7 w-7 gap-4 items-center">
            <p>Subscriptions</p>
          </div>

          <div
            className={`flex flex-col  p-4  pt-0 gap-5 ${
              isSubExpand ? "h-full" : "h-[120px]"
            } overflow-hidden`}
          >
            {[...Array(20)].map((_, i) => (
              <div className="flex gap-3 h-7 w-auto">
                <img src="youtube_subscription_icon.svg"></img>
                <p className="flex-grow">Channel {i}</p>
              </div>
            ))}
          </div>

          <div className="flex gap-3 p-4 pt-0 items-center">
            <img src="youtube_subscription_icon.svg"></img>
            <button
              onClick={() => {
                setisSubExpand(!isSubExpand);
              }}
            >
              {isSubExpand ? "Show Less" : "Show More "}{" "}
            </button>
          </div>

          <hr className="border-[#4E4E4E]"></hr>
        </div>
        <div className="flex flex-col p-4 pt-0 gap-3 ">
          <div className="flex h-7 w-7 gap-4 items-center">
            <p>Explore</p>
          </div>
          <div className="flex gap-3 h-7 w-7">
            <img src="explore_trending.svg"></img>
            <p>Trending</p>
          </div>
          <div className="flex gap-3 h-7 w-7">
            <img src="explore_shopping.svg"></img>
            <p>Shopping</p>
          </div>
          <div className="flex gap-3 h-7 w-7">
            <img src="explore_music.svg"></img>
            <p>Music</p>
          </div>
          <div className="flex gap-3 h-7 w-7">
            <img src="explore_movies.svg"></img>
            <p>Movies</p>
          </div>
          <div className="flex gap-3 h-7 w-7">
            <img src="explore_live.svg"></img>
            <p>Live</p>
          </div>
          <div className="flex gap-3 h-7 w-7">
            <img src="explore_gaming.svg"></img>
            <p>Gaming</p>
          </div>
          <div className="flex gap-3 h-7 w-7">
            <img src="explore_news.svg"></img>
            <p>News</p>
          </div>
          <div className="flex gap-3 h-7 w-7">
            <img src="explore_sports.svg"></img>
            <p>Sports</p>
          </div>
          <div className="flex gap-3 h-7 w-7">
            <img src="explore_courses.svg"></img>
            <p>Courses</p>
          </div>
          <div className="flex gap-3 h-7 w-auto">
            <img src="explore_f&b.svg"></img>
            <p className="">Fashion & Beauty </p>
          </div>
          <div className="flex gap-3 h-7 w-7">
            <img src="explore_podcasts.svg"></img>
            <p>Podcasts</p>
          </div>
          <hr></hr>
        </div>

        <div className="flex flex-col  p-4 pt-0 gap-5 ">
          <div className="flex h-7 w-auto gap-4 items-center">
            <p>More from YouTube</p>
          </div>
          <div className="flex gap-3 h-7 w-auto">
            <img src="youtube_premium.svg"></img>
            <p>YouTube Premium</p>
          </div>
          <div className="flex gap-3 h-7 w-auto">
            <img src="youtube_studio.svg"></img>
            <p>YouTube Studio</p>
          </div>
          <div className="flex gap-3 h-7 w-auto">
            <img src="youtube_music.svg"></img>
            <p>YouTube Music</p>
          </div>
          <div className="flex gap-3 h-7 w-auto">
            <img src="youtube_kids.svg"></img>
            <p>YouTube Kids</p>
          </div>
          <hr></hr>
        </div>

        <div className="flex flex-col p-4 pt-0 gap-4">
        <div className="flex gap-3 h-7 w-7">
          <img src="youtube_settings.svg" alt="" />
          <p>Settings</p>
        </div>
        <div className="flex gap-3 h-7 w-auto items-center">
        <img src="youtube_reportHistory.svg"></img>
          <p>Report history</p>
        </div>
        <div className="flex gap-3 h-7 w-7 items-center">
          <img src="youtube_help.svg"></img>
          <p>Help</p>
        </div>
        <div className="flex h-7 w-auto gap-4 items-center">
          <img src="youtube_sendfeedback.svg" alt="" />
          <p>Send feedback</p>
        </div>
        </div>
        <hr></hr>
       <div>
        About Press Copyright
        Contact us Creators
        Advertise Developers
       </div>
       <br/>
       <div>
        Terms Privacy Policy & Safety
        How YouTube works
        Test new features
       </div>
      </div>
    </div>
  );
}
