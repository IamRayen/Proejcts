import InputGroup from "react-bootstrap/InputGroup";
import { FormControl } from "react-bootstrap";

const Filter = ({ filterMovies,filterRate }) => {
    const handleChangeSearchTitle = (y) => {
        filterMovies(y);
    };
    const handleChangeSearchRate = (y) => {
        filterRate(y);
    };
    var raa;
    var amoun;

    return (
        <InputGroup className="mb-3">
            <FormControl
                placeholder="Title"
                value={raa}
                onChange={(e) => handleChangeSearchTitle(e.target.value)}
                style={{ width: "200px" }}
                aria-label="First name"
            />
            <FormControl
                placeholder="Rating"
                value={amoun}
                onChange={(e) => handleChangeSearchRate(e.target.value)}
                style={{ width: "200px" }}
                aria-label="Last name"
            />
        </InputGroup>
    );
};
export default Filter;
