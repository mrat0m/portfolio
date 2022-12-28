import { useState, useEffect } from 'react'
import styled from 'styled-components';
import linkedin from './assets/icon/linkedin.png';
import email from './assets/icon/gmail.png';
import githubicon from './assets/icon/github.png';

const Divfooter = styled.div`
  background-color: #425F57;
  /* padding: 0.2rem; */
  padding: 1rem 0rem 0.5rem ;
  gap: 1rem;
  display: flex;
  color: #CFFF8D;
  justify-content: center;
`;

const Footer = () => {
    const [icons, setIcons] = useState([
        { logo: linkedin, url: 'https://www.linkedin.com/in/clinston-antony-16560b238/' },
        { logo: email, url: 'mailto:clintusony@gmail.com' },
        { logo: githubicon, url: 'https://github.com/mrat0m/' }
    ])

    return (
        <Divfooter>
            {/* {JSON.stringify(blog)} */}
            {icons.map((loadicon) => {
                // console.log(personalDetails)
                return <a href={loadicon.url}>
                    <img src={loadicon.logo} className="icon" alt="" />
                </a>
            })}
        </Divfooter>
    );
}

export default Footer;