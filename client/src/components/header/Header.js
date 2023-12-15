import React from "react";
import { FiAlignJustify } from "react-icons/fi";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../loader/Loader";
import { SetShow } from "../../redux/userSlice";


function Header() {

      const {userFirstName} = useSelector(state => state.userReducer);
      const {show} = useSelector(state => state.userReducer);
      const dispatch = useDispatch();

      return (

                  <div className="flex justify-between relative top-0 p-4">{
                        userFirstName ? <p className="text-white text-4xl">{userFirstName}</p> : <Loader/>
                  }
                        <FiAlignJustify className=" text-white text-4xl hover:text-[--dark-orange-background]"  onClick={
                              () => {
                                    dispatch(SetShow(!show));
                              }
                        }/>
                  </div>

      );
}

export default Header;
