import * as React from "react";
import { motion } from "framer-motion";
import { GetAbout } from "../../apicalls/about";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { showLoader,hideLoader } from "../../redux/loaderSlice";

const About = () => {
      const [about, setAbout] = React.useState("");

    //   Get about
    const getAbout = async () => {
        try {
            const response = await GetAbout();
            setAbout(response.data);
        } catch (error) {
            console.log(error);
        }
    };

      return (
            <div className=" h-[100vh] text-gray-300 bg-[#DEDACE] overflow-scroll justify-center container w-[100%]">
                  {/* <motion.div
                        className="about-card  p-4 rounded-lg bg-white border  mt-4 dark:bg-gray-800 dark:border-gray-700 hover:border-[--orange-background] hover:bg-[--orange-background] hover:text-[--lightest-text-color]"
                        animate={{
                              scale: [1, 1, 1, 1, 1],
                              rotate: [0, 0, 30, 15, 0]
                        }}
                  >
                        Hello! <br />
                        I'm{" "}
                        <span className="font-extrabold">Shindano Singi</span> ,
                        a passionate and versatile{" "}
                        <span className="italic font-bold underline">
                              Full Stack Software Engineer
                        </span>{" "}
                        with a keen eye for creating innovative and efficient
                        solutions. With a solid foundation in both{" "}
                        <span className="italic font-bold underline">
                              Front End and Back End
                        </span>{" "}
                        development, I thrive in the dynamic world of technology
                        where creativity meets functionality.
                  </motion.div> */}

                  <motion.div
                        className="about-card  p-4 rounded-lg bg-white border dark:bg-gray-800 dark:border-gray-700 hover:border-[--orange-background] hover:bg-[--orange-background] hover:text-[--lightest-text-color]"
                        initial={{ opacity: 0, y: -200 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 2 }}
                  >
                        On the Front End, I bring to the table proficiency in
                        crafting seamless and visually appealing user
                        interfaces. My expertise includes harnessing the power
                        of modern frameworks such as React and Vue.js to deliver
                        responsive and user-centric applications. I am
                        meticulous about creating delightful user experiences,
                        ensuring that every pixel aligns with the overall design
                        and usability goals.
                  </motion.div>

                  {/* <motion.div
                        className="about-card  p-4 rounded-lg bg-white border  mt-4 dark:bg-gray-800 dark:border-gray-700 hover:border-[--orange-background] hover:bg-[--orange-background] hover:text-[--lightest-text-color]"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 1 }}
                  >
                        Shifting gears to the Back End, I revel in the challenge
                        of architecting robust and scalable server-side
                        solutions. My toolset encompasses technologies like
                        Node.js, Django, and Flask, allowing me to develop
                        efficient APIs and maintain the backbone of applications
                        with precision. I'm experienced in database design,
                        optimization, and the implementation of secure
                        authentication systems.
                  </motion.div> */}

                  {/* <motion.div
                        className="about-card  p-4 rounded-lg bg-white border  mt-4 dark:bg-gray-800 dark:border-gray-700 hover:border-[--orange-background] hover:bg-[--orange-background] hover:text-[--lightest-text-color]"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 2 }}
                  >
                        As a problem solver at heart, I take pride in dissecting
                        complex challenges and crafting elegant solutions. I am
                        not just a coder; I am an innovator who is constantly
                        exploring emerging technologies and industry best
                        practices. Whether it's optimizing performance
                        bottlenecks, integrating cutting-edge features, or
                        troubleshooting intricate issues, I approach every task
                        with a solutions-oriented mindset.
                  </motion.div> */}

                  {/* <motion.div
                        className="about-card  p-4 rounded-lg bg-white border  mt-4 dark:bg-gray-800 dark:border-gray-700 hover:border-[--orange-background] hover:bg-[--orange-background] hover:text-[--lightest-text-color]"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 2 }}
                  >
                        In addition to my technical skills, I am a collaborative
                        team player who values open communication and thrives in
                        an environment where ideas are shared and refined. I
                        believe in the power of teamwork to elevate projects and
                        achieve collective success. My adaptability allows me to
                        seamlessly integrate into cross-functional teams and
                        contribute to the overall success of the development
                        lifecycle.
                  </motion.div> */}

                  {/* <motion.div
                        className="about-card  p-4 rounded-lg bg-white border  mt-4 dark:bg-gray-800 dark:border-gray-700 hover:border-[--orange-background] hover:bg-[--orange-background] hover:text-[--lightest-text-color]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 2 }}
                  >
                        In the ever-evolving landscape of technology, I am
                        committed to continuous learning. Staying abreast of
                        industry trends and embracing new methodologies is not
                        just a habit but a passion. I actively seek
                        opportunities to expand my knowledge, attend
                        conferences, and engage in projects that challenge me to
                        push the boundaries of what's possible.
                  </motion.div> */}

                  {/* <motion.div
                        className="about-card  p-4 rounded-lg bg-white border  mt-4 dark:bg-gray-800 dark:border-gray-700 hover:border-[--orange-background] hover:bg-[--orange-background] hover:text-[--lightest-text-color]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 2 }}
                  >
                        If you're seeking a Full Stack Software Engineer who combines technical expertise with a passion for innovation, I'd love to connect. Let's collaborate on building exceptional digital experiences that leave a lasting impact.
                  </motion.div> */}

                  {/*
                        <motion.p
                              initial={{ opacity: 0, x: -50 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 1, delay: 2 }}
                        >
                              On the Front End, I bring to the table proficiency
                              in crafting seamless and visually appealing user
                              interfaces. My expertise includes harnessing the
                              power of modern frameworks such as React and
                              Vue.js to deliver responsive and user-centric
                              applications. I am meticulous about creating
                              delightful user experiences, ensuring that every
                              pixel aligns with the overall design and usability
                              goals.
                        </motion.p>
                        <motion.p
                              initial={{ opacity: 0, x: -50 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 1, delay: 3 }}
                        >
                              Shifting gears to the Back End, I revel in the
                              challenge of architecting robust and scalable
                              server-side solutions. My toolset encompasses
                              technologies like Node.js, Django, and Flask,
                              allowing me to develop efficient APIs and maintain
                              the backbone of applications with precision. I'm
                              experienced in database design, optimization, and
                              the implementation of secure authentication
                              systems.
                        </motion.p>
                        <motion.p
                              initial={{ opacity: 0, x: -50 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 1, delay: 4 }}
                        >
                              As a problem solver at heart, I take pride in
                              dissecting complex challenges and crafting elegant
                              solutions. I am not just a coder; I am an
                              innovator who is constantly exploring emerging
                              technologies and industry best practices. Whether
                              it's optimizing performance bottlenecks,
                              integrating cutting-edge features, or
                              troubleshooting intricate issues, I approach every
                              task with a solutions-oriented mindset.
                        </motion.p>
                        <motion.p
                              initial={{ opacity: 0, x: -50 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 1, delay: 5 }}
                        >
                              In addition to my technical skills, I am a
                              collaborative team player who values open
                              communication and thrives in an environment where
                              ideas are shared and refined. I believe in the
                              power of teamwork to elevate projects and achieve
                              collective success. My adaptability allows me to
                              seamlessly integrate into cross-functional teams
                              and contribute to the overall success of the
                              development lifecycle.
                        </motion.p>
                        <motion.p
                              initial={{ opacity: 0, x: -50 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 1, delay: 6 }}
                        >
                              In the ever-evolving landscape of technology, I am
                              committed to continuous learning. Staying abreast
                              of industry trends and embracing new methodologies
                              is not just a habit but a passion. I actively seek
                              opportunities to expand my knowledge, attend
                              conferences, and engage in projects that challenge
                              me to push the boundaries of what's possible.
                        </motion.p>
                        <motion.p
                              initial={{ opacity: 0, x: -50 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 1, delay: 7 }}
                        >
                              On the Front End, I bring to the table proficiency
                              in crafting seamless and visually appealing user
                              interfaces. My expertise includes harnessing the
                              power of modern frameworks such as React and
                              Vue.js to deliver responsive and user-centric
                              applications. I am meticulous about creating
                              delightful user experiences, ensuring that every
                              pixel aligns with the overall design and usability
                              goals.
                        </motion.p>
                        <motion.div
                              className="icons-container"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 1, delay: 8 }}
                        >
                              In the ever-evolving landscape of technology, I am
                              committed to continuous learning. Staying abreast
                              of industry trends and embracing new methodologies
                              is not just a habit but a passion. I actively seek
                              opportunities to expand my knowledge, attend
                              conferences, and engage in projects that challenge
                              me to push the boundaries of what's possible.
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
                        </motion.button> */}
                  {/* </motion.div> */}
            </div>
      );
};

export default About;
