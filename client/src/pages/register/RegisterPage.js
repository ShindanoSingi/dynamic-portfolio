import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./RegisterPage.css";

import Button from "../../components/button/Button";

import { RegisterUser } from "../../apicalls/users";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { hideLoader, showLoader } from "../../redux/loaderSlice";

const RegisterPage = () => {
      const dispatch = useDispatch();
      const navigate = useNavigate();

      const [user, setUser] = useState({
            firstName: "",
            lastName: "",
            userName: "",
            email: "",
            password: "",
            streetNumber: "",
            streetName: "",
            cityName: "",
            stateName: "",
            postalCode: "",
            gitHub: "",
            linkedIn: "",
            facebook: "",
            twitter: "",
            instagram: "",
            title: "",
            framework: "",
            about: ""
      });

      const containerVariants = {
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 1 } }
      };

      const formVariants = {
            hidden: { opacity: 0, y: -20 },
            visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: 1 }
            }
      };

      const register = async () => {
            try {
                  dispatch(showLoader());
                  const response = await RegisterUser(user);
                  dispatch(hideLoader());
                  if (response.success) {
                        toast.success(response.message);
                  } else {
                        toast.error(response.message);
                  }
            } catch (error) {
                  dispatch(hideLoader);
                  toast.error(error.message);
            }
      };

      useEffect(() => {
            if (localStorage.getItem("token")) {
                  navigate("/");
            }
      });

      return (
            <motion.div
                  className="flex flex-col signup-container"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
            >
                  <div className="hidden w-full signup-left">
                        <h1>Sign Up</h1>
                  </div>
                  <div className="signup-right">
                        <motion.div
                              className="signup-form"
                              variants={formVariants}
                              initial="hidden"
                              animate="visible"
                        >
                              <h2>Registration</h2> <hr required />
                              <form>
                                    <input
                                          value={user.firstName}
                                          type="text"
                                          name="firstName"
                                          id="firstName"
                                          placeholder="Enter your first name (Required)"
                                          required
                                          onChange={(e) => setUser({ ...user, firstName: e.target.value })}
                                    />
                                    <input
                                          value={user.lastName}
                                          type="text"
                                          name="lastName"
                                          id="lastName"
                                          placeholder="Enter your last name"
                                          required
                                          onChange={(e) => setUser({ ...user, lastName: e.target.value })}
                                    />
                                    <input
                                          value={user.userName}
                                          type="text"
                                          name="username"
                                          id="username"
                                          placeholder="Enter your username"
                                          required
                                          onChange={(e) => setUser({ ...user, userName: e.target.value })}
                                    />
                                    <input
                                          value={user.email}
                                          type="email"
                                          name="email"
                                          id="email"
                                          placeholder="Enter your email"
                                          required
                                          onChange={(e) => setUser({ ...user, email: e.target.value })}
                                    />
                                    <input
                                          value={user.password}
                                          type="password"
                                          name="password"
                                          id="password"
                                          placeholder="Enter your password"
                                          required
                                          onChange={(e) => setUser({ ...user, password: e.target.value })}
                                    />

                                    <input
                                          value={user.streetNumber}
                                          type="text"
                                          name="streetnumber"
                                          id="streetnumber"
                                          placeholder="Enter your street number"
                                          required
                                          onChange = {(e) => {setUser({...user, streetNumber: e.target.value})}}
                                    />
                                    <input
                                          value={user.streetName}
                                          type="text"
                                          name="streetname"
                                          id="streetname"
                                          placeholder="Enter your street name"
                                          required
                                          onChange = {(e) => {setUser({...user, streetName: e.target.value})}}
                                    />
                                    <input
                                          value={user.cityName}
                                          type="text"
                                          name="cityname"
                                          id="cityname"
                                          placeholder="Enter your city name"
                                          required
                                          onChange = {(e) => {setUser({...user, cityName: e.target.value})}}
                                    />
                                    <input
                                          value={user.stateName}
                                          type="text"
                                          name="statename"
                                          id="statename"
                                          placeholder="Enter your state name"
                                          required
                                          onChange = {(e) => {setUser({...user, stateName: e.target.value})}}
                                    />
                                    <input
                                          value={user.postalCode}
                                          type="text"
                                          name="postalcode"
                                          id="postalcode"
                                          placeholder="Enter the postal code"
                                          required
                                          onChange = {(e) => {setUser({...user, postalCode: e.target.value})}}
                                    />
                                    <input
                                          value={user.title}
                                          type="text"
                                          name="title"
                                          id="title"
                                          placeholder="Enter your title (Required)"
                                          required
                                          onChange = {(e) => {setUser({...user, title: e.target.value})}}
                                    />
                                    <input
                                          value={user.gitHub}
                                          type="text"
                                          name="github"
                                          id="github"
                                          placeholder="Github address (optional)"
                                          onChange = {(e) => {setUser({...user, gitHub: e.target.value})}}
                                    />
                                    <input
                                          value={user.linkedIn}
                                          type="text"
                                          name="linkedin"
                                          id="linkedin"
                                          placeholder="Linkedin address (optional)"
                                          onChange = {(e) => {setUser({...user, linkedIn: e.target.value})}}
                                    />
                                    <input
                                          value={user.facebook}
                                          type="text"
                                          name="facebook"
                                          id="facebook"
                                          placeholder="Facebook address (optional)"
                                          onChange = {(e) => {setUser({...user, facebook: e.target.value})}}
                                    />
                                    <input
                                          value={user.twitter}
                                          type="text"
                                          name="twitter"
                                          id="twitter"
                                          placeholder="Twitter address (optional)"
                                          onChange = {(e) => {setUser({...user, twitter: e.target.value})}}
                                    />
                                    <input
                                          value={user.instagram}
                                          type="text"
                                          name="instagram"
                                          id="instagram"
                                          placeholder="Instagram address (optional)"
                                          onChange = {(e) => {setUser({...user, instagram: e.target.value})}}
                                    />
                                    <input
                                          value={user.fr}
                                          type="text"
                                          name="stack"
                                          id="stack"
                                          placeholder="Enter frame work. (optional)"
                                          onChange = {(e) => {setUser({...user, framework: e.target.value})}}
                                    />
                                    <textarea
                                          value={user.framework}
                                          type="text"
                                          name="about"
                                          id="about"
                                          cols="30"
                                          rows="5"
                                          placeholder="Enter your description"
                                          onChange = {(e) => {setUser({...user, about: e.target.value})}}
                                    ></textarea>

                                    <Button
                                          onClick={register}
                                          label="Sign Up"
                                          text="Sign Up"
                                    />

                              </form>
                              <p className="login-link">
                                    Already have an account?{" "}
                                    <Link to="/login">Log in here</Link>
                              </p>
                        </motion.div>
                  </div>
            </motion.div>
      );
};

export default RegisterPage;

// phoneNumber: { type: String, required: false},
//     role: { type: String, default:'user'},
//     date: {
//         type: Date,
//         default: Date.now
//     },

//     github: { type: String, required: false },
//     linkedin: { type: String, required: false },
//     twitter: { type: String, required: false },
//     facebook: { type: String, required: false },
//     instagram: { type: String, required: false },
//     image: { type: String, required: false },
//     title: { type: String, required: false },
//     description:{
//         type: String,
//         required: false
//     },
//     stacks: [{ type: String, default: 'Full Stack' }],
//     about: { type: String, required: false },
//     profilePicture: { type: String, required: false },
