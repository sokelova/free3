import React, {useState} from 'react';
import './App.module.css';
import { Counter } from './components/Counter';

function App() {

    const [valueNumber, setValueNumber] = useState(0);

    const incrementNumber = () => {
        setValueNumber(valueNumber+1)
    }

    const resetNumber = () => {
        setValueNumber(0)
    }

    const examination = () => {
        if (valueNumber===5){
            setValueNumber(5)
        }
    }

    return (
        <div className="App">
          <Counter
              valueNumber={valueNumber}
              incrementNumber={incrementNumber}
              resetNumber={resetNumber}
              examination={examination}
          />
        </div>
    );
}

export default App;
