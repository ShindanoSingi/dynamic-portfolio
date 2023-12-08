import React from "react";
import 'remixicon/fonts/remixicon.css'


function Header() {
      return (
            <div className="fixed flex justify-between w-[100%] container  z-[1000]">
                        <p className="text-[#D9832E] text-2xl font-bold md:text-6xl">Shindano</p>
                  <div className="flex justify-between">
                  <i className="ri-search-line text-xl text-[#D9832E] search font-bold md:text-4xl"></i>
                  <i className="ri-menu-line text-xl text-[#D9832E] hambourger font-bold ml-4 md:text-4xl"></i>
                  </div>
            </div>
      );
}

export default Header;

