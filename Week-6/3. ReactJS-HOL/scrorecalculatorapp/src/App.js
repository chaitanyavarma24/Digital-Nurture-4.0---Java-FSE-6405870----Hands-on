import logo from './logo.svg';
import './App.css';
import { CalculateScore } from './Components/CalculatorScore';

function App() {
  return (
    <div>
      <CalculateScore Name={"Chaitanya"}
      School={"Bala Vignan School"}
      total={283}
      goal={3}
      />
    </div>
  );
}

export default App;
