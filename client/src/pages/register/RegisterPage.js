import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './RegisterPage.css';

const RegisterPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const formVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } },
  };

  return (
    <motion.div
      className="signup-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="signup-left">
        <h1>Sign Up</h1>
      </div>
      <div className="signup-right">
      <motion.div
        className="signup-form"
        variants={formVariants}
        initial="hidden"
        animate="visible"
      >
        <h2>Registration</h2> <hr />
        <form>
          <div className="name-input">
            <div>
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" placeholder="Enter your first name" />
            </div>
            <div>
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" placeholder="Enter your last name" />
            </div>
          </div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" placeholder="Enter your username" />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" />

          <button type="submit">Sign Up</button>
        </form>

        <p className="login-link">
          Already have an account? <Link to="/login">Log in here</Link>
        </p>
      </motion.div>
      </div>
    </motion.div>
  );
};

export default RegisterPage;