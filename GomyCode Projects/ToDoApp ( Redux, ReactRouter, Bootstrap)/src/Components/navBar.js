import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">ToDoList</Navbar.Brand>
                    <Nav
                        style={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "right",
                        }}
                        className="me-auto"
                    >
                        <Link className="link" style={{ textDecoration:"none" }} to="/">Home</Link>
                        <Link className="link" style={{ marginLeft: "5%",textDecoration:"none"}} to="/List">
                            List of Todos
                        </Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;