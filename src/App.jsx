import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import NavBar from './components/navbar/NavBar';
import Home from './pages/home/Home';
import OurCareer from './pages/ourcareer/OurCareer';
import Resource from './pages/resource/Resource';
function App() {
    return(
        <Router>
        <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/nuestra-carrera" element={<OurCareer />} />
                <Route path="/recursos" element={<Resource />} />
            </Routes>
        </Router>
        
    )
}

export default App
