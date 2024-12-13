import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer-basic container-fluid">
            <footer className="footer d-flex justify-content-around align-items-center flex-wrap flex-sm-nowrap container-xl">
                <div className="social">
                    <i className="btn btn-lg bi bi-linkedin"></i>
                    <i className="btn btn-lg bi bi-skype"></i>
                    <i className=" btn btn-lg bi bi-facebook"></i>
                    <i className="btn btn-lg bi bi-twitter"></i>
                    <i className="btn btn-lg bi bi-instagram"></i>
                </div>
                <ul className="list-inline ">
                    <li className="btn list-inline-item">
                        <Link to="/" className="link">
                            Acceuil
                        </Link>
                    </li>

                    <li className="btn list-inline-item">
                        <Link to="/presentation" className="link">
                            Presentation
                        </Link>
                    </li>

                    <li className="btn list-inline-item">
                        <Link to="/activite" className="link">
                            Domaines d'expertise
                        </Link>
                    </li>

                    <li className="btn list-inline-item">
                        <Link to="/projets" className="link">
                            References
                        </Link>
                    </li>

                    <li className="btn list-inline-item">
                        <Link to="/contact" className="link">
                            Contact
                        </Link>
                    </li>
                </ul>
                <div className="copyright-wrapper ">
                    <p className="copyright">Oussama Habibi © 2022</p>
                    <p className="copyright">
                        Website made by{" "}
                        <a
                            className="link00"
                            style={{
                                textDecoration: "none",
                                fontWeight: "bold",
                                color: "black",
                            }}
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://www.linkedin.com/in/rayenlabidi-full-stack-javascript-developer"
                        >
                            Rayen Labidi{" "}
                            <i className="bi bi-box-arrow-up-right"></i>
                        </a>
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
