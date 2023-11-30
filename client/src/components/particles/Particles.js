import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { Controller, Scene } from 'react-scrollmagic';
import MenuIcon from '@mui/icons-material/Menu';
import './Particles.css';

import im from "../../assets/myImage.svg";
import { TypeAnimation } from 'react-type-animation';



const Particle = () => {
    const particlesInit = useCallback(async engine => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <div>
    <div id="container1">
    <Controller globalSceneOptions={{ triggerHook: 'onLeave' }}>
      <Scene pin>
         <div className="panel welcome-page">
         <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#0d47a1",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 8,
                        },
                        repulse: {
                            distance: 50,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 100,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 2,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 400,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 4 },
                    },
                },
                detectRetina: true,
            }}
        />
        <header className="fixed flex justify-between top-0 left-0 w-[100%] p-[20px] bg-[rgba(255, 255, 255, 0.8)] z-[1000]">
            <p className="text-[#D9832E] text-2xl font-bold">Shindano</p>
            <MenuIcon className="text-[#D9832E] hambourger font-bold" />

        </header>
        <img className="my-image" src={im} alt="my-img" />
        <TypeAnimation
      sequence={[
        'I am Shindano Singi',
        1000, // delay of 1 second
        'I am Full Stack Developer',
        1000,
        'I am Frontend Developer',
        1000,
        'I am Backend Developer',
        1000,
      ]}
      wrapper="span"
      speed={10}
      style={{ fontSize: '2em', display: 'inline-block', color: '#FFFF', fontWeight: 'bold', whiteSpace:'nowrap' }}
      repeat={Infinity}
    />
        </div>
      </Scene>
       <Scene pin>
         <div className="panel turqoise">
              Button
         </div>
       </Scene>
       <Scene pin>
         <div className="panel green"><span>Panel</span></div>
       </Scene>
       <Scene pin>
         <div className="panel bordeaux"><span>Panel</span></div>
       </Scene>
     </Controller>
     </div>
        </div>

    );
};

export default Particle;