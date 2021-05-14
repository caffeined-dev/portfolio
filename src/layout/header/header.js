import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import '../../css/override.scss';

export default function Header() {

    let [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        function checkScroll() {
            let sTop = window.scrollY;
            setScrolling(sTop > 0);
        }
        window.addEventListener("scroll", checkScroll);
        return () => window.removeEventListener("scroll", checkScroll);
    }, [])


    return (
        <div className={`${scrolling ? "header-scrolled" : "header"} d-flex justify-content-center align-items-center transition`}>
            <div className="header-side d-flex justify-content-end align-items-center">
                <Link className="link-override header-item mr-4 ml-2" to='/'>About</Link>
                <Link className="link-override header-item mr-3" to='/projects'>Projects</Link>
            </div>
            <div className={`${scrolling ? "header-middle-scrolled" : "header-middle"} d-flex justify-content-center align-items-center`}>
                <img src="./catheadlogo.png" alt="headlogo" className={`${scrolling ? "header-logo-scrolled" : "header-logo"} transition`} />
            </div>
            <div className="header-side d-flex justify-content-right align-items-center">
                <Link className="link-override header-item ml-3" to='/games'>Games</Link>
                <Link className="link-override header-item ml-4 mr-2" to='/contact'>Contact</Link>
            </div>
        </div>
    );
}