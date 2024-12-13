import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { editTodo } from "../Actions/actions";

function EditEdit({ setShow, show, id }) {
    const handleClose = () => {
        setShow(false);
        setToEdit({});
    };
    const handleButton = (x) => {
        dispatch(editTodo({ ...x, id: id }));
        handleClose();
    };
    const todoToEdit = useSelector((state) => state.filter((x) => x.id === id));
    const [toEdit, setToEdit] = useState(
        todoToEdit.length === 0 ? {} : todoToEdit[0]
    );
    const dispatch = useDispatch();
    
    return (
        <div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Form style={{ padding: "10px" }}>
                    <Form.Group
                        style={{
                            color: "white",
                            textShadow: "2px 2px 4px black",
                        }}
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                    >
                        <Form.Label>Edit ToDo Name</Form.Label>
                        <Form.Control
                            onChange={(e) =>
                                setToEdit({ ...toEdit, name: e.target.value })
                            }
                            // value={todoToEdit.length === 0 ? "" : todoToEdit[0].name}
                            type="text"
                            placeholder={
                                todoToEdit.length === 0
                                    ? ""
                                    : todoToEdit[0].name
                            }
                        />
                    </Form.Group>
                    <Form.Group
                        style={{
                            color: "white",
                            textShadow: "2px 2px 4px black",
                        }}
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label>Edit Due Date</Form.Label>
                        <Form.Control
                            onChange={(e) =>
                                setToEdit({ ...toEdit, date: e.target.value })
                            }
                            /*value={todoToEdit.length === 0 ? "" : todoToEdit[0].date}*/ placeholder={
                                todoToEdit.length === 0
                                    ? ""
                                    : todoToEdit[0].date
                            }
                            rows={3}
                        />
                    </Form.Group>
                    <Form.Group
                        style={{
                            color: "white",
                            textShadow: "2px 2px 4px black",
                        }}
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label>Edit ToDo Description</Form.Label>
                        <Form.Control
                            onChange={(e) =>
                                setToEdit({
                                    ...toEdit,
                                    description: e.target.value,
                                })
                            }
                            // value={todoToEdit.length === 0 ? "" : todoToEdit[0].description}
                            placeholder={
                                todoToEdit.length === 0
                                    ? ""
                                    : todoToEdit[0].description
                            }
                            as="textarea"
                            rows={3}
                        />
                    </Form.Group>
                </Form>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button
                        variant="primary"
                        onClick={() => handleButton(toEdit)}
                    >
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default EditEdit;
