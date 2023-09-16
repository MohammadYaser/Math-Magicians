import './App.css';
import Calculator from './components/Calculator';
import { CalcProvider } from './components/CalcContext';
import Quote from './components/Quote';

function App() {
  return (
    <div className="App">
      <CalcProvider>
        <Quote />
        <Calculator />
      </CalcProvider>

    </div>
  );
}

export default App;
