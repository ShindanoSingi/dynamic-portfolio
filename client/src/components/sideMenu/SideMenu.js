import React from "react";
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdAutoGraph } from "react-icons/md";
import { RiTableFill } from "react-icons/ri";
import { RiBarChart2Fill } from "react-icons/ri";
import { FaAward } from "react-icons/fa";
import { IoSchoolSharp } from "react-icons/io5";
import { BiSolidContact } from "react-icons/bi";
import { FaCloudDownloadAlt } from "react-icons/fa";

import "./SideMenu.css";

function SideMenu() {
      return (
            <nav className="side flex h-full w-full flex-col justify-center">
                  <ul>
                        <li className="icon-and-text">
                              <FaHome className="home-icon icon" />
                              <div className="icon-text">Home</div>
                        </li>
                        <li className="icon-and-text">
                              <FaUser className="user-icon icon" />
                              <div className="icon-text">About</div>
                        </li>
                        <li className="icon-and-text">
                              <MdAutoGraph className="experience-icon icon" />
                              <div className="icon-text">Experience</div>
                        </li>
                        <li className="icon-and-text">
                              <RiTableFill className="projects-icon icon" />
                              <div className="icon-text">Projects</div>
                        </li>
                        <li className="icon-and-text">
                              <RiBarChart2Fill className="skills-icon icon" />
                              <div className="icon-text">Skills</div>
                        </li>
                        <li className="icon-and-text">
                              <FaAward className="award-icon icon" />
                              <div className="icon-text">Award</div>
                        </li>
                        <li className="icon-and-text">
                              <IoSchoolSharp className="education-icon icon" />
                              <div className="icon-text">Education</div>
                        </li>
                        <li className="icon-and-text">
                              <BiSolidContact className="contact-icon icon" />
                              <div className="icon-text">Contact</div>
                        </li>
                        <li className="icon-and-text">
                              <FaCloudDownloadAlt className="download-icon icon" />
                              <div className="icon-text">Download</div>
                        </li>
                  </ul>
                  <div className="grid h-full bg-[--primary-color] relative bottom-0 grid-flow-col w-[100vw] place-content-around ">
                        <FaTwitter className="twitter-icon icon" />

                        <FaGithub className="github-icon icon" />

                        <FaLinkedin className="linkedin-icon icon" />
                  </div>
            </nav>
      );
}

export default SideMenu;
