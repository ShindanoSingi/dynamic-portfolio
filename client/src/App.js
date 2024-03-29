import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import RegisterPage from "./pages/register/RegisterPage";
import LoginPage from "./pages/login/LoginPage";
import Home from "./pages/home/Home";
import About from "./pages/about/About";

import { GetAllUsers } from "./apicalls/users";
import { useDispatch } from "react-redux";
import { hideLoader, showLoader } from "./redux/loaderSlice";
import { SetUser, SetUserAbout, SetUserName, SetUserFirstName, SetUserLastName } from "./redux/userSlice";
import Error from "./pages/error/Error";
import Projects from "./pages/projects/Projects";
import Experience from "./pages/experience/Experience";

function App() {

  const dispatch = useDispatch();

  const getUser = async () => {
    try {
      dispatch(showLoader());
      const response = await GetAllUsers();
      if (response.success === true) {
        dispatch(SetUser(response.users[0]));
        dispatch(SetUserAbout(response.users[0].about));
        dispatch(SetUserFirstName(response.users[0].firstName));
        dispatch(SetUserName(response.users[0].firstName) + ' ' + response.users[0].lastName);
        dispatch(SetUserLastName(response.users[0].lastName));
        dispatch(hideLoader());
      } else {
        dispatch(hideLoader());
      }
    } catch (error) {
      dispatch(hideLoader());
    }
  }

  useEffect(() => {
    getUser();
  })

  return (
    <div>
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
<ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/experience" element={<Experience/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/product" element={<h1>Product</h1>} />
          <Route path="/contact" element={<h1>Contact</h1>} />
          <Route path="/admin" element={<h1>Admin</h1>} />
          <Route path="/settings" element={<h1>Settings</h1>} />
          <Route path="/dashboard" element={<h1>Dashboard</h1>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/forgot-password" element={<h1>Forgot Password</h1>} />
          <Route path="/reset-password" element={<h1>Reset Password</h1>} />
          <Route path="/:rest*" element={<h1><Error/></h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;









// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import React from "react";
// import Button from "./components/button/Button";
// import Header from "./components/header/Header";

// import { Controller, Scene } from 'react-scrollmagic';

// import styled from 'styled-components';
// import Particle from "./components/particle/Particle";

// function App() {
//   const handleClick = () => {
//     console.log("Button clicked");
//   };

//   const MultipleControllersStyled = styled.div`
//   overflow: hidden;

//   .panel {
//     height: 100vh;
//     width: 100vw;
//     text-align: center;
//   }

//   .panel span {
//     position: relative;
//     display: block;
//     overflow: visible;
//     top: 50%;
//     font-size: 80px;
//   }

//   .panel.blue {
//     background-color: #3883d8;
//   }

//   .panel.turqoise {
//     background-color: #38ced7;
//   }

//   .panel.green {
//     background-color: #22d659;
//     margin-bottom: 800px;
//   }

//   .panel.bordeaux {
//     background-color: #953543;
//   }`

//   return (
//     <div className="App">
//       <Header />
//       <Particle
//       params={{
//         particles: {
//           color: {
//             value: "#000000"
//           },
//           line_linked: {
//             color: {
//               value: "#000000"
//             }
//           },
//           number: {
//             value: 50
//           },
//           size: {
//             value: 3
//           }
//         }
//       }}
//       />
//       <MultipleControllersStyled>
//     <div id="container1">
//     <Controller globalSceneOptions={{ triggerHook: 'onLeave' }}>
//       <Scene pin>
//         <div className="panel blue">
//           <Header/>
//         </div>
//       </Scene>
//       <Scene pin>
//         <div className="panel turqoise">
//           <Button label="Click me" color="none" onClick={handleClick} size="small" width="auto" />
//         </div>
//       </Scene>
//       <Scene pin>
//         <div className="panel green"><span>Panel</span></div>
//       </Scene>
//       <Scene pin>
//         <div className="panel bordeaux"><span>Panel</span></div>
//       </Scene>
//     </Controller>
//     </div>
//   </MultipleControllersStyled>
// );
//     </div>
//   );
// }

// export default App;

