import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

const AddMovie = ({ addMovie,movies }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [rating, setRating] = useState(0);
    const [pic, setPic] = useState("");

    const handleClickEvent = () => {
        const newMovie = {
            id: Math.random(),
            title: title,
            rate: parseInt(rating),
            description: desc,
            posterUrl: pic,
            trailer: "",
        };
        addMovie(newMovie);
        resetInputs()
    };
    const resetInputs = () =>{
        setTitle('')
        setDesc('')
        setRating('')
        setPic('')
    }
    return (
        <div style={{ width: "350px" }}>
            <h2 style={{ color: "#daa520" }}>Add a Movie</h2>
            <Form.Control
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <br />
            <Form.Control
                type="text"
                placeholder="Short Description"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
            />
            <br />
            <Form.Control
                type="text"
                placeholder="Rating (/5)"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
            />
            <br />
            <Form.Control
                type="text"
                placeholder="pictureURL"
                value={pic}
                onChange={(e) => setPic(e.target.value)}
            />
            <br />
            <Button onClick={handleClickEvent} variant="outline-danger">
                Add Movie
            </Button>
        </div>
    );
};

export default AddMovie;
