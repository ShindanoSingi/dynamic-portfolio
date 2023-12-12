import React from "react";
import "./Home.css";
import Header from "../../components/header/Header";
import { useSelector } from "react-redux";
import Loader from "../../components/loader/Loader";

const Home = () => {
      const { user } = useSelector((state) => state.userReducer);
      console.log(user);

      return (
            <div>
                  <Header />
                  <div className="container">
                        {/* {!user ? (
                              <div>
                                    <h1 className="home__title">
                                          Welcome {user.firstName}{" "}
                                    </h1>
                                    <img src={user.proilePicture} alt="" />
                              </div>
                        ) : ( */}
                              <Loader />
                        {/* )} */}
                  </div>
            </div>
      );
};

export default Home;
