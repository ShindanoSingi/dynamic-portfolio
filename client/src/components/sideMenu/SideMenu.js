import React from "react";
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdAutoGraph } from "react-icons/md";
import { RiTableFill } from "react-icons/ri";
import { RiBarChart2Fill } from "react-icons/ri";
import { FaAward } from "react-icons/fa";
import { IoSchoolSharp } from "react-icons/io5";
import { BiSolidContact } from "react-icons/bi";
import { FaCloudDownloadAlt } from "react-icons/fa";

import { Link } from "react-router-dom";

import "./SideMenu.css";

function SideMenu() {
      return (
            <nav className="side flex h-full w-full flex-col justify-center items-center">
                  <ul className="absolute top-0">
                        <li>
                              <Link  className="icon-and-text link" to="/">
                                    <FaHome className="home-icon icon" />
                                    <div className="icon-text">Home</div>
                              </Link>
                        </li>

                        <li>
                              <Link className="link icon-and-text" to="/about">
                                    <FaUser className="user-icon icon" />
                                    <div className="icon-text">About</div>
                              </Link>
                        </li>

                        <li>
                              <Link className="link icon-and-text" to="/experience">
                                    <MdAutoGraph className="experience-icon icon" />
                                    <div className="icon-text">Experience</div>
                              </Link>
                        </li>

                        <li>
                              <Link className="link icon-and-text" to="/projects">
                                    <RiTableFill className="projects-icon icon" />
                                    <div className="icon-text">Projects</div>
                              </Link>
                        </li>

                        <li>
                              <Link className="link icon-and-text" to="/skills">
                                    <RiBarChart2Fill className="skills-icon icon" />
                                    <div className="icon-text">Skills</div>
                              </Link>
                        </li>

                        <li>
                              <Link className="link icon-and-text" to="/awards">
                                    <FaAward className="award-icon icon" />
                                    <div className="icon-text">Awards</div>
                              </Link>
                        </li>

                        <li>
                              <Link className="link icon-and-text" to="/education">
                                    <IoSchoolSharp className="education-icon icon" />
                                    <div className="icon-text">Education</div>
                              </Link>
                        </li>


                              <li><Link className="link icon-and-text" to="/contact">
                                    <BiSolidContact className="contact-icon icon" />
                                    <div className="icon-text">Contact</div></Link>
                              </li>


                        <li>
                              <Link className="link icon-and-text" to="/resume">
                                    <FaCloudDownloadAlt className="download-icon icon" />
                                    <div className="icon-text">Download</div>
                              </Link>
                        </li>
                  </ul>
                  <div className="grid py-4 bg-[--primary-color] absolute bottom-0 grid-flow-col w-[100vw] place-content-around ">
                        <a
                        href="https://twitter.com/Shindano_Singi"
                        target="_blank"
                        rel="noreferrer"
                        >
                              <FaTwitter className="twitter-icon icon" />
                        </a>

                        <a
                              href="https://github.com/ShindanoSingi"
                              target="_blank"
                              rel="noreferrer"
                        >
                              <FaGithub className="github-icon icon" />
                        </a>

                        <a
                              href="https://www.linkedin.com/in/shindano-singi/"
                              target="_blank"
                              rel="noreferrer"
                        >
                              <FaLinkedin className="linkedin-icon icon" />
                        </a>
                  </div>
            </nav>
      );
}

export default SideMenu;
