import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Home initialSection="projects" />} />
        <Route path="experience" element={<Home initialSection="experience" />} />
        <Route path="contact" element={<Home initialSection="contact" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App;
