import { useEffect, useRef, useState } from "react";

interface SubProfileTileProps {
  icon: string;
  text: string;
}

interface ProfileTileProps {
  setIsProfileTileOpen: React.Dispatch<React.SetStateAction<boolean>>;
  profileIconRef: React.RefObject<HTMLDivElement>;
}

export function ProfileTile({
  setIsProfileTileOpen,
  profileIconRef,
}: ProfileTileProps) {
  const profiletilediv = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  const handlemousedown = (event: MouseEvent) => {
    if (
      profiletilediv.current &&
      !(profiletilediv.current as HTMLElement).contains(event.target as Node) &&
      profileIconRef.current &&
      !(profileIconRef.current as HTMLElement).contains(event.target as Node)
    ) {
      setIsVisible(false);
      setIsProfileTileOpen(false)
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handlemousedown);
    return () => {
      document.removeEventListener("mousedown", handlemousedown);
    };
  }, []);
  const SubProfileTile: React.FC<SubProfileTileProps> = ({ icon, text }) => (
    <div className="flex gap-4">
      <img src={icon} alt="" />
      <p className="text-sm text-gray-300">{text}</p>
    </div>
  );
  if (!isVisible) return null;
  return (
    <div
      ref={profiletilediv}
      className="flex flex-col gap-3 w-[300px] h-[700px] rounded-xl bg-[#282828] fixed p-3 top-[60px] right-5 z-40"
    >
      <div className="flex flex-col items-center">
        <SubProfileTile
          icon=""
          text=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
          eum debitis?"
        />
      </div>

      <hr className="border-[#4E4E4E]" />

      <div className="flex flex-col gap-3">
        <SubProfileTile icon="you_your_Channel.svg" text="Google Account" />
        <SubProfileTile icon="you_your_Channel.svg" text="Switch account" />
        <SubProfileTile icon="you_your_Channel.svg" text="Sign out" />
      </div>
      <hr className="border-[#4E4E4E]" />

      <div className="flex flex-col gap-5">
        <SubProfileTile icon="you_your_Channel.svg" text="YouTube Studio" />
        <SubProfileTile
          icon="you_your_Channel.svg"
          text="Purchases and memberships"
        />
      </div>
      <hr className="border-[#4E4E4E]" />

      <div className="flex flex-col gap-5">
        <SubProfileTile
          icon="you_your_Channel.svg"
          text="Your data in YouTube"
        />
        <SubProfileTile
          icon="you_your_Channel.svg"
          text="Appearance: Device theme"
        />
        <SubProfileTile icon="you_your_Channel.svg" text="Language: English" />
        <SubProfileTile
          icon="you_your_Channel.svg"
          text="Restricted Mode: off"
        />
        <SubProfileTile icon="you_your_Channel.svg" text="Location: India" />
        <SubProfileTile icon="you_your_Channel.svg" text="Keyboard shortcuts" />
      </div>
      <hr className="border-[#4E4E4E]" />

      <div className="flex flex-col gap-5">
        <SubProfileTile icon="you_your_Channel.svg" text="Settings" />
      </div>
      <hr className="border-[#4E4E4E]" />

      <div className="flex flex-col gap-5">
        <SubProfileTile icon="you_your_Channel.svg" text="Help" />
        <SubProfileTile icon="you_your_Channel.svg" text="Send feedback" />
      </div>
    </div>
  );
}
