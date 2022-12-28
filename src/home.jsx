// import propic from './assets/propic.jpeg';
// import smallpic from './assets/propic.svg';
// import qwerty from './assets/qwerty.jpeg';
// import overpass from 'fonts/overpass-desktop-fonts/overpass-bold-italic.otf';
import qwerty from './assets/qwerty.svg';
import { useState, useEffect } from 'react'
import styled from 'styled-components';
import { BrowserRouter, Router, Link, Routes, Route } from "react-router-dom";
import linkedin from './assets/icon/linkedin.png';
import email from './assets/icon/gmail.png';
import githubicon from './assets/icon/github.png';
import './all.css';


const DivOne = styled.div`
    width: 100%;
    padding: 2rem;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    /* margin: 0 auto;  */
    /* background-color: orange;   */

    
    @media (max-width: 768px) {
        flex-direction: column;
    }
 `;
const DivOneLeft = styled.div`
    width: 50%;
    display: flex;
    font-family: cursive;
    font-style: italic;
    /* font-size: xxx-large; */
    
    /* background-color: pink;   */

    img {
        height: 100%;
        width: 100%;
    }
 `;
const DivOneRight = styled.div`
    width: 50%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    font-size: 30px;
    font-family: cursive;
    font-style: italic;
    /* font-size: 40px; */
    /* background-color: green;   */

    div {
        display: flex;
        gap: 1rem;
    }
`;

const Button = styled.button`
    width: 150px;
    height: 50px;
    font-size: 21px;
    font-weight: bold;
    color: #425F57;
    background-color: white;
    border-color: #425F57;
    border-radius: 1rem;
`;

const Home = () => {
    const [icons, setIcons] = useState([
        { logo: linkedin, url: 'https://www.linkedin.com/in/clinston-antony-16560b238/' },
        { logo: email, url: 'mailto:clintusony@gmail.com' },
        { logo: githubicon, url: 'https://github.com/mrat0m/' }
    ])
    return (
        <DivOne>
            <DivOneLeft>
                <img src={qwerty} alt="" />
            </DivOneLeft>
            <DivOneRight>
                <b style={{ color: "#425F57" }}> {"<"}\{">"} Welcome! {"<"}\{">"} </b>

                <div>
                    <Link style={{ textDecoration: 'none' }} to="/about"><Button>About</Button></Link>
                    <Link style={{ textDecoration: 'none' }} to="/error404"><Button>Resume</Button></Link>
                </div>

                <i style={{ color: "#425F57" }}> {"<"}\{">"} Connect me via {"<"}\{">"} </i>

                <div>
                    {icons.map((loadicon) => {
                        // console.log(personalDetails)
                        return <a href={loadicon.url}>
                            <img src={loadicon.logo} className="smallphoto" alt="" />
                        </a>
                    })}
                </div>

            </DivOneRight>
        </DivOne>
    );
}

export default Home;