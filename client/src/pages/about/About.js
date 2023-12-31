import * as React from "react";
import { motion } from "framer-motion";
import { GetAbout } from "../../apicalls/about";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Loader from "../../components/loader/Loader";
import Button from "../../components/button/Button";

const About = () => {
      const { userAbout } = useSelector((state) => state.userReducer);
      const [about, setAbout] = React.useState("");

      const getAbout = async () => {
            const response = await GetAbout();
            console.log(response);
            setAbout(response.data[0].about);
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
                              <div className=" h-[100vh] text-lg text-gray-300 bg-[--primary-color] overflow-scroll justify-center container w-[100%]">
                                    <div className="mb-2">
                                          <Button label="Back" size='small' fontSize='1.2rem' width='100%' onClick={()=>{
                                                window.history.back();
                                          }} />
                                    </div>
                                    <motion.div
                                          className="about-card  p-4 rounded-lg bg-white border dark:bg-gray-800 dark:border-gray-700 hover:border-[--orange-background] hover:bg-[--orange-background] hover:text-[--lightest-text-color]"
                                          initial={{ opacity: 0, y: -200 }}
                                          animate={{ opacity: 1, y: 0 }}
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
