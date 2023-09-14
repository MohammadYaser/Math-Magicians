import './App.css';
import { v4 as uuidv4 } from 'uuid';
import Calculator from './components/Calculator';
import Screen from './components/Screen';
import ButtonBox from './components/ButtonBox';
import Button from './components/Button';

const btnValues = [
  ['C', '+/-', '%', '/'],
  [7, 8, 9, 'X'],
  [4, 5, 6, '-'],
  [1, 2, 3, '+'],
  [0, '.', '='],
];

function App() {
  return (
    <div className="App">
      <Calculator>
        <Screen />
        <ButtonBox>
          {btnValues.map((row) => (
            row.map((btn) => (
              <Button
                value={btn}
                key={uuidv4()}
              />
            ))
          ))}
        </ButtonBox>
      </Calculator>
    </div>
  );
}

export default App;
