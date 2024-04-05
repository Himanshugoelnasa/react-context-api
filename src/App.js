import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter'
import CounterProvider, {useCounter} from './Context/CounterProvider';

function App() {

  const counterState = useCounter();
  console.log('count', counterState);

  return (
    <div className="App">      
        <h1>Count is {counterState.count}</h1>
        <Counter />
    </div>
  );
}

export default App;
