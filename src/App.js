// import logo from './logo.svg';
import styled from 'styled-components';
import { BrowserRouter, Router, Link, Routes, Route } from "react-router-dom";
import Navbar from './navbar.jsx';
import Home from './home.jsx';
import About from './about.jsx';
import Resume from './resume.jsx';
import Error404 from './error404.jsx';
import './App.css';


const Content = styled.div`
  box-sizing: border-box;
  background-color: yellow;
`;

const AppContent = styled.div`
    /* background-size: contain;
    background:url(${'black'});  */
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
            <Route path="/resume" element={<Resume />} />
            <Route path="/error404" element={<Error404 />} />
          </Routes>
        {/* </Content> */}
      </BrowserRouter>
    </AppContent>
    
    
  );
}

export default App;
