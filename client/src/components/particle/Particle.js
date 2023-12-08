import * as React from 'react'
import { motion } from 'framer-motion';


  const Particle = () => {
  return (
    <div className="home-container absolute bg-[#942b2b] max-h-[50vh] mt-10 text-gray-300 overflow-scroll justify-center container w-[100%]">
      <motion.div
        className="hero-section"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 380 }}
        transition={{ duration: 1 }}
      >
        <h1>Hello!
          <br />
           I'm Shindano Singi, a passionate and versatile Full Stack Software Engineer with a keen eye for creating innovative and efficient solutions. With a solid foundation in both Front End and Back End development, I thrive in the dynamic world of technology where creativity meets functionality. I am a self-motivated and detail-oriented individual who is eager to learn and grow as a developer. I am currently seeking a position where I can utilize my skills and experience to contribute to a team and help drive the success of an organization.</h1><br />
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          On the Front End, I bring to the table proficiency in crafting seamless and visually appealing user interfaces. My expertise includes harnessing the power of modern frameworks such as React and Vue.js to deliver responsive and user-centric applications. I am meticulous about creating delightful user experiences, ensuring that every pixel aligns with the overall design and usability goals.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 3 }}
        >
          Shifting gears to the Back End, I revel in the challenge of architecting robust and scalable server-side solutions. My toolset encompasses technologies like Node.js, Django, and Flask, allowing me to develop efficient APIs and maintain the backbone of applications with precision. I'm experienced in database design, optimization, and the implementation of secure authentication systems.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 4 }}
        >
          As a problem solver at heart, I take pride in dissecting complex challenges and crafting elegant solutions. I am not just a coder; I am an innovator who is constantly exploring emerging technologies and industry best practices. Whether it's optimizing performance bottlenecks, integrating cutting-edge features, or troubleshooting intricate issues, I approach every task with a solutions-oriented mindset.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 5 }}
        >
          In addition to my technical skills, I am a collaborative team player who values open communication and thrives in an environment where ideas are shared and refined. I believe in the power of teamwork to elevate projects and achieve collective success. My adaptability allows me to seamlessly integrate into cross-functional teams and contribute to the overall success of the development lifecycle.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 6 }}
        >
          In the ever-evolving landscape of technology, I am committed to continuous learning. Staying abreast of industry trends and embracing new methodologies is not just a habit but a passion. I actively seek opportunities to expand my knowledge, attend conferences, and engage in projects that challenge me to push the boundaries of what's possible.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 7 }}
        >
          On the Front End, I bring to the table proficiency in crafting seamless and visually appealing user interfaces. My expertise includes harnessing the power of modern frameworks such as React and Vue.js to deliver responsive and user-centric applications. I am meticulous about creating delightful user experiences, ensuring that every pixel aligns with the overall design and usability goals.
        </motion.p>
        <motion.div
          className="icons-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 8 }}
        >
        In the ever-evolving landscape of technology, I am committed to continuous learning. Staying abreast of industry trends and embracing new methodologies is not just a habit but a passion. I actively seek opportunities to expand my knowledge, attend conferences, and engage in projects that challenge me to push the boundaries of what's possible.
        </motion.div>
        <motion.button
          className="cta-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 9 }}
        >
          Get Started
        </motion.button>
      </motion.div>
    </div>
  )
}

export default Particle
