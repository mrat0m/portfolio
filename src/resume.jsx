// import propic from './assets/propic.jpeg';
import smallpic from './assets/propic.svg';
// import qwerty from './assets/qwerty.jpeg';
// import overpass from 'fonts/overpass-desktop-fonts/overpass-bold-italic.otf';
import qwerty from './assets/qwerty.svg';
import styled from 'styled-components';
import { BrowserRouter, Router, Link, Routes, Route } from "react-router-dom";
import './all.css';

const Divone = styled.div`
  display: flexbox;
  align-items: center;
  max-width: 0px;
  /* margin: 0 auto;  */
  margin-left: -750px;
  margin-top: 0rem;
  /* background-color: grey;   */
 `;
const Divoneleft = styled.div`
 display: flexbox;
 align-items: left;
 max-width: 0px;
 margin: 0; 
 margin-left: 0px;
 /* margin-right: -50px; */
 margin-top: 2rem;
 font-family: cursive;
 font-style: italic;
 font-size: xxx-large;
 
 /* background-color: grey;   */
 `;
const Divoneright = styled.div`
display: flexbox;
/* align-items: left; */
width: 700px;
margin: 0px; 
margin-left: 800px;
margin-right: 0px;
margin-top: -10rem;
font-family: cursive;
font-style: italic;
font-size: 40px;

/* background-color: grey;   */
`;

const Resume = () => {
    return (
        <Divone>
            <Divoneleft>
                {/* <img src={propic} className="photo" alt="" /> */}
                <img src={qwerty} className="qwerty" alt="" />
            </Divoneleft>
            <Divoneright>
            {"<"}\{">"} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ERROR  404 <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; PAGE NOT FOUND &nbsp;&nbsp;{"<"}\{">"}




                {/* <img src={smallpic} className="smallphoto" alt="" /> */}
                {/* <br/>Student @UoP */}
            </Divoneright>
        </Divone>
    );
}

export default Resume;