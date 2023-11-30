import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./LoginPage.css";

import Button from "../../components/button/Button";

import { LoginUser } from "../../apicalls/users";
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from "react-redux";
import { hideLoader, showLoader } from "../../redux/loaderSlice";

const LoginPage = () => {
      const dispatch = useDispatch();
      const navigate = useNavigate();

      const [user, setUser] = useState({
            email: "",
            password: "",
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
                  transition: { duration: 0.5, delay: 0.5 }
            }
      };

      const loginUser = async () => {
            try {
                  dispatch(showLoader());
                  const response = await LoginUser(user);
                  console.log(response);
                  if (response.success === true) {
                        localStorage.setItem("token", response.token);
                        localStorage.setItem("user", JSON.stringify(response.user));
                        dispatch(hideLoader());
                        toast.success(response.message);
                  } else {
                        dispatch(hideLoader());
                        toast.error(response.message);
                  }
            } catch (error) {
                  dispatch(hideLoader());
                  console.log(error);
                  toast.error("Something went wrong");
       }
      }

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
                              <h2>Login</h2> <hr required />
                              <form>


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
                                    <button onClick={
                                          (e) => {
                                                e.preventDefault();
                                                loginUser();
                                          }
                                    } className="btn btn-primary"
                                    >
                                          Login
                                    </button>

                                    {/* <Button
                                          onClick={loginUser}
                                          label="Login"
                                          text="Sign Up"

                                    /> */}
                              </form>
                              <p className="mt-2 login-link">
                                    Already have an account?{" "}
                                    <Link to="/login">Log in here</Link>
                              </p>
                        </motion.div>
                        <ToastContainer />
                  </div>
            </motion.div>
      );
};

export default LoginPage;
