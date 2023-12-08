import React from 'react'

function SkillsCard() {
    const arr = [{
        name: "HTML",
        icon: "ri-html5-line"
    }, {
        name: "CSS",
        icon: "ri-css3-line"
    }, {
        name: "JavaScript",
        icon: "ri-javascript-line"
    }, {
        name: "React",
        icon: "ri-reactjs-line"
    }, {
        name: "Node.js",
        icon: "ri-nodejs-line"
    }, {
        name: "Express.js",
        icon: "ri-express-line"
    }, {
        name: "MongoDB",
        icon: "ri-mongodb-line"
    }, {
        name: "Git",
        icon: "ri-git-line"
    }, {
        name: "GitHub",
        icon: "ri-github-line"
    }, {
        name: "VS Code",
        icon: "ri-visual-studio-line"
    }, {
        name: "Figma",
        icon: "ri-figma-line"
    }, {
        name: "Photoshop",
        icon: "ri-photoshop-line"
    }, {
        name: "Illustrator",
        icon: "ri-illustrator-line"
    }, {
        name: "Premiere Pro",
        icon: "ri-premiere-line"
    }, {
        name: "After Effects",
        icon: "ri-after-effects-line"
    }, {
        name: "Adobe XD",
        icon: "ri-xd-line"
    }, {
        name: "Blender",
        icon: "ri-blender-line"
    }, {
        name: "Unity",
        icon: "ri-unity-line"
    }, {
        name: "C#",
        icon: "ri-csharp-line"
    }, {
        name: "C++",
        icon: "ri-c-line"
    }, {
        name: "Python",
        icon: "ri-python-line"
    }, {
        name: "Java",
        icon: "ri-java-line"
    }, {
        name: "PHP",
        icon: "ri-php-line"
    }, {
        name: "MySQL",
        icon: "ri-mysql-line"
    }, {
        name: "Bootstrap",
        icon: "ri-bootstrap-line"
    }, {
        name: "Tailwind CSS",
        icon: "ri-tailwind-line"
    }, {
        name: "Material UI",
        icon: "ri-material-line"
    }]
  return (
          <div className="flex flex-wrap max-h-[100vh] overflow-scroll justify-center">
            {arr.map((item, index) => (
            <div className="flex flex-col  items-center justify-center w-[100px] h-[100px] m-[10px] bg-[#D9832E] rounded-full">
                <i className={`${item.icon} text-4xl text-white`}></i>
                <p className="text-white">{item.name}</p>
            </div>
            ))}
        </div>
  )
}

export default SkillsCard