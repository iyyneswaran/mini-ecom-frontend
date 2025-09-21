import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route />
          </Routes>
        </div>

      </Router>
    </div>
  );
}

export default App;
