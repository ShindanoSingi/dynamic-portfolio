import React, { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

import "./Footer.css";

function Footer() {
    const[show, setShow] = React.useState(false);

    const showNumber = () => {
        setShow(!show);
    }

    useEffect(() => {
            showNumber();
        }, []);

      return (
            <div className="text-white footer flex items-center justify-center">
                  <div className="mt-8">
                        <h1 className="text-[--primary-color] text-3xl">
                              <span className="text-3xl">Hi, I am</span> <br />
                              <span className="text-5xl"> Shindano Singi</span>
                        </h1>
                        <br />
                        <TypeAnimation
                              sequence={[
                                    "I am Full Stack Developer",
                                    1000,
                                    "I am Frontend Developer",
                                    1000,
                                    "I am Backend Developer",
                                    1000
                              ]}
                              wrapper="span"
                              speed={10}
                              style={{
                                    fontSize: "1.6rem",
                                    display: "inline-block",
                                    color: "#E64C3C",
                                    fontWeight: "bold",
                                    whiteSpace: "nowrap"
                              }}
                              repeat={Infinity}
                        />
                        <div className="flex mt-4 w-[100vw] justify-evenly mx-auto">
                              <a
                                    className="social-icons hover:text-[#E64C3C] hover:scale-150 transition duration-300 ease-in-out"
                                    href="https://www.linkedin.com/in/shindano-singi-9b0a5a1b9/"
                                    target="_blank"
                                    rel="noreferrer"
                              >
                                    <FaLinkedin className="text-3xl" />
                              </a>
                              <a
                                    className="social-icons hover:text-[#E64C3C] hover:scale-150 transition duration-300 ease-in-out"
                                    href=" https://github.com/shindano"
                                    target="_blank"
                                    rel="noreferrer"
                              >
                                    <FaGithub className="text-3xl" />
                              </a>
                              <a
                                    className="social-icons hover:text-[#E64C3C] hover:scale-150 transition duration-300 ease-in-out"
                                    href="https://twitter.com/ShindanoSingi"
                                    target="_blank"
                                    rel="noreferrer"
                              >
                                    <FaTwitter className="text-3xl" />
                              </a>
                              <p
                                    className="social-icons hover:text-[#E64C3C] hover:scale-150 transition duration-300 ease-in-out"


                              >
                                    <FaPhone onClick={showNumber} className="text-3xl" />{" "}
                              </p>
                              <a
                                    className="social-icons hover:text-[#E64C3C] hover:scale-150 transition duration-300 ease-in-out"
                                    href="mailto:shindanosingi1@gmail.com"
                                    target="blank"
                                    rel="noreferrer"
                              >
                                    <FaEnvelope className="text-3xl" />
                              </a>
                        </div>
                        <br />
                        {
                            show ? <p className="text-[--primary-color] font-extrabold text-3xl" onClick={showNumber}>+1 (207) 713 - 3345</p>
                             : <p className="text-[--primary-color] absolute font-extra-bold text-xl"></p>
                             }
                  </div>
            </div>
      );
}

export default Footer;
