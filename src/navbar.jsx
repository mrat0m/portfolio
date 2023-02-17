// import propic from './assets/propic.jpeg';
import propic from './assets/propic.svg';
import styled from 'styled-components';
import { BrowserRouter, Router, Link, Routes, Route } from "react-router-dom";
import './all.css';
// import { Button } from '@mui/material';

const Heading = styled.h1`
    color: #06283D  ;
    /* background-color: #474747; */
    font-family: cursive;
    font-style: italic;
    font-size: 22px;
`;
const Navone = styled.nav`
    padding: 1rem 3rem;
    display: flex;
    align-items: center;
    max-width:  100%;
    justify-content: space-between;
    /* background-color: grey;    */
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 0 0 1rem 1rem;  
`;
const LinkLeft = styled.div`
`;
const LinkRight = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    
`;
const Button = styled.button`
    width: 130px;
    height: 30px;
    color: #DFF6FF;
    border-radius: 1rem;  
    border-width: 0;
    /* border-color: #DFF6FF; */
    background-color: #06283D  ;
`;
const Navbar = () => {
    // const name = ' Clinston_Antony_Parappillil_Sony ';
    const name = ' Clinston_Antony_ ';

    return (
        // <div className="nav">
        //     <img src={logo} className="logo" alt="" />

        // </div>
        <Navone>
            <LinkLeft>
                <Link style={{ textDecoration: 'none' }} to="/"> <Heading>{"<"}\{">"}{name}{"<"}\{">"}</Heading> </Link>
            </LinkLeft>
            <LinkRight>
                <Link style={{ textDecoration: 'none' }} to="/about"><Button>About</Button></Link>
                <Link style={{ textDecoration: 'none' }} to="/contact"><Button>Contact</Button></Link>
                {/* <Link style={{ textDecoration: 'none' }} to="/error404"><Button>Resume</Button></Link> */}
                {/* <Link style={{ textDecoration: 'none' }} to="/resume"><Button>Resume</Button></Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
            </LinkRight>
            {/* <LinkRight>
                <Link style={{ textDecoration: 'none' }} to="/error404"><Button>Resume</Button></Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </LinkRight> */}
            {/* <Link to="/register">Register</Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
        </Navone>
    );
}

export default Navbar;