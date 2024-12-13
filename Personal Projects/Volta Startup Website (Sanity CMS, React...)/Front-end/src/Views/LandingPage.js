import React, { useEffect } from "react";
import logo from "../images/pdfresizer.com-pdf-crop.svg";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {

    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="LandingPage ">
            <section className="LandingScreen " id="landing">
                <div className="headers-wrapper container">
                    <div className="Row row">
                        <img
                            type="button"
                            className="logo"
                            style={{ width: "100%" }}
                            src={logo}
                            alt="IC"
                        />
                    </div>
                    <div className="headers d-flex  row">
                        <div className="Coll col d-flex flex-column align-items-center justify-content-center ">
                            <h2 className="display-5 display-md-4 fw-bold">
                                <span className="display-3 display-md-1 ">
                                    100%
                                </span>{" "}
                                <strong>
                                    SATISFACTION, <br /> FIDELITE ET RAPIDITE
                                </strong>
                            </h2>
                            <p className="pg p-4 mt-5">
                                <strong>Volta Consulting</strong> est un bureau
                                d’études techniques spécialisé dans la
                                réalisation des études d’exécution aux services
                                des installateur électriques.
                            </p>
                        </div>
                        <div className="Coll d-flex flex-column justify-content-center align-items-center ">
                            <h3 className="display-6 d-none d-md-block contact-us-call">
                                Embauchez Nous Maintenant
                            </h3>
                            <button
                                onClick={() => navigate("/contact")}
                                className="contact-us rounded-pill mt-2 mb-2"
                            >
                                ENVOYER UN E-MAIL
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
