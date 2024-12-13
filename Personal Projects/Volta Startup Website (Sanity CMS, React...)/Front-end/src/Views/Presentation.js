import React, { useState, useEffect, useRef } from "react";
import Client from "../Client";
import myConfiguredSanityClient from "../Client";
import imageUrlBuilder from "@sanity/image-url";
import { Card } from "react-bootstrap";
import img from "../images/multi-tasking-ceo-handling-multiple-departments-with-ease-1862198.svg";
import { useSwipeable } from "react-swipeable";
import PreLoader from "../Components/PreLoader";

const Presentation = () => {
    
    //page loading screen
    const [done, setDone] = useState(false)

    const builder = imageUrlBuilder(myConfiguredSanityClient);
    const urlFor = (source) => {
        return builder.image(source);
    };

    // const [equipe, setEquipe] = useState(null);
    const [competence, setCompetence] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0)

        const request = async () => {
            try {
                //fetching skills
                const data = await Client.fetch(`*[_type=="Competence"]{
                    image,
                    nom,
                    url
                }`);

                //fetching team
                // const data2 = await Client.fetch(`*[_type=="Equipe"]{
                //     image,
                //     nom,
                //     description,
                //     date,
                //     linkedIn,
                //     facebook
                // }`);

                setCompetence(data);
                // setEquipe(data2);
                
                setDone(true)

            } catch (error) {
                console.log(error);
            }
        };
        request();
    }, []);

    //translation for competences slider
    const ref = useRef(null);

    const [translation, setTranslation] = useState(0);
    const [sliderstyle, setSliderstyle] = useState({
        transform: `translateX(${translation}px)`,
    });
    const moreTranslation = () => {
        setTranslation(
            translation <= -ref.current.offsetWidth + 500
                ? -ref.current.offsetWidth + 500
                : translation - 200
        );

        setSliderstyle({
            transform: `translateX(${translation - 200}px)`,
        });
    };
    const lessTranslation = () => {
        setTranslation(translation >= -200 ? 0 : translation + 200);
        setSliderstyle({
            transform: `translateX(${
                translation >= -200 ? 0 : translation + 200
            }px)`,
        });
    };

    //Sliding config
    const handlers = useSwipeable({
        onSwipedLeft: moreTranslation,
        onSwipedRight: lessTranslation,
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
    });

    return (
        <div>
            {done ?
        <div className="presentation-wrapper container-fluid ">
            <section className="presentation-generale container d-flex flex-column justify-content-center">
                <div className="first-part container-fluid d-flex flex-wrap justify-content-around ">
                    <p className="presentation-text align-self-center lead">
                        Volta Consulting est un{" "}
                        <strong>bureau d’études techniques </strong>
                        spécialisé dans la réalisation des études d’exécution
                        aux services des installateur électriques. <strong>Fort </strong>de son 
                        <strong> expérience</strong> dans le domaine du bâtiment, il met à votre
                        service son savoir-faire et ses compétences. Il
                        intervient sur toute la France et à l’international. Il
                        accompagne les maitres d’oeuvre, les architectes et les
                        bureaux d’études sur tous les projets ( des logements,
                        des hôtels, des ehpads, des groupes scolaires…) aussi
                        bien sur des opérations de constructions neuves, que de
                        réhabilitation.
                    </p>
                    <img
                        src={img}
                        alt="ill"
                        className="illustration-presentation"
                    />
                </div>
                <div className="second-part container d-flex justify-content-center flex-wrap">
                    {/* <a
                        href="#Equipe"
                        className="GoToTeamBtn me-lg-5 d-none d-lg-flex"
                    >
                        <strong>Notre Equipe</strong>
                        <i className="bi bi-arrow-down ms-2"></i>
                    </a> */}
                    <a
                        href="#Competences"
                        className="GoToTeamBtn ms-lg-5 d-none d-lg-flex"
                    >
                        <strong>Nos Competences</strong>
                        <i className="bi ms-2 bi-arrow-down"></i>
                    </a>
                </div>
            </section>
            {/* <hr className="mt-5" /> */}
            {/* <section
                id="Equipe"
                className="equipe d-flex align-items-center justify-content-center flex-column container"
            >
                <h1 className="d-lg-none">
                    Note Equipe <i className="bi bi-arrow-down"></i>
                </h1>
                <h1 className="d-none my-4 d-lg-block">
                    Equipe<i className="bi bi-arrow-down"></i>
                </h1>
                <div className="container-fluid members d-flex justify-content-center flex-wrap">
                    {equipe &&
                        equipe.map((el) => (
                            <Card
                                key={Math.random()}
                                style={{
                                    width: "250px",
                                    margin: "5px",
                                    backgroundColor: "rgba(0, 33, 214,0.2)",
                                }}
                                className="Card mx-4 my-2"
                            >
                                <Card.Text className="desc p-1 lead">
                                    {el.description}
                                </Card.Text>
                                <Card.Img
                                    variant="top"
                                    src={
                                        el.image &&
                                        urlFor(el.image).width(250).height(250).quality(60).url()
                                    }
                                    style={{
                                        borderRadius: "50%",
                                        height: "90%",
                                    }}
                                    alt="picture"
                                    className="CardImg"
                                />
                                <Card.Body>
                                    <Card.Title>{el.nom}</Card.Title>
                                    <hr />
                                    <Card.Subtitle>
                                        Parmi nous depuis le {el.date}
                                    </Card.Subtitle>
                                    <Card.Link
                                        href={el.linkedIn}
                                        rel="noopener noreferrer"
                                        target="_blank"
                                    >
                                        <i className="bi bi-linkedin"></i>
                                    </Card.Link>
                                    <Card.Link
                                        href={el.facebook}
                                        rel="noopener noreferrer"
                                        target="_blank"
                                    >
                                        <i className="bi bi-facebook"></i>
                                    </Card.Link>
                                </Card.Body>
                            </Card>
                        ))}
                </div>
            </section> */}
            <hr />
            <section
                id="Competences"
                className="competences-section d-flex align-items-center justify-content-center flex-column container-fluid"
            >
                <h1>
                    Nos Competences{" "}
                    <i className="bi d-lg-none bi-arrow-left"></i>
                    <i className="bi d-lg-none bi-arrow-right"></i>
                </h1>

                <div
                    {...handlers}
                    className="competences-wrapper container-fluid overflow-hidden"
                >
                    <div
                        className="sliderNav sliderNavRight d-flex justify-content-center align-items-center"
                        onClick={moreTranslation}
                    >
                        <i
                            style={{ fontSize: "80px" }}
                            className="bi d-none d-lg-block bi-caret-right"
                        ></i>
                    </div>
                    <div
                        className="sliderNav sliderNavLeft d-flex justify-content-center align-items-center"
                        onClick={lessTranslation}
                    >
                        <i
                            style={{ fontSize: "80px" }}
                            className="bi d-none d-lg-block bi-caret-left"
                        ></i>
                    </div>
                    <div
                        style={sliderstyle}
                        ref={ref}
                        className="competences row"
                    >
                        {competence &&
                            competence.map((el) => (
                                <Card
                                    className="col"
                                    key={Math.random()}
                                    style={{ width: "250px", margin: "5px" }}
                                >
                                    <Card.Img
                                        variant="top"
                                        src={
                                            el.image &&
                                            urlFor(el.image).width(250).height(250).quality(60).url()
                                        }
                                        alt="picture"
                                    />
                                    <Card.Body>
                                        <Card.Title>{el.nom}</Card.Title>
                                        <hr />
                                        <Card.Link
                                            href={el.url}
                                            rel="noopener noreferrer"
                                            target="_blank"
                                            style={{
                                                textDecoration: "none",
                                                color: "black",
                                                cursor: "pointer",
                                            }}
                                        >
                                            <span>learn more</span>
                                            <i className="bi ms-2 bi-arrow-right"></i>
                                        </Card.Link>
                                    </Card.Body>
                                </Card>
                            ))}
                    </div>
                </div>
            </section>
        </div> : <PreLoader/>}
        </div>
    );
};

export default Presentation;
