import React, { useState } from "react";
import logo from "../images/pdfresizer.com-pdf-crop.svg";
import { Link, useNavigate } from "react-router-dom";
import { Offcanvas, ListGroup } from "react-bootstrap";

const NavBar = () => {
    //to make background color the same as text color (clarity reasons)
    const trans =
        window.location.pathname === "/contact"
            ? "trans contact"
            : window.location.pathname === "/presentation"
            ? "trans presentation"
            : window.location.pathname === "/activite"
            ? "trans activites"
            : window.location.pathname === "/"
            ? "landingPage"
            : "";
    //to make navbar tell you where you are
    const onContact =
        window.location.pathname === "/contact"
            ? "contact"
            : "";
    const onPresentation =
            window.location.pathname === "/presentation"
            ? "presentation"
            : "";
    const onActivites =
            window.location.pathname === "/activite"
            ? "activites"
            : "";
    const onAccueil =
            window.location.pathname === "/"
            ? ""
            : "";
    const onProjets =
            window.location.pathname === "/projets"
            ? "projets"
            : "";
    //to navigate and go to the desired div in the same time
    const navigate = useNavigate();
    const handleNavClick = async () => {
        navigate("/");
        handleClose();
    };

    //to make navbar smaller after scrolling
    const handleScroll = () => {
        setScrolled(window.scrollY >= 50 ? "scrolled" : "");
    };
    window.addEventListener("scroll", handleScroll, true);
    const [scrolled, setScrolled] = useState("");

    //offcanvas show state
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div
            className={`navbar container-fluid d-flex justify-content-around align-items-center fixed-top ${scrolled} ${trans}`}
        >
            <img type="button" onClick={()=>navigate("/")} className="logo" src={logo} alt="IC" />

            <nav className="navigations d-none d-lg-flex flex-wrap justify-content-evenly">
                <a
                    className={`navigation ${onAccueil}`}
                    href="#landing"
                    onClick={handleNavClick}
                >
                    Accueil
                </a>
                <Link className={`navigation ${onPresentation}`} to="presentation">
                    Présentation
                </Link>
                <Link className={`navigation ${onActivites}`} to="activite">
                    Domaines d'Expertise
                </Link>
                <Link className={`navigation ${onProjets}`} to="projets">
                    References
                </Link>
                <Link className={`navigation ${onContact}`} to="contact">
                    Contact
                </Link>
            </nav>

            <div type="button" className="d-lg-none show-canvas-button">
                <i
                    className="bi bi-list"
                    style={{ fontSize: "65px" }}
                    onClick={handleShow}
                ></i>
            </div>
            <Offcanvas
                style={{
                    opacity: "0.9",
                    width: "80%",
                    backgroundColor: "yellow",
                    height: "100vh",
                }}
                className="offcanvas"
                show={show}
                onHide={handleClose}
            >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className="fw-bold display-6">
                        Menu
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="offcanvas-body pt-5">
                    <ListGroup
                        className="p-2 offcanvas-navigations"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            flexDirection: "column",
                            justifyContent: "space-around",
                            height: "60%",
                        }}
                    >
                        <a
                            style={{
                                textDecoration: "none",
                                fontWeight: "500",
                                fontSize: "25px",
                                color: "black",
                            }}
                            href="#landing"
                            onClick={handleNavClick}
                        >
                            Accueil
                        </a>
                        <Link
                            style={{
                                textDecoration: "none",
                                fontWeight: "500",
                                fontSize: "25px",
                                color: "black",
                            }}
                            to="/presentation"
                            onClick={handleClose}
                        >
                            Présentation
                        </Link>
                        <Link
                            style={{
                                textDecoration: "none",
                                fontWeight: "500",
                                fontSize: "25px",
                                color: "black",
                            }}
                            to="/activite"
                            onClick={handleClose}
                        >
                            Domaines d'Expertise
                        </Link>
                        <Link
                            style={{
                                textDecoration: "none",
                                fontWeight: "500",
                                fontSize: "25px",
                                color: "black",
                            }}
                            to="projets"
                            onClick={handleClose}
                        >
                            References
                        </Link>
                        <Link
                            style={{
                                textDecoration: "none",
                                fontWeight: "500",
                                fontSize: "25px",
                                color: "black",
                            }}
                            to="contact"
                            onClick={handleClose}
                        >
                            Contact
                        </Link>
                    </ListGroup>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
};

export default NavBar;
