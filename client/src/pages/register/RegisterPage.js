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
          <input type="text" id="firstName" placeholder="Enter your first name" required />
          <input type="text" id="lastName" placeholder="Enter your last name" required />
          <input type="text" id="username" placeholder="Enter your username" required />
          <input type="email" id="email" placeholder="Enter your email" required />
          <input type="password" id="password" placeholder="Enter your password" required />

          <input type="text" id="streetnumber" placeholder="Enter your street number" required />
          <input type="text" id="streetname" placeholder="Enter your street name" required />
          <input type="text" id="cityname" placeholder="Enter your city name" required />
          <input type="text" id="statename" placeholder="Enter your state name" required />

          <input type="text" id="postalcode" placeholder="Enter the postal code" required />
          <input type="text" id="github" placeholder="Github address (optional)" />
          <input type="text" id="linkedin" placeholder="Linkedin address (optional)" />
          <input type="text" id="facebook" placeholder="Facebook address (optional)" />
          <input type="text" id="twitter" placeholder="Twitter address (optional)" />
          <input type="text" id="instagram" placeholder="Instagram address (optional)" />
          <input type="text" id="title" placeholder="Enter your title" required />

          <button className='submit-button' type="submit">Sign Up</button>
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