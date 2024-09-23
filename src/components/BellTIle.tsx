import { useEffect, useRef, useState } from "react";

interface BellTileProps {
  setIsNotificationsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  bellIconRef: React.RefObject<HTMLDivElement>;
}

interface BellNotificationProps {
  channelIcon: string;
  channelTnail: string;
  text: string;
}

export function BellTile({
  setIsNotificationsOpen,
  bellIconRef,
}: BellTileProps) {
  const belltilediv = useRef(null);
  const [isVisible, setIsVisible] = useState(true);
  const BellNotification: React.FC<BellNotificationProps> = ({
    channelIcon,
    channelTnail,
    text,
  }) => (
    <div className="flex">
      <div className="flex  gap-4 items-center">
        <img className="h-12 w-12 rounded-full " src={channelIcon} alt="" />
        <p>{text}</p>
      </div>

      <div className="flex">
        <img className="h-24 w-44 p-5 rounded-xl" src={channelTnail} alt="" />
        <img src="three_dots.svg" alt="" />
      </div>
    </div>
  );
  const handlemousedown = (event: MouseEvent) => {
    if (
      belltilediv.current &&
      !(belltilediv.current as HTMLElement).contains(event.target as Node) &&
      bellIconRef.current &&
      !(bellIconRef.current as HTMLElement).contains(event.target as Node)
    ) {
      setIsVisible(false);
      setIsNotificationsOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handlemousedown);
    return () => {
      document.removeEventListener("mousedown", handlemousedown);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      ref={belltilediv}
      className="bg-[#282828] fixed rounded-xl top-[65px] right-16   z-50  "
    >
      <div className=" sticky -top-0 bg-[#282828] rounded-xl">
        <div className="py-2 px-4">
          <div className="flex justify-between ">
            <p>Notifications</p>
            <img className="" src="youtube_settings.svg" alt="" />
          </div>
        </div>
        <hr className="border-[#4E4E4E] my-2 " />
      </div>

      <div className=" h-[642px] w-[482px]  overflow-y-scroll scrollbar-thin scrollbar-thumb-[#5E5E5D] scrollbar-track-transparent">
        <div className="flex flex-col gap-2 items-center px-4 ">
          <BellNotification
            channelIcon="A.jpg"
            channelTnail="hqdefault.jpg"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit"
          />
          <BellNotification
            channelIcon="A.jpg"
            channelTnail="hqdefault.jpg"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit"
          />
          <BellNotification
            channelIcon="A.jpg"
            channelTnail="hqdefault.jpg"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit"
          />
          <BellNotification
            channelIcon="A.jpg"
            channelTnail="hqdefault.jpg"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit"
          />
          <BellNotification
            channelIcon="A.jpg"
            channelTnail="hqdefault.jpg"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit"
          />
          <BellNotification
            channelIcon="A.jpg"
            channelTnail="hqdefault.jpg"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit"
          />
          <BellNotification
            channelIcon="A.jpg"
            channelTnail="hqdefault.jpg"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit"
          />
          <BellNotification
            channelIcon="A.jpg"
            channelTnail="hqdefault.jpg"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit"
          />
          <BellNotification
            channelIcon="A.jpg"
            channelTnail="hqdefault.jpg"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit"
          />
          <BellNotification
            channelIcon="A.jpg"
            channelTnail="hqdefault.jpg"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit"
          />
          <BellNotification
            channelIcon="A.jpg"
            channelTnail="hqdefault.jpg"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit"
          />
          <BellNotification
            channelIcon="A.jpg"
            channelTnail="hqdefault.jpg"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit"
          />
        </div>
      </div>
    </div>
  );
}
