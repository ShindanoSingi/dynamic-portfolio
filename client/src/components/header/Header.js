import React from "react";
import { FiAlignJustify } from "react-icons/fi";
import "./Header.css";
import { useSelector } from "react-redux";
import Loader from "../loader/Loader";

function Header() {

      const {userFirstName} = useSelector(state => state.userReducer);

      console.log(userFirstName);

      return (
            <div className="">
                  <div className="flex justify-between p-4">{
                        !userFirstName ? <p className="text-white text-4xl">{userFirstName}</p> : <Loader/>
                  }
                        <FiAlignJustify className="icon text-white text-4xl" />
                  </div>
            </div>
      );
}

export default Header;
