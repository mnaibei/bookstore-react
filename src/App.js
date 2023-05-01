import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/NavBar';
import Home from './components/Home';
import Categories from './components/Categories';

function App() {
  return (
    <Router>
      <>
        <Navigation />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
          </Routes>
        </div>
      </>
    </Router>
  );
}

export default App;
