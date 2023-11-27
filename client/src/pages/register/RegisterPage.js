import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './RegisterPage.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

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
      <div className="signup-left sm:none">
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
            <div className='flex items-center border border-blue-500'>
              <div className="flex items-center justify-center input-icon">
              <AccountCircleIcon className='text-[#182848]' />
              </div>
              <input type="text" id="firstName" placeholder="Enter your first name" />
            </div>
            <div>
              <input type="text" id="lastName" placeholder="Enter your last name" />
            </div>
          </div>
          <input type="text" id="username" placeholder="Enter your username" />
          <input type="email" id="email" placeholder="Enter your email" />
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