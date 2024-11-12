import { Route, Routes } from 'react-router-dom';
import './App.css'
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import OurCareer from './pages/ourcareer/OurCareer';
import LandResourses from './pages/resourses/LandResourses';
import Communications from './pages/communications/Communications';
import LoginUser from './pages/login/LoginUser';
import Courses from './pages/Courses/Courses';

function App() {
    //s
    return(
        <>
        <NavBar />
        
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<LoginUser />} />
                <Route path="/nuestra-carrera" element={<OurCareer />} />
                <Route path="/recursos" element={<LandResourses />} />
                <Route path="/comunicados" element={<Communications />} />
                <Route path="/cursos" element={<Courses />} />
            </Routes>
        <Footer/>
        </>
        
    )
}

export default App
