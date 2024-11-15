import React from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from 'react-type-animation';
const myUrl = '/ahmadakbar03.github.io'

function Home() {
    return (
        <section className="container col-f outer-card f-content">
            <div className="container col-f">
                <div className="container row-f f-center">
                    <img style={{ height: '20px' }} src={`${myUrl}/asset/icons/dot-white.svg`} alt="white-dot" />
                    <h1 style={{ fontSize: '200%' }}>Welcome to My Portofolio</h1>
                </div>
                <p style={{ fontSize: '125%', color: 'yellow' }}><i>"Showcasing my journey in multimedia and web development."</i></p>
            </div>
            <div id="name" className="container row-f section f-wrap-r f-center-c">
                <div className="container col-f flex-1-combo text-sm">
                    <h1>Hello!, I'm <b style={{ color: 'yellow' }} >Ahmad Akbar</b> </h1>
                    <div className="container row-f f-center text-sm">
                        <TypeAnimation
                            sequence={[
                                "I'm a Student",
                                2000,
                                "I'm a Video Editor",
                                2000,
                                "I'm a Web Programmer",
                                2000,
                                "I'm a Front End Developer",
                                2000
                            ]}
                            deletionSpeed={50}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '2em', display: 'inline-block' }}
                            repeat={Infinity}
                        />
                    </div>
                </div>
                <div className="container col-f flex-1-combo f-center-r f-center-c">
                    <img className="img" src="https://raw.githubusercontent.com/akbarvideoeditor03/General/refs/heads/main/FotoSaya.jpg" alt="" />
                </div>
            </div>
            <div id="about" className="container row-f section">
                <div className="container col-f">
                    <div className="container row-f flex-1 f-center f-wrap">
                        <div className="container col-f flex-1-combo f-center">
                            <h2 style={{ color: 'yellow' }}>About Me</h2>
                            <div>
                                <p style={{ textAlign: 'center', fontSize: '120%', fontWeight: '500' }}>"I am Ahmad Akbar, an active undergraduate student, majoring in Information Systems, Dinamika Bangsa University. I am interested in visual science and computer science, and technology. I am interested in web development."</p>
                            </div>
                        </div>
                        <div className="container col-f flex-1-combo f-center">
                            <h2 style={{ color: 'yellow' }}>These are My Skills.</h2>
                            <p style={{ textAlign: 'center', fontSize: '125%', fontWeight: '500' }}>
                                "My skills lie in the field of multimedia and technology, particularly in website development, but still in the learning stage."
                            </p>
                            <div className="grid grid-auto-col">
                                <img style={{ height: '35px' }} src={`${myUrl}/asset/icons/DaVinci_Resolve_17_logo.svg`} alt="" />
                                <img style={{ height: '35px' }} src={`${myUrl}/asset/icons/Inkscape_Logo.svg`} alt="" />
                                <img style={{ height: '35px' }} src={`${myUrl}/asset/icons/Figma.svg`} alt="" />
                                <img style={{ height: '35px' }} src={`${myUrl}/asset/icons/HTML5 Logo.svg`} alt="" />
                                <img style={{ height: '35px' }} src={`${myUrl}/asset/icons/CSS3_logo.svg`} alt="" />
                                <img style={{ height: '35px' }} src={`${myUrl}/asset/icons/Unofficial_JavaScript_logo_2.svg`} alt="" />
                                <img style={{ height: '35px' }} src={`${myUrl}/asset/icons/logos--supabase-icon.svg`} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="container col-f flex-1 f-center">
                        <div className="container row-f flex-1">
                            <div className="container col-f f-center-c">
                                <p>Check out my social media.</p>
                                <div style={{ height: '50px', width: '100%', maxWidth: '300px' }} className="container row-f">
                                    <Link target="blank" to='' title="GitHub : akbarvideoeditor03">
                                        <img className="img-icons" src={`${myUrl}/asset/icons/github.svg`} alt="" />
                                    </Link>
                                    <Link target="blank" to='' title="Instagram : ahmadakbar03">
                                        <img className="img-icons" src={`${myUrl}/asset/icons/instagram.svg`} alt="" />
                                    </Link>
                                    <Link target="blank" to='https://www.youtube.com/@ahmadakbar03' title="YouTube : Media Cara">
                                        <img className="img-icons" src={`${myUrl}/asset/icons/youtube.svg`} alt="" />
                                    </Link>
                                    <Link target="blank" to='https://mail.google.com/mail/u/1/#inbox?compose=new' title="akbarvideoeditor03">
                                        <img className="img-icons" src={`${myUrl}/asset/icons/gmail.svg`} alt="" />
                                    </Link>
                                    <Link target="blank" to='https://www.linkedin.com/in/ahmad-akbar-0a533b275/'>
                                        <img className="img-icons" src={`${myUrl}/asset/icons/linkedin.svg`} alt="" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="experience" className="container swap section">
                <div className="container col-f flex-1">
                    <h2>These are</h2>
                    <p style={{ fontWeight: 'bold', fontSize: '250%', color: 'yellow' }} >My Experiences</p>
                </div>
                <div className="container col-f flex-1">
                    <ol style={{ marginLeft: '1rem' }} type="1">
                        <li className="lb">
                            <section className="container col-f">
                                <p>
                                    I worked for over 2 years as a video editor at BuanaTV (Bungo's Online Media), teaching internship participants, and participating in various media programs.
                                </p>
                                <p><img style={{ height: '12px' }} src={`${myUrl}/asset/icons/dot-white.svg`} alt="white-dot" /> Since January 2020 - December 2021</p>
                                <div className="grid grid-col-3 grid-col-2 grid-col-1">
                                    <div className="container col-f f-center-c card">
                                        <img className="img-s" src={`${myUrl}/asset/pictures/FB_IMG_1728216712736.jpg`} alt="" />
                                        <p>Edited Video</p>
                                    </div>
                                    <div className="container col-f f-center-c card">
                                        <img className="img-s" src={`${myUrl}/asset/pictures/FB_IMG_1728216668165.jpg`} alt="" />
                                        <p>BTS Video Content Program</p>
                                    </div>
                                    <div className="container col-f f-center-c card">
                                        <img className="img-s" src={`${myUrl}/asset/pictures/FB_IMG_1728216616921.jpg`} alt="" />
                                        <p>Taught Multimedia</p> 
                                    </div>
                                    <div className="container col-f f-center-c card">
                                        <img className="img-s" src={`${myUrl}/asset/pictures/FB_IMG_1728216908010.jpg`} alt="" />
                                        <p>BTS Video Content Program</p>
                                    </div>
                                    <div className="container col-f f-center-c card">
                                        <img className="img-s" src={`${myUrl}/asset/pictures/FB_IMG_1728216820354.jpg`} alt="" />
                                        <p>BTS Video Content Program</p>
                                    </div>
                                </div>
                            </section>
                        </li>
                        <li>
                            <section className="container col-f">
                                <p>
                                    Through the Kampus Merdeka program, I successfully completed a self-study in Front-End and Back-End Web Development at Dicoding Academy for approximately 5 months.
                                </p>
                                <p><img style={{ height: '12px' }} src={`${myUrl}/asset/icons/dot-white.svg`} alt="white-dot" /> Since February 2024 - June 2024</p>
                                <div className="grid grid-col-3 grid-col-2 grid-col-1">
                                    <div className="container col-f f-center-c card">
                                        <img className="img-s" src={`${myUrl}/asset/pictures/vlcsnap-2024-11-13-10h21m36s127.png`} alt="" />
                                        <p>Study Group Session</p>
                                    </div>
                                    <div className="container col-f f-center-c card">
                                        <img className="img-s" src={`${myUrl}/asset/pictures/vlcsnap-2024-11-13-10h22m33s358.png`} alt="" />
                                        <p>ILT Soft Skil Session</p>
                                    </div>
                                    <div className="container col-f f-center-c card">
                                        <img className="img-s" src={`${myUrl}/asset/pictures/vlcsnap-2024-11-13-10h21m47s074.png`} alt="" />
                                        <p>ILT Tech Session</p>
                                    </div>
                                    <div className="container col-f f-center-c card">
                                        <img className="img-s" src={`${myUrl}/asset/pictures/vlcsnap-2024-11-13-10h22m02s348.png`} alt="" />
                                        <p>Weekly Consultation</p>
                                    </div>
                                </div>
                            </section>
                        </li>
                    </ol>
                </div>
            </div>
            <div style={{ textAlign: 'center' }} id="certificates" className="container col-f f-center-c section">
                <div className="container col-f">
                    <h2>These are</h2>
                    <p style={{ fontWeight: 'bold', fontSize: '250%', color: 'yellow' }} >My Certificates</p>
                </div>
                <div className="container col-f">
                    <section style={{ gap: '1rem' }} className="grid grid-col-1 grid-col-2 grid-col-3">
                        <div className="container col-f f-between card">
                            <img className="img-card" src="https://media.licdn.com/dms/image/v2/D4E22AQHCV2SySjf6rA/feedshare-shrink_800/feedshare-shrink_800/0/1716854896364?e=1734566400&v=beta&t=cDr949glANHITPP9haSd1YQKZNjb5tr-7OV8Tx1jEh4" alt="" />
                            <p>Certificate of Completion for Logic 101 Program Class</p>
                            <Link target="blank" to='https://www.linkedin.com/posts/ahmad-akbar-0a533b275_alhamdulillah-selama-4-bulan-terakhir-ini-activity-7201054576400027648-_6le?utm_source=share&utm_medium=member_desktop'><i class="bi bi-linkedin"></i> See other certificates</Link>
                        </div>
                        <div className="container col-f f-between card">
                            <img className="img-card" src="https://media.licdn.com/dms/image/v2/D4E22AQFtOJfaMWYrfw/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1720758628460?e=1734566400&v=beta&t=KX75ytRkbftUZ5w8OLVYoFgxi5o9_gDbtQ2QDTwNzoc" alt="" />
                            <p>Certificate of Completion for Independent Study at Dicoding Academy</p>
                        </div>
                        <div className="container col-f f-between card">
                            <img className="img-card" src="https://media.licdn.com/dms/image/v2/D4E22AQHtxbUDCBwCIw/feedshare-shrink_1280/feedshare-shrink_1280/0/1720758624871?e=1734566400&v=beta&t=uKBKR6lc9dMdmE8WsyRQO0oV0qawDpH2K-hmOorrlPU" alt="" />
                            <p>Certificate of Participation in Independent Study - Kampus Merdeka</p>
                        </div>
                    </section>
                </div>
            </div>
            <div style={{ textAlign: 'center' }} id="about-web" className="container col-f f-center-c section-footer-home">
                <div className="container col-f">
                    <h2>About</h2>
                    <p style={{ fontWeight: 'bold', fontSize: '250%', color: 'yellow' }} >My Portofolio Website</p>
                </div>
                <div className="container col-f">
                    <p>
                        Welcome to My Portfolio - Ahmad Akbar, and thank you for visiting this website. Here, I share a description of my journey over the past years, including my work experiences and the learning process I've gone through. This site showcases the various projects, processes, and outcomes I've completed. You will find examples of my work and learnings in multimedia creation and web development, reflecting my skills and dedication to these fields.
                    </p>
                </div>
                <p style={{ fontWeight: 'bold' }}>Thank you for visiting.</p>
            </div>
        </section>
    )
}

export default Home;