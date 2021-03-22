
import React from 'react';
import {Link} from 'react-router-dom';
// import {useEffect, useState} from 'react';
import './Header.css'
import me from '../../assets/img/me.jpeg'

interface HeaderProps {
    name: string;
    profession: string;

}

const Header: React.FC<HeaderProps> = ({name, profession}) => {
    return (
        <section>
        <header id="header">
            <nav className="nav">
                <div className="header-logo">
                    <a href="/index.html" className="header-image">
                        <img src={me} alt="person img" className="me__image"/>
                    </a>
                    <div className="header-text">
                        <Link to='/home' >
                        <a className="logo">
                            {name}
                        </a>
                        </Link> 
                        {/* <a className="logo" href="/index.html">
                            {name}
                        </a> */}
                        <p className="header-subtitle">{profession}</p>
                    </div>
                </div>
                <div className="nav-menu">
                    <ul className="nav-menu__list">
                    <li className="nav-menu__item">
                            <Link to='/about' >About</Link> </li>
                    <li className="nav-menu__item">
                        <Link to='/projects' >Projects</Link> </li>
                    <li className="nav-menu__item">
                        <Link to='/blog' >Blog</Link> </li>   
                    <li className="nav-menu__item">
                        <Link to='/contact' >Contact</Link> </li>   
                        {/* <li className="nav-menu__item">
                            <a  href="/about.html">About </a> </li>
                        <li className="nav-menu__item">
                            <a  href="projects.html">Projects</a></li>
                        <li className="nav-menu__item">
                            <a  href="/blog.html">Blog</a></li>
                        <li className="nav-menu__item">
                            <a  href="/contact.html">Contact</a></li> */}
                        <div className="menu-btn">
                            <div className="menu-btn__burger"></div>
                        </div>
                    </ul>
                </div>
            </nav>
        </header>
    </section>
    );
};


export default Header;