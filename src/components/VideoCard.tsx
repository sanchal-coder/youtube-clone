export function VideoCard() {
  return (
    <div className="flex flex-col gap-3  ">
      <iframe
        className="rounded-2xl"
        width="100%"
        height="220"
        src="https://www.youtube.com/embed/8Gmq5BEVgxg?si=aUF0vXWjFkRhJ__c"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <div className="flex justify-between max-w-[320px]">
        <div className="flex space-x-3">
          <div>
            <img
              className="rounded-full w-10"
              src="https://yt3.ggpht.com/ytc/AIdro_k_k_rcU9yzx6bRJU5CMBjkxbrDY3V7zjxaVRSfDXJ7jB0=s68-c-k-c0x00ffffff-no-rj"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-2">
            <p>How Jaipur police surprised kidnappers</p>

            <div>
              <p className="text-gray-400 text-sm">Brut India</p>
              <p className="text-gray-400 text-sm">75K views • 3 hours ago</p>
            </div>
          </div>
        </div>
        <svg
          className="  w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-width="2"
            d="M12 6h.01M12 12h.01M12 18h.01"
          />
        </svg>
      </div>
    </div>
  );
}
