import React, { useEffect } from "react";
import illus from "../illustrations/concept-of-business-employees-team-working-in-business-environment-work-culture-1862186.svg";

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="contact-wrapper">
            <div className="contact container-fluid">
                <div className="contact-information d-flex flex-column align-items-center align-items-lg-start">
                    <h1 className="display-2 mt-4">
                        <strong>OUSSAMA </strong>HABIBI
                    </h1>
                    <p className="lead fs-2 ps-lg-4">
                        Ingenieur Conseil Electicité et sécurité incendie
                    </p>
                    <a
                        href="mailto:voltaconsulting21@gmail.com"
                        className="text-decoration-none email ms-lg-5"
                    >
                        <i className="bi bi-envelope-fill"></i>{" "}
                        voltaconsulting21@gmail.com{" "}
                        <span>
                            {" "}
                            <i className="bi bi-arrow-left"></i> Cliquez ici
                        </span>
                    </a>
                    <a
                        href="tel:+21654342440"
                        className="align-self-center mt-4 h3 phone"
                    >
                        <i className="bi bi-telephone-fill"></i> +216 54 342 440
                    </a>
                    <h2 className="align-self-center mt-4 ps-lg-2">
                        <i className="bi bi-geo-alt-fill"></i> 7 Rue Abou El
                        Kacem Chabbi Manouba 2010
                    </h2>
                </div>
                <img className="ill d-none d-lg-block" src={illus} alt="pic" />
            </div>
        </div>
    );
};

export default Contact;
