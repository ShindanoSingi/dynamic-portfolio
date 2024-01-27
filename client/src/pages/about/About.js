import * as React from "react";
import { motion } from "framer-motion";
import { GetAbout } from "../../apicalls/about";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Loader from "../../components/loader/Loader";
import Button from "../../components/button/Button";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const About = () => {
      const pathName = useLocation().pathname.substring(1);
      const navigate = useNavigate();

      const [about, setAbout] = React.useState("");

      const getAbout = async () => {
            const response = await GetAbout();
            console.log(response);
            setAbout(response.data[0].about);
      };

      const handleBack = () => {
            navigate("/");
      };

      useEffect(() => {
            getAbout();
      });

      return (
            <>
                  {about === "" ? (
                        <Loader />
                  ) : (
                        <>
                              <div className=" h-[100vh]  text-gray-300 bg-[--primary-color] overflow-scroll justify-center container w-[100%]">
                                    <div className="mb-2 flex justify-between items-center h-[3.5rem] z-50 bg-[--info] p-2 rounded-md">
                                          <Button
                                                label={pathName}
                                                color="info"
                                                width="0%"
                                                fontSize="1.4rem"
                                          />

                                          <button
                                                className="buttonClass font-bold"
                                                onClick={handleBack}
                                          >
                                                Back
                                          </button>
                                    </div>
                                    <motion.div
                                          className="about-card text-lg p-4 rounded-lg z-10 mb-2 bg-white border dark:bg-gray-800 dark:border-gray-700 hover:border-[--orange-background] hover:bg-[--orange-background] hover:text-[--lightest-text-color]"
                                          initial={{ opacitx: 0, x:-500 }}
                                          animate={{ opacitx: 1, x: 0 }}
                                          transition={{ duration: 1, delay: 1 }}
                                    >
                                          {about}
                                    </motion.div>
                              </div>
                        </>
                  )}
            </>
      );
};

export default About;
