import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }
    const closeDropdown = (event) => {
        if (event.target.closest('.dropdown') === null) {
            setIsOpen(false);
        }
    }

    useEffect(() => {
        document.addEventListener('click', closeDropdown);
        return () => {
            document.addEventListener('click', closeDropdown);
        };
    }, []);

    return (
        <div className="dropdown">
            <button className="dropdown-button" onClick={toggleDropdown}>≡</button>
            <ul className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
                <Link to="name" offset={-1500} spy={true} smooth={true} duration={1500}>
                    <i class="bi bi-arrow-up-circle-fill"></i>
                </Link>
                <Link to="name" offset={-105} spy={true} smooth={true} duration={500} activeClass="active">
                    Name
                </Link>
                <Link to="about" offset={-105} spy={true} smooth={true} duration={500} activeClass="active">
                    About
                </Link>
                <Link to="experience" offset={-105} spy={true} smooth={true} duration={500} activeClass="active">
                    Experience
                </Link>
                <Link to="certificates" offset={-105} spy={true} smooth={true} duration={500} activeClass="active">
                    Certificates
                </Link>
                <Link to="about-web" offset={-105} spy={true} smooth={true} duration={500} activeClass="active">
                    About Web
                </Link>
            </ul>
        </div>
    )
}

export default Dropdown;