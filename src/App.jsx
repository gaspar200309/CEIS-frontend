import { Route, Routes } from 'react-router-dom';
import './App.css'
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import OurCareer from './pages/ourcareer/OurCareer';
import Resourses from './pages/resourses/Resourses';
import Communications from './pages/communications/Communications';
import Courses from './pages/Courses/Courses';
function App() {
    return(
        <>
        <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/nuestra-carrera" element={<OurCareer />} />
                <Route path="/recursos" element={<Resourses />} />
                <Route path="/comunicados" element={<Communications />} />
                <Route path="/cursos" element={<Courses />} />
            </Routes>
        <Footer/>
        </>
        
    )
}

export default App
