import { useEffect } from 'react';
import { BrowserRouter, Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import drawing from './assets/qwerty.svg';
import './App.css';

const github = 'https://github.com/mrat0m';
const linkedin = 'https://www.linkedin.com/in/clinston-antony-parappillil-sony-16560b238/';
const email = 'clintusony@gmail.com';
const projects = [
  ['Intrusion detection and SIEM', 'MSc dissertation', 'I compared alerts from Suricata and Snort and used Elasticsearch dashboards to investigate network traffic.'],
  ['Online Car Parking System', 'PHP · MySQL', 'My undergraduate project for managing car parking online.', github + '/carparking'],
  ['Cargo Service Management', 'Python · MySQL', 'A desktop application I built to manage cargo service records.', github + '/Py-Cargo-tkinter']
];
const education = [
  ['2023–2024', 'MSc Cyber Security and Forensic Information Technology', 'University of Portsmouth, UK'],
  ['2019–2022', 'Bachelor of Computer Applications', 'Rajagiri College of Management and Applied Sciences, India'],
  ['2017–2019', 'Higher Secondary Education', 'St. Augustine’s HSS, India'],
  ['2005–2017', 'Indian Certificate of Secondary Education', 'St. Aloysius Convent ISC School, India']
];
function Projects() {
  return <section className="section"><h2>Selected projects</h2><div className="projects">{projects.map(([title, tools, summary, url]) =>
    <article key={title}><small>{tools}</small><h3>{title}</h3><p>{summary}</p>{url && <a href={url}>View source ↗</a>}</article>)}</div></section>;
}
function Home() {
  return <><section className="hero"><div><small>Cybersecurity · Software development</small><h1>Clinston<br/>Antony<span>.</span></h1><p>I study how threats show up in network traffic and build software that helps people in their daily work.</p><div className="actions"><Link className="button" to="/about">About me →</Link><Link to="/resume">View my CV</Link></div></div><figure><img src={drawing} alt="Laptop illustration from my original portfolio"/></figure></section><Projects/></>;
}
function Education() {
  return <section className="section"><h2>Education</h2>{education.map(([years, course, school]) => <article className="row" key={course}><small>{years}</small><div><h3>{course}</h3><p>{school}</p></div></article>)}</section>;
}
function Skills() {
  return <section className="section"><h2>Technical skills</h2><dl>{Object.entries({
    'Security and systems':'Suricata, Snort, Wireshark, Elasticsearch, Linux and VMware',
    'Programming and data':'Python, PHP, C, C++, JavaScript, MySQL and phpMyAdmin',
    'Web development':'React, Node.js, HTML, CSS, Material UI, React Hook Form, Moment.js, styled-components and Bootstrap',
    'Tools':'GitHub, VS Code, Android Studio, Netlify, Word and PowerPoint'
  }).map(([group, items]) => <div className="row" key={group}><dt>{group}</dt><dd>{items}</dd></div>)}</dl></section>;
}
function About() {
  return <><h1 className="page-title">About me<span>.</span></h1><p className="intro">I’m Clinston Antony Parappillil Sony. I grew up in Kerala, studied computer applications at Rajagiri and moved to Portsmouth for my master’s degree. My interests span network security, digital forensics and web development.</p><Education/><Skills/></>;
}
function Resume() {
  return <><h1 className="page-title">Curriculum vitae<span>.</span></h1><h2>Clinston Antony Parappillil Sony</h2><p>Cybersecurity graduate · Portsmouth, UK</p><button onClick={() => window.print()}>Print or save CV as PDF</button><section className="section"><h2>Experience</h2><h3>Team Leader · KFC Pompey Centre</h3><p>I coordinate shifts, coach team members and use store performance data to identify improvements.</p></section><Education/><Projects/><Skills/><p><a href={'mailto:' + email}>{email}</a></p></>;
}
function Contact() {
  return <><h1 className="page-title">Get in touch<span>.</span></h1><p className="intro">For cybersecurity roles, IT support opportunities or questions about my projects, reach me here.</p><div className="contact"><a href={'mailto:' + email}>{email} ↗</a><a href={linkedin}>LinkedIn ↗</a><a href={github}>GitHub ↗</a></div></>;
}
function Layout() {
  const { pathname } = useLocation();
  useEffect(() => {
    const title = {'/':'Portfolio','/about':'About','/resume':'CV','/contact':'Contact'}[pathname] || 'Page not found';
    document.title = title + ' | Clinston Antony';
    window.scrollTo(0, 0);
  }, [pathname]);
  return <><a className="skip" href="#content">Skip to content</a><header><Link className="brand" to="/">Clinston Antony<span>_</span></Link><nav aria-label="Main navigation">{[['/','Home'],['/about','About'],['/resume','CV'],['/contact','Contact']].map(([url,label]) => <NavLink end key={url} to={url}>{label}</NavLink>)}</nav></header><main id="content"><Routes><Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/><Route path="/resume" element={<Resume/>}/><Route path="/contact" element={<Contact/>}/><Route path="*" element={<section><h1>Page not found</h1><Link to="/">Return home</Link></section>}/></Routes></main><footer><span>Clinston Antony</span><div><a href={github}>GitHub ↗</a><a href={linkedin}>LinkedIn ↗</a><a href={'mailto:' + email}>Email ↗</a></div></footer></>;
}
export default function App() {
  return <BrowserRouter><Layout/></BrowserRouter>;
}
