import React from "react";
import "./Home.css";
import Header from "../../components/header/Header";
import { useSelector } from "react-redux";
import Loader from "../../components/loader/Loader";
import Footer from "../../components/footer/Footer";

const Home = () => {
      const { user } = useSelector((state) => state.userReducer);
      console.log(user);

      return (
            <div className="home-container">
                  <Header className="header" />

                  <div className="main">
                        {user ? (
                              <div>
                                    <h1 className="">
                                          {user.firstName}{" "}
                                    </h1>
                                    <div className="image"><img
                                          className=" z-1"
                                          src={user.profilePicture}
                                          alt=""
                                    /></div>

                              </div>
                        ) : (
                              <Loader />
                        )}
                  </div>

                  <Footer />
                  <div className="circle-up"></div>
            </div>
      );
};

export default Home;
