// import propic from './assets/propic.jpeg';
import smallpic from './assets/propic.svg';
// import qwerty from './assets/qwerty.jpeg';
// import overpass from 'fonts/overpass-desktop-fonts/overpass-bold-italic.otf';
import qwerty from './assets/qwerty.svg';
import { useState, useEffect } from 'react'
import styled from 'styled-components';
import { BrowserRouter, Router, Link, Routes, Route } from "react-router-dom";
import linkedin from './assets/icon/linkedin_black.svg';
import email from './assets/icon/mail_black.svg';
import githubicon from './assets/icon/github_black.svg';
import trial404 from "./assets/icon/ErrorImage/trial404.jpg";
import './all.css';

const DivOne = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    /* margin: 0 auto;  */
    /* background-color: orange;   */

    img {
        height: 600px;
        width: 600px;
        /* #007dfe */
    }
    
    @media (max-width: 768px) {
        flex-direction: column;
    }
 `;
// const DivOneLeft = styled.div`
//     width: 50%;
//     display: flex;
//     font-family: cursive;
//     font-style: italic;
//     /* font-size: xxx-large; */
    
//     /* background-color: pink;   */

//     img {
//         height: 100%;
//         width: 100%;
//     }
//  `;
// const DivOneRight = styled.div`
//     width: 50%;
//     padding: 1rem;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     gap: 3rem;
//     font-size: 30px;
//     /* font-style: italic; */
//     /* font-size: 40px; */
//     /* background-color: green;   */

//     div {
//         display: flex;
//         gap: 1rem;
//     }
//     .sss {
//         display: flex;
//         flex-direction: column;
//         gap: 1rem;
//         align-items: center;
//     }
// `;


// const Button = styled.button`
//     width: 150px;
//     height: 50px;
//     font-size: 21px;
//     font-weight: bold;
//     color: #425F57;
//     background-color: white;
//     border-color: #425F57;
//     border-radius: 1rem;
// `;


const Error404 = () => {
    // const [icons, setIcons] = useState([
    //     { logo: linkedin, url: 'https://www.linkedin.com/in/clinston-antony-16560b238/' },
    //     { logo: email, url: 'mailto:clintusony@gmail.com' },
    //     { logo: githubicon, url: 'https://github.com/mrat0m/' }
    // ])
    return (
        <DivOne>
            <img src={trial404} className="photo" alt="" />
            {/* <DivOneLeft>
                <img src={trial404} className="qwerty" alt="" />
            </DivOneLeft> */}
            {/* <DivOneRight>
                <div className='sss'>
                <b style={{ color: "#425F57" }}> {"<"}\{">"} ERROR 404 </b>
                <b style={{ color: "#425F57" }}> PAGE NOT FOUND {"<"}\{">"} </b>
                </div>
                <div>
                    <Link style={{ textDecoration: 'none' }} to="/"><Button> Redirect </Button></Link>
                </div>  
            </DivOneRight> */}
        </DivOne>
    );
}

export default Error404;