import { SideBar } from "@/components/SideBar";
import { BigSideBar } from "./BigSideBar";
import { useEffect, useState } from "react";
interface NavBarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isSearchOpen: boolean;
  setIsSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export function NavBar({ isOpen, setIsOpen,isSearchOpen ,setIsSearchOpen

 }: NavBarProps) {

  const [isSearchOpen2 , setIsSearchOpen2] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false); // Track input focus



  useEffect(() => {
    const handleResize = () => {
      // Check if screen width is greater than 640px (sm breakpoint in Tailwind)
      if (window.innerWidth >= 640 && isSearchOpen) {
        // If we're on a larger screen, close the small search bar
        setIsSearchOpen(false);
      

      }


      if (window.innerWidth >=640  && !isSearchOpen) {
        // If we're on a larger screen, close the small search bar
        setIsSearchOpen2(true);

      }

      if (window.innerWidth < 640 && !isSearchOpen && !isInputFocused) {
        // If we're on a larger screen, close the small search bar
        setIsSearchOpen2(false);

      }

      if (window.innerWidth < 640 && isInputFocused) {
        // If we're on a larger screen, close the small search bar
        setIsSearchOpen(true);

      }

      
    };

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isSearchOpen, isSearchOpen2,isInputFocused]);


  const handleToggle = () =>{
    setIsSearchOpen(!isSearchOpen)
    setIsSearchOpen2(true)
  }

  const handleFocus = () => {
    setIsInputFocused(true); // Set focus state to true when input is focused
  };

  const handleBlur = () => {
    setIsInputFocused(false); // Reset​⬤

  }

  const handleClose = () =>{
    setIsSearchOpen(!isSearchOpen)
    setIsSearchOpen2(false)
  }

  return (
    <div className=" top-0 fixed w-full z-20 bg-[#0F0F0F]">
      <div className="flex justify-between px-5 py-3 items-center">
       
       
        {isSearchOpen == false &&  (
          <div className=" flex  ">
         
          <div
            className="flex gap-4 items-center "
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5 md:size-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>

            <div className="flex gap-1 items-center">
              <img
                className="h-5 w-5 md:h-7 md:w-7"
                src="/youtube.png"
                alt=""
              />
              <p className="font-bold">
                <span className=" md:text-xl">YouTube</span>
                <sup className="font-thin text-[9px] md:text-xs text-[#AAAAAA]">
                  {" "}
                  IN
                </sup>
              </p>
            </div>
          </div>
        </div>
        )}

        

       {isSearchOpen == true && (
         <svg
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
         viewBox="0 0 24 24"
         stroke-width="1.5"
         stroke="currentColor"
         className="size-6"
         onClick={handleClose}
       >
         <path
           stroke-linecap="round"
           stroke-linejoin="round"
           d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
         />
       </svg>
       )}


        <div className="flex justify-end sm:justify-between grow ">
          <div className="flex  sm:mx-auto  sm:w-[60%]">
           

           {
            isSearchOpen2 == true && (
              <input
              className="bg-transparent border  border-[#282828]  p-2 rounded-l-full pl-4 w-[100%] "
              placeholder="Search"
              onFocus={handleFocus} 
              onBlur={handleBlur}
            ></input>
            )
           }



          {
            isSearchOpen == false && (
              <div className={`${isSearchOpen ? '' : ''} py-3 bg-transparent sm:bg-[#282828] sm:px-4 rounded-r-full flex items-center `}
              onClick={handleToggle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0vb 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>
            )
          }

            {isSearchOpen == true && (
              <div className="py-3 bg-transparent sm:bg-[#282828] sm:px-4 rounded-r-full flex items-center"
              
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0vb 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>
            )}


            <div className="py-3 px-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
                />
              </svg>
            </div>
          </div>

          

          
          
          
          <div className="flex gap-4 justify-between  items-center">
            <div className="w-6 hidden md:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>
            </div>
            



           {isSearchOpen == false && (
             <div className="w-6">
             <svg
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               strokeWidth={1.5}
               stroke="currentColor"
               className="size-6"
             >
               <path
                 strokeLinecap="round"
                 strokeLinejoin="round"
                 d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
               />
             </svg>
           </div>
           )}

            {isSearchOpen == false && (
              <img className="w-8 h-8 rounded-full" src="/A.jpg " alt="" />
            )}
          </div>



        </div>
      </div>
    </div>
  );
}
