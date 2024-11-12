import { Route, Routes } from 'react-router-dom';
import './App.css'
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import OurCareer from './pages/ourcareer/OurCareer';
import Resourses from './pages/resourses/Resourses';
import Communications from './pages/communications/Communications';
import LoginUser from './pages/login/LoginUser';
import RegisterUser from './pages/registerUser/RegisterUser';


function App() {
    return(
        <>
        <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<LoginUser />} />
                <Route path="/nuestra-carrera" element={<OurCareer />} />
                <Route path="/recursos" element={<Resourses />} />
                <Route path="/comunicados" element={<Communications />} />
                <Route path="/register" element={<RegisterUser />} />
            </Routes>
        <Footer/>
        </>
        
    )
}

export default App
