import React, {ChangeEvent, useState} from 'react';
import './App.module.css';
import { Counter } from './components/Counter/Counter';
import {Localstorage} from "./components/Localstorage/Localstorage";

function App() {

    const [minLocalNumber, setMinLocalNumber] = useState(0);
    const [maxLocalNumber, setMaxLocalNumber] = useState(5);
    const [valueNumber, setValueNumber] = useState(minLocalNumber);

    const setLocalStore = () => {
        localStorage.setItem('counterMinValue', JSON.stringify(minLocalNumber))
        localStorage.setItem('counterMaxValue', JSON.stringify(maxLocalNumber))
    }
    const getLocalStore = () => {
        let minValueAsStr = localStorage.getItem('counterMinValue')
        let maxValueAsStr = localStorage.getItem('counterMaxValue')
        if (minValueAsStr){
            let newValue = JSON.parse(minValueAsStr)
            setMinLocalNumber(newValue)
        }
        if (maxValueAsStr){
            let newValue = JSON.parse(maxValueAsStr)
            setMaxLocalNumber(newValue)
        }
    }

    const incrementNumber = () => setValueNumber(valueNumber+1)

    const resetNumber = () => setValueNumber(minLocalNumber)

    const examination = () => {
        if (valueNumber===maxLocalNumber) setValueNumber(maxLocalNumber)
    }

    const setNumber = () => {
        setLocalStore()
        getLocalStore()
        setValueNumber(minLocalNumber)
    }

    const setMinNumberCallback = (event: ChangeEvent<HTMLInputElement>) => {
        let setMinNum = JSON.parse(event.currentTarget.value)
        setMinLocalNumber(setMinNum)
    }
    const setMaxNumberCallback = (event: ChangeEvent<HTMLInputElement>) => {
        let setMaxNum = JSON.parse(event.currentTarget.value)
        setMaxLocalNumber(setMaxNum)
    }
        return (
        <div className="App">
          <Counter
              valueNumber={valueNumber}
              incrementNumber={incrementNumber}
              resetNumber={resetNumber}
              examination={examination}
              minLocalNumber={minLocalNumber}
              maxLocalNumber={maxLocalNumber}
          />
            <Localstorage
                setNumberMin={setMinNumberCallback}
                setNumberMax={setMaxNumberCallback}
                minLocalNumber={minLocalNumber}
                maxLocalNumber={maxLocalNumber}
                setNumber={setNumber}
            />
        </div>
    );
}

export default App;

