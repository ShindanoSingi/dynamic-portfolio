import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

function Header() {
      return (
            <div className="fixed flex justify-between top-0 left-0 w-[100%] p-[20px] bg-[rgba(255, 255, 255, 0.8)] z-[1000]">
                  <div>
                        <p className="text-[#D9832E] text-2xl font-bold">
                              Shindano
                        </p>
                  </div>
                  <div className="flex justify-between w-6">
                        <SearchIcon className="text-[#D9832E] search font-bold" />
                        <MenuIcon className="text-[#D9832E] hambourger font-bold" />
                  </div>
            </div>
      );
}

export default Header;
