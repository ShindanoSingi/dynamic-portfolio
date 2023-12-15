import React from "react";
import "./Home.css";
import Header from "../../components/header/Header";
import { useSelector } from "react-redux";
import Loader from "../../components/loader/Loader";
import Footer from "../../components/footer/Footer";
import SideMenu from "../../components/sideMenu/SideMenu";

const Home = () => {
      const { user } = useSelector((state) => state.userReducer);
      const {show} = useSelector(state => state.userReducer);

      console.log(show);

      return (
            <div className="home-container">
                  <Header />

                  {
                        show === true  ? <SideMenu /> : <div>
                              {
                        user ? <img
                        src={user.profilePicture}
                        alt=""
                  /> : <Loader/>
                  }
                  <Footer />
                        </div>
                  }

            </div>
      );
};

export default Home;
