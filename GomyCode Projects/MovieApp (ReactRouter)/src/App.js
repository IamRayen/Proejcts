import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Movie from "./Components/moviecard";
import { movieList } from "./Components/movielist";
import { useState } from "react";
import AddMovie from "./Components/AddMovie";
import Filter from "./Components/Filter";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Trailer} from "./Components/Trailer"

function App() {
    const [movies, setMovies] = useState(movieList);
    const [other, setOther] = useState(movies);
    const [again, setAgain] = useState(other);
    const [and, setAnd] = useState(again);

    const addMovie = (newMovie) => {
        // setMovies(movies.push(newMovie))
        // setMovies(movies); powerful spell (forbidden)
        setMovies([...movies, newMovie]);
        setOther([...other, newMovie]);
        setAgain([...again, newMovie]);
        setAnd([...and, newMovie]);
    };

    const filterMovies = (theMovie) => {
        setMovies(
            theMovie === ""
                ? again
                : and.filter((obj) =>
                      obj.title.toLowerCase().includes(theMovie.toLowerCase())
                  )
        );
        setOther(
            theMovie === ""
                ? again
                : again.filter((obj) =>
                      obj.title.toLowerCase().includes(theMovie.toLowerCase())
                  )
        );
    };

    const filterRate = (theRate) => {
        setMovies(
            theRate === "" ? other : other.filter((obj) => obj.rate >= theRate)
        );
        setAnd(
            theRate === "" ? other : other.filter((obj) => obj.rate >= theRate)
        );
    };

    return (
        <Router>
                <Switch>
                    <Route exact path="/" render={()=> <div className="App">
                        <div>
                            <Filter
                                filterRate={filterRate}
                                filterMovies={filterMovies}
                                movies={movies}
                            />
                        </div>

                        <div className="Carousel">
                            <Movie movieList={movies} />
                        </div>
                        <div className="Addmovie">
                            <AddMovie addMovie={addMovie} movies={movies} />
                        </div>
                        </div>} >
                    </Route>
                    <Route path="/:id" render={(props)=> <Trailer {...props} movies={movies}/>}/>
                      
    
                </Switch>
        </Router>
    );
}

export default App;
