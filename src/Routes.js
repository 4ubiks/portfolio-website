import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Home} from './pages/home.js';
import {Skills} from './pages/skills';
import {Work} from './pages/work.js';
import {Resume} from './pages/resume.js';
import {Testing} from './pages/testing.js';

export const Path = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}>
                </Route>
                <Route path="/skills" element={<Skills/>}>
                </Route>
                <Route path="/work" element={<Work/>}>
                </Route>
                <Route path="/resume" element={<Resume/>}>                    
                </Route>
                {/* <Route path="/test" element={<Testing/>}>
                </Route> */}
            </Routes>
        </Router>
    )
}