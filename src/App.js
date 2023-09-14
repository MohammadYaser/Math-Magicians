import './App.css';
import Calculator from './components/Calculator';
import Screen from './components/Screen';

function App() {
  return (
    <div className="App">
      <Calculator>
        <Screen />
      </Calculator>
    </div>
  );
}

export default App;
