import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';  
import "bootstrap-icons/font/bootstrap-icons.css";
import { Routes, Route} from "react-router-dom";
import LandingPage from './Views/LandingPage';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Contact from './Views/Contact';
import Presentation from './Views/Presentation';
import Projets from './Views/Projets';
import Activite from './Views/Activite';
import PageNotFound from './Components/PageNotFound';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/presentation" element={<Presentation/>}/>
        <Route path="/projets" element={<Projets/>}></Route>
        <Route path="/activite" element={<Activite/>}></Route>
        <Route path="*" element={<PageNotFound/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
