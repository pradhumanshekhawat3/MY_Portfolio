import React from 'react'
import Typical from 'react-typical'
import './Profile.css'
export default function () {
    return (
        <div className='profile-container'>
            <div className="profile-parent">
                <div className="profile-detail">
                    <div className="colz">
                        <div className="colzicon">
                            <a href="https://www.facebook.com/pradhuman.shekhawat.96">
                                <i className='fa fa-facebook square'></i>
                            </a>
                            <a href="">
                                <i className='fa fa-instagram'></i>
                            </a>
                            <a href="#">
                                <i className='fa fa-google-plus'></i>
                            </a>
                            <a href="https://github.com/pradhumanshekhawat3">
                                <i className='fa fa-github'></i>
                            </a>
                        </div>


                    </div>
                    <div className="profilename">
                        <span className="primarytext">
                            {" "}
                            Hello, I'M <span className="higlightedtext">Pradhuman</span>
                        </span>
                    </div>
                    <div className="profilerole">
                        <span className="primarytext">
                            {" "}
                            <h1>
                                {" "}
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        "Enthusiastic Dev",
                                        2000,
                                        "Web Developer",
                                        2000,
                                        "MERN stack Dev",
                                        2000,
                                        "React Developer",
                                        2000,
                                    ]}
                                />
                            </h1>
                            <span className="profiletagline">
                                Knack of buliding application with front and back end operations
                            </span>
                        </span>
                    </div>
                    <div className="profileoption">
                        <button className='btn primary-btn'>
                            {""}
                            Contact Me{" "}
                        </button>
                        <a href="My Resume.pdf" download='My Resume.pdf'>
                            <button className='btn highlighted-btn'> Get Resume</button>
                        </a>

                    </div>
                </div>
                <div className="profilepic">
                    <div className='profilepic-background'>

                    </div>
                </div>
            </div>
        </div>
    )
}
