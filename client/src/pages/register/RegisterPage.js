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
          <input type="text" name='firstName' id="firstName" placeholder="Enter your first name" required />
          <input type="text" name='lastName' id="lastName" placeholder="Enter your last name" required />
          <input type="text" name='username' id="username" placeholder="Enter your username" required />
          <input type="email" name='email' id="email" placeholder="Enter your email" required />
          <input type="password" name='password' id="password" placeholder="Enter your password" required />

          <input type="text" name='streetnumber' id="streetnumber" placeholder="Enter your street number" required />
          <input type="text" name='streetname' id="streetname" placeholder="Enter your street name" required />
          <input type="text" name='cityname' id="cityname" placeholder="Enter your city name" required />
          <input type="text" name='statename' id="statename" placeholder="Enter your state name" required />

          <input type="text" name='postalcode' id="postalcode" placeholder="Enter the postal code" required />
          <input type="text" name='github' id="github" placeholder="Github address (optional)" />
          <input type="text" name='linkedin' id="linkedin" placeholder="Linkedin address (optional)" />
          <input type="text" name='facebook' id="facebook" placeholder="Facebook address (optional)" />
          <input type="text" name='twitter' id="twitter" placeholder="Twitter address (optional)" />
          <input type="text" name='instagram' id="instagram" placeholder="Instagram address (optional)" />
          <input type="text" name='title' id="title" placeholder="Enter your title" required />
          <textarea name="description" id="" cols="30" rows="10" placeholder="Enter your description"></textarea>

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