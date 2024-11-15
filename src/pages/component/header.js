import React from "react";
import { Link } from "react-scroll";
import Dropdown from "./dropdown";

function WebHeader() {
    return (
        <nav className="container row-f f-wrap-r nav">
            <section className="container row-f f-between flex-1 nav-small">
                <div className="container row-f flex-1">
                    <p
                        className="flex-1"
                        style={{ fontSize: "150%", fontWeight: "bold" }}
                    >
                        Hi, there!
                    </p>
                </div>
                <Dropdown></Dropdown>
            </section>
            <section className="container row-f f-between flex-1 nav-large nav-large-p">
                <div className="container row-f flex-1">
                    <p
                        className="flex-1"
                        style={{ fontSize: "150%", fontWeight: "bold" }}
                    >
                        Hi, there!
                    </p>
                </div>
                <Link to="name" offset={-1500} spy={true} smooth={true} duration={1500}>
                    <i class="bi bi-arrow-up-circle-fill"></i>
                </Link>
                <Link
                    to="name"
                    offset={-105}
                    spy={true}
                    smooth={true}
                    duration={500}
                    activeClass="active"
                >
                    Name
                </Link>
                <Link
                    to="about"
                    offset={-105}
                    spy={true}
                    smooth={true}
                    duration={500}
                    activeClass="active"
                >
                    About
                </Link>
                <Link
                    to="experience"
                    offset={-105}
                    spy={true}
                    smooth={true}
                    duration={500}
                    activeClass="active"
                >
                    Experience
                </Link>
                <Link
                    to="certificates"
                    offset={-105}
                    spy={true}
                    smooth={true}
                    duration={500}
                    activeClass="active"
                >
                    Certificates
                </Link>
                <Link
                    to="about-web"
                    offset={-105}
                    spy={true}
                    smooth={true}
                    duration={500}
                    activeClass="active"
                >
                    About Web
                </Link>
            </section>
        </nav>
    );
}

export default WebHeader;
