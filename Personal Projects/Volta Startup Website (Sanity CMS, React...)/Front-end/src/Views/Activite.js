import React from "react";
import { useEffect } from "react";
import { Carousel, Image } from "react-bootstrap";
import Img from "../images/image1.jpg";
import Img2 from "../images/image2.jpg";
import Img3 from "../images/image3.jpg";
import Img4 from "../images/image4.jpg";
import Img5 from "../images/image5.jpg";
import Img6 from "../images/image6.jpg";
import Img7 from "../images/image7.jpg";
import Img8 from "../images/image8.jpg";
import Img9 from "../images/image9.png";
import Img10 from "../images/image10.jpg";
import Img11 from "../images/image11.jpg";
import Img12 from "../images/image12.jpg";
import Img13 from "../images/image13.png";
import Img14 from "../images/image14.jpg";

const Activite = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="activite-wrapper container-fluid">
            <div className="row row1">
                <div className="col">
                    <div className="Container">
                        <div className="Carousel-wrapper">
                            <Carousel fade className="Carousel">
                                <Carousel.Item>
                                    <Image
                                        roundedCircle
                                        className="d-block w-100"
                                        src={Img}
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image
                                        roundedCircle
                                        className="d-block w-100"
                                        src={Img2}
                                        alt="Second slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image
                                        roundedCircle
                                        className="d-block w-100"
                                        src={Img3}
                                        alt="Second slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </div>
                        <ul className="activite-text py-4 px-5 rounded">
                            <li className="lead fst-italic">
                            Plan-CFO+CFA- Implantation équipements. 
                            </li>
                            <li className="lead fst-italic">Plan-CFO+CFA- Incorporation équipements.</li>
                            <li className="lead fst-italic">
                            Plan-CFO+CFA- cheminement et réservation.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row row2">
                <div className="col">
                    <div className="Container Container2">
                    <ul className="activite-text py-4 px-5 rounded">
                            <li className="lead fst-italic">
                            Plan-CFO-Distribution éclairage +BAES. 
                            </li>
                            <li className="lead fst-italic">Plan-CFO-Distribution PC-FM.</li>
                            <li className="lead fst-italic">
                            Plan-CFO-Schéma unifilaire-tableau électrique. 
                            </li>
                        </ul>
                        <div className="Carousel-wrapper">
                            <Carousel fade className="Carousel">
                                <Carousel.Item>
                                    <Image
                                        roundedCircle
                                        className="d-block w-100"
                                        src={Img4}
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image
                                        roundedCircle
                                        className="d-block w-100"
                                        src={Img5}
                                        alt="Second slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image
                                        roundedCircle
                                        className="d-block w-100"
                                        src={Img7}
                                        alt="Second slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row row1">
                <div className="col">
                    <div className="Container">
                        <div className="Carousel-wrapper">
                            <Carousel fade className="Carousel">
                                <Carousel.Item>
                                    <Image
                                        roundedCircle
                                        className="d-block w-100"
                                        src={Img6}
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image
                                        roundedCircle
                                        className="d-block w-100"
                                        src={Img9}
                                        alt="Second slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image
                                        roundedCircle
                                        className="d-block w-100"
                                        src={Img8}
                                        alt="Second slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image
                                        roundedCircle
                                        className="d-block w-100"
                                        src={Img12}
                                        alt="Second slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image
                                        roundedCircle
                                        className="d-block w-100"
                                        src={Img10}
                                        alt="Second slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image
                                        roundedCircle
                                        className="d-block w-100"
                                        src={Img11}
                                        alt="Second slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </div>
                        <ul className="activite-text py-4 px-5 rounded">
                            <li className="lead fst-italic">
                            Plan-CFA-VDI. 

                            </li>
                            <li className="lead fst-italic">Plan-CFA-Contrôle d’accès. </li>
                            <li className="lead fst-italic">
                            Plan-CFA-Anti-intrusion. 
                            </li>
                            <li className="lead fst-italic">
                            Plan-CFA-interphonie.
                            </li>
                            <li className="lead fst-italic">
                            Plan-CFA-SSI (SDI+CMSI). 
                            </li>
                            <li className="lead fst-italic">
                            Plan-CFA-Synoptique de câblage.  
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row row2">
                <div className="col">
                    <div className="Container Container2">
                    <ul className="activite-text py-4 px-5 rounded">
                            <li className="lead fst-italic">
                            Elaboration des notes de calcul par Caneco.                             </li>
                            <li className="lead fst-italic">Elaboration des bilans de puissance. </li>
                            <li className="lead fst-italic">
                            Calcul d’éclairement par Dialux. 
                            </li>
                        </ul>
                        <div className="Carousel-wrapper">
                            <Carousel fade className="Carousel">
                                <Carousel.Item>
                                    <Image
                                        roundedCircle
                                        fluid
                                        className="d-block w-100"
                                        src={Img13}
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image
                                        roundedCircle
                                        className="d-block w-100"
                                        src={Img14}
                                        alt="Second slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Activite;
