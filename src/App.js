// import logo from './logo.svg';
import styled from 'styled-components';
import { BrowserRouter, Router, Link, Routes, Route } from "react-router-dom";
import Navbar from './navbar.jsx';
import Home from './home.jsx';
import About from './about.jsx';
import Resume from './resume.jsx';
import Error404 from './error404.jsx';
import './App.css';
import Contact from './contact.jsx';
import Login from './login.jsx';


// const Content = styled.div`
//   box-sizing: border-box;
//   background-color: yellow;
// `;

const AppContent = styled.div`
    /* background-size: contain;
    background:url(${'black'});  */
    /* background-color: #61dafb; */
`;


function App() {
  return (
    <AppContent>
      <BrowserRouter>
        <Navbar />
        {/* <Content> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/error404" element={<Error404 />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        {/* </Content> */}
      </BrowserRouter>
    </AppContent>
    
    
  );
}

export default App;
