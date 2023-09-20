import './App.css';
import {
  BrowserRouter as Router, Route, Routes, Link,
} from 'react-router-dom';
import Calculator from './components/Calculator';
import { CalcProvider } from './components/CalcContext';
import Footer from './components/Footer';
import Home from './components/Home';
import QoutePage from './QuotePagee';

function App() {
  return (
    <div className="App">
      <CalcProvider>
        <Router>
          <header>
            <div className="header-container">
              <h1>Math Magicians</h1>
              <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/calculator">Calculator</Link>
                  </li>
                  <li>
                    <Link to="/qoute">Qoute</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/qoute" element={<QoutePage />} />
          </Routes>
        </Router>
        <Footer />
      </CalcProvider>
    </div>
  );
}

export default App;
