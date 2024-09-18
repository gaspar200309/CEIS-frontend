import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import NavBar from './components/navbar/NavBar';
import Home from './pages/home/Home';
import Resourses from './pages/resourses/Resourses';
function App() {
    return(
        <Router>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/recursos" element={<Resourses />} />
            </Routes>
        </Router>
        
    )
}

export default App
