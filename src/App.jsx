import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import NavBar from './components/navbar/NavBar';
function App() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<NavBar />} />
            </Routes>
        </Router>
    )
}

export default App
