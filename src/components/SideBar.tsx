export function SideBar() {
  return (
    <div className="hidden sm:flex flex-col items-center pl-1 fixed h-screen top-20 bg-[#0F0F0F]">
         <div className="flex flex-col justify-center items-center gap-1 hover:bg-[#2E2E2E] p-5 rounded-xl w-[69px] h-[74px] ">
        
        <img className=" w-6 h-6 " src="/home.svg" alt="" />
        <p className="text-[9px]">Home</p>
      </div>

      <div className="flex flex-col justify-center items-center gap-1 hover:bg-[#2E2E2E] p-5 rounded-xl w-[69px] h-[74px] ">
        <img className="w-6 h-6" src="/youtube-shorts-logo.svg" alt="" />
        <p className="text-[9px]">Shorts</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-1 hover:bg-[#2E2E2E] p-5 rounded-xl w-[69px] h-[74px] ">
        <img className="w-6 h-6" src="/youtube_subscription_icon.svg" alt="" />
        <p className="text-[9px]">Subscriptions</p>
      </div>

      <div className="flex flex-col justify-center items-center gap-1 hover:bg-[#2E2E2E] p-5 rounded-xl w-[69px] h-[74px] ">
        <img  src="/youtube_you.svg" alt="" />
        <p className="text-[9px]">You</p>
      </div>
    </div>
  );
}
