import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import NavBar from './components/navbar/NavBar';
import Home from './pages/home/Home';
function App() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
        
    )
}

export default App
