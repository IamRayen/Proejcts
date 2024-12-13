import { Carousel } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { BsFillStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Movie = ({ movieList }) => {
    return (
        <Container className="Movies" style={{ width: "400px" }}>
            <Carousel style={{ width: "100%", border: "4px solid black" }} fade>
                {movieList.map((x) => (
                    <Carousel.Item
                        key={x.id}
                        style={{ height: "700px", backgroundColor: "black" }}
                    >
                        
                        <img
                            style={{ width: "auto", height: "500px" }}
                            className="d-block w-100"
                            src={x.posterUrl}
                            alt="First slide"
                        />
                        <Carousel.Caption
                            style={{
                                color: "white",
                                position: "relative",
                                width: "350px",
                                textAlign: "start",
                                left: "3px",
                            }}
                        ><Link to={`/${x.id}`} style={{textDecoration:"none",color:"white",display:"flex",justifyContent:"space-between"}}>
                            <p>{x.description}</p>
                            <Button variant="outline-light" style={{height:"60px",width:"70px",marginTop:"40px"}}>
                            Trailer
                            </Button>
                            {x.rate}

                            <BsFillStarFill />

                            </Link>
                            

                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </Container>
    );
};

export default Movie;
