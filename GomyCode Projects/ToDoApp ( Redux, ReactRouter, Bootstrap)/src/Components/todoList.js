import { Card, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { deleteTodo } from "../Actions/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import EditEdit from "./editTodo";

const TodoList = () => {
    const todoList = useSelector((state) => state);
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const handleShow = (x) => {setShow(true);setId(x.id)};
    const [id, setId] = useState(undefined);
    
    return (
        <div>
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                }}
            >
                {todoList.map((x) => (
                    <div>
                        <Card
                            style={{
                                height: "11rem",
                                width: "22rem",
                                margin: "5px",
                            }}
                        >
                            <Card.Body
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Card.Title>{x.name}</Card.Title>
                                <Card.Text>{x.date}</Card.Text>
                                <Card.Text>{x.description}</Card.Text>  
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <Button
                                        className="buttons"
                                        variant="outline-danger"
                                        onClick={() =>
                                            dispatch(deleteTodo(x.id))
                                        }
                                    >
                                        Delete
                                    </Button>{" "}
                                    <Button
                                        className="buttons"
                                        variant="outline-primary"
                                        onClick={()=>handleShow(x)}
                                    >
                                        Edit
                                    </Button>{" "}
                                    <Button
                                        className="buttons"
                                        variant="outline-success"
                                    >
                                        Check
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
            <div>
                <EditEdit show={show} setShow={setShow} id={id}/>
            </div>
        </div>
    );
};

export default TodoList;
