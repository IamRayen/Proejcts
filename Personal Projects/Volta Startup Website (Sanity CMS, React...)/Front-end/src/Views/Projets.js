import React, { useState, useEffect } from "react";
import Client from "../Client";
import PreLoader from "../Components/PreLoader";
import myConfiguredSanityClient from "../Client";
import imageUrlBuilder from "@sanity/image-url";
import { useNavigate } from "react-router-dom";

const Projets = () => {
    const navigate = useNavigate();

    //Sanity image builder
    const builder = imageUrlBuilder(myConfiguredSanityClient);
    const urlFor = (source) => {
        return builder.image(source);
    };

    //Loading data...
    const [done, setDone] = useState(false);

    const [projects, setProjects] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        const request = async () => {
            try {
                //fetching projects
                const data = await Client.fetch(`*[_type=="References"]{
                    image{
                        asset ->{
                            _id,
                            url
                        }
                    },
                    mission,
                    maitre,
                    date,
                }`);
                setProjects(data);
                setDone(true);
            } catch (error) {
                console.log(error);
            }
        };
        //request data from sanity
        request();
    }, []);

    return (
        <div>
            {done ? (
                <div className="Projet-wrapper border">
                    <div className="Projets container-xl d-flex flex-wrap justify-content-center p-0">
                        {projects &&
                            projects
                                //make the sort by year function
                                .sort((a, b) => {
                                    return parseInt(b.date) - parseInt(a.date);
                                })
                                .map((el) => {
                                    return (
                                        <div
                                            onClick={() => {
                                                navigate("/activite");
                                            }}
                                            key={Math.random()}
                                            className=" project-wrapper flex-fill"
                                            style={{
                                                height: "440px",
                                                width: `${
                                                    Math.random() *
                                                        (600 - 400) +
                                                    400
                                                }px`,
                                            }}
                                        >
                                            <div
                                                className="Project"
                                                style={{
                                                    backgroundImage: `url(${
                                                        el.image &&
                                                        urlFor(el.image)
                                                            .quality(60)
                                                            .url()
                                                    })`,
                                                    backgroundSize: "cover",
                                                    height: "440px",
                                                }}
                                            ></div>
                                            <h4 className="mission display-6 m-2 p-1">
                                                {el.mission}
                                                <br />
                                                <span className="h5">
                                                    {el.maitre}
                                                </span>
                                            </h4>
                                            <p className="date border p-4 m-0">
                                                {new Date(el.date).getFullYear()}
                                            </p>
                                        </div>
                                    );
                                })}
                    </div>
                </div>
            ) : (
                <PreLoader />
            )}
        </div>
    );
};

export default Projets;
