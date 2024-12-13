import { Form, Button } from "react-bootstrap";
import { addTodo } from "../Actions/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";

const AddToDo = () => {
    const initialValues = {
        name: "",
        description: "",
        date: "",
        status: false,
        id: Math.random(),
    };
    const dispatch = useDispatch();
    const [task, setTask] = useState(initialValues);
    const resetInputs =()=>{
        setTask(initialValues)
    }
    const handleButton = (x)=>{
        dispatch(addTodo(x))
        resetInputs()
        
    }
    return (
        <Form>
            <Form.Group
                style={{ color: "white", textShadow: "2px 2px 4px black" }}
                className="mb-3"
                controlId="exampleForm.ControlInput1"
            >
                <Form.Label>Add a ToDo Name</Form.Label>
                <Form.Control
                onChange={(e) => setTask({...task,name: e.target.value})}
                    value={task.name}
                    type="text"
                    placeholder="TaskName"
                />
            </Form.Group>
            <Form.Group
                style={{ color: "white", textShadow: "2px 2px 4px black" }}
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
            >
                <Form.Label>Add a Due Date</Form.Label>
                <Form.Control onChange={(e) => setTask({...task,date: e.target.value})} value={task.date} placeholder="Date" rows={3} />
            </Form.Group>
            <Form.Group
                style={{ color: "white", textShadow: "2px 2px 4px black" }}
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
            >
                <Form.Label>Add a ToDo Description</Form.Label>
                <Form.Control
                onChange={(e) => setTask({...task,description: e.target.value})}
                    value={task.description}
                    placeholder="TaskDescription"
                    as="textarea"
                    rows={3}
                />
            </Form.Group>

            <Button
                style={{ position: "relative", left: "45%" }}
                variant="secondary"
                onClick={()=>handleButton(task)}
            >
                Add
            </Button>
            
        </Form>
    );
};


export default AddToDo;
