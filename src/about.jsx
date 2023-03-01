// import propic from './assets/propic.jpeg';
// import smallpic from './assets/propic.svg';
// import qwerty from './assets/qwerty.jpeg';
// import overpass from 'fonts/overpass-desktop-fonts/overpass-bold-italic.otf';
// import MovingText from 'react-moving-text';
// import { BrowserRouter, Router, Link, Routes, Route } from "react-router-dom";
import styled from 'styled-components';
import Footer from './footer';
import Contact from './contact';
import './all.css';
import waving from './assets/icon/waving.png';
import { GB, IN } from 'country-flag-icons/react/3x2';
import linux from './assets/logo/linux.png';
import react from './assets/logo/react.png';
import nodejs from './assets/logo/nodejs.png';
import js from './assets/logo/js.png';
import html from './assets/logo/html.png';
import css from './assets/logo/css.png';
import mui from './assets/logo/mui.png';
import rfh from './assets/logo/rfh.png';
import moment from './assets/logo/moment.png';
import styledComponents from './assets/logo/styledComponents.png';
import bootstrap from './assets/logo/bootstrap.png';
import python from './assets/logo/python.png';
import php from './assets/logo/php.png';
import phpmyadmin from './assets/logo/phpmyadmin.png';
import mysql from './assets/logo/mysql.png';
import c from './assets/logo/c.png';
import vscode from './assets/logo/vscode.png';
import github from './assets/logo/github.png';
import word from './assets/logo/word.png';
import netlify from './assets/logo/netlify.png';
import powerpoint from './assets/logo/powerpoint.png';
// import excel from './assets/logo/excel.png';
import androidstudio from './assets/logo/android-studio.png';
import vmware from './assets/logo/vmware.png';
import { yellow } from '@mui/material/colors';
//footer
// import linkedin from './assets/icon/linkedin_black.svg';
// import email from './assets/icon/mail_black.svg';
// import githubicon from './assets/icon/github_black.svg';



const Divone = styled.div`
    margin: 25px; 
    padding: 2rem;
    box-sizing: border-box;
    font-style: italic;
    font-size: 40px;
    color: #06283D  ;
`;

const LogoContainer = styled.div`
    margin-left: 80px;
    margin-right: 50px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
`;

const Logo = styled.div`
    height: 140px;
    width: 153px;
    padding: 1rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
    transition: .5s ease;
    transition-delay: .5s;
    border-radius: 1rem;
    background-color: #fff;
    /* box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; */
    box-shadow: #829ea9   5px 1px 5px 0px;

    &:hover {
        height: 180px;
        img {
            transition-delay: .5s;
            transition: .5s ease;
            /* transition-delay: .5s; */
            scale: 1.09;
            transform: rotate(-6deg);
        }
    }

    img {
        height: 145px;
        width: 150px;
    }

    span {
        height: 40px;
        margin-top: .5rem;
        font-size: 28px;
        font-family: "Helvetica Neue",Helvetica;
    }
`;
  
const About = () => {
    return <>
        <Divone>
            hi, I'm Clinston Antony,
            {/* <img src={waving} alt="" style={{margin: '0rem 0rem 0rem 1rem'}}/>  */}
            {/* I'm Clinston Antony, */}

            <div className="entry">
                <h3 className='entryHeading'>MSc Cyber Security {"&"} Forensic Information Technology <i> [2023-Present] *</i></h3>
                student @ Univeristy of Portsmouth <GB title="United Kingdom" className="icon" />
                <br />
                {/* <b><u>Projects</u> (0)</b>
                <div className="projects">
                    *No Projects*
                </div> */}
            </div>
            <div className="entry">
                <h3 className='entryHeading'>Bachelor's in Computer Application <i> [2019-2022] </i></h3>
                graduated from Rajagiri College of Management & Applied Sciences(RCMAS) <IN title="India" className="icon" />
                <br />
                <b>
                    <u>Projects</u> (2)</b>
                {/* <b><u>Projects</u> (2)</b> */}
                <div className="projects">
                    1.Online Car Parking - php,MySQL
                    <br />
                    2.Cargo Service Management - python,MySQL
                </div>
            </div>
            <div className="entry">
                <h3 className='entryHeading'>St.Augustine's HSS <IN title="India" className="icon" /> <i> [2017-2019] </i></h3>
                Higher Secondary School (+2)
            </div>
            <div className="entry">
                <h3 className='entryHeading'>St.Aloysius Convent ISC School <i> [2005-2017] </i> <IN title="India" className="icon" /></h3>
                High School(ICSE)
            </div>
            <h1 ><hr style={{ backgroundColor: '#06283D  ', height: 5 }} /></h1>
            <h3 style={{ margin: '3rem 25rem' }} className='entryHeading'>Technical proficiency in</h3>
            {/* <h3 style={{ margin: '3rem 5rem' }} className='entryHeading'>Technical proficiency/ Skills</h3> */}
            <LogoContainer>
                <Logo>
                    <img src={linux} />
                    <span>Linux</span>
                </Logo>
                <Logo>
                    <img src={react} />
                    <span>React JS</span>
                </Logo>
                <Logo>
                    <img src={nodejs} />
                    <span>Node JS</span>
                </Logo>
                <Logo>
                    <img src={js} />
                    <span>Java Script</span>
                </Logo>
                <Logo>
                    <img src={html} />
                    <span>HTML</span>
                    {/* <marquee>
                        <span>Hypertext Markup Language</span>
                    </marquee> */}
                </Logo>
                <Logo>
                    <img src={css} />
                    <span>CSS</span>
                    {/* <marquee>
                        <span>Cascading Style Sheet</span>
                    </marquee> */}
                </Logo>
                <Logo>
                    <img src={mui} />
                    <span>Material UI</span>
                </Logo>
                <Logo>
                    <img src={rfh} />
                    <span>React Hook</span>
                    {/* <marquee>
                    <span>React Form Hooks</span>
                    </marquee> */}
                </Logo>
                <Logo>
                    <img src={moment} />
                    <span>Moment JS</span>
                </Logo>
                <Logo>
                    <img src={styledComponents} />
                    {/* <marquee>
                    <span>Styled Components</span>
                    </marquee> */}
                </Logo>
                <Logo>
                    <img src={bootstrap} />
                    <span>Bootstrap</span>
                </Logo>
                <Logo>
                    <img src={python} />
                    <span>Python 3</span>
                </Logo>
                <Logo>
                    <img src={php} />
                    <span>PHP</span>
                </Logo>
                <Logo>
                    <img src={phpmyadmin} />
                    {/* <span>PhpMyAdmin</span> */}
                </Logo>
                <Logo>
                    <img src={mysql} />
                    <span>MySQL</span>
                </Logo>
                <Logo>
                    <img src={c} />
                    <span>C/C++</span>
                </Logo>
                <Logo>
                    <img src={vscode} />
                    <span>VSCode</span>
                </Logo>
                <Logo>
                    <img src={netlify} />
                    <span>Netlify</span>
                </Logo>
                <Logo>
                    <img src={github} />
                    <span>Github</span>
                </Logo>
                <Logo>
                    <img src={word} />
                    <span>MS Word</span>
                </Logo>
                <Logo>
                    <img src={powerpoint} />
                    <span>Powerpoint</span>
                </Logo>
                <Logo>
                    <img src={androidstudio} />
                    <span>AndroidStudio</span>
                    {/* <marquee>
                    <span>Android Studio</span>
                    </marquee> */}
                </Logo>
                <Logo>
                    <img src={vmware} />
                    <span>VMware</span>
                </Logo>
            </LogoContainer>

            <h1 ><hr style={{ backgroundColor: '#06283D  ', height: 5 }} /></h1>
            <Contact></Contact>
            <br />
        </Divone>
        <Footer></Footer>

    </>
    
}

export default About;