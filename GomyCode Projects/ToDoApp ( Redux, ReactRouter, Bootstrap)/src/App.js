import "./App.css";
import NavBar from "./Components/navBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import TodoList from "./Components/todoList";
import AddToDo from "./Components/addTodo";

function App() {
    return (
        <div className="App">
            <div className="Content">
                <NavBar />
                <Switch>
                    <Route exact path="/">
                        <AddToDo />
                    </Route>
                    <Route path="/List">
                        <TodoList />
                    </Route>
                </Switch>
            </div>
        </div>
    );
}

export default App;
