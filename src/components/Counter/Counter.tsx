import React from 'react';
import s from './Counter.module.css'
type CounterType = {
    valueNumber: number
    incrementNumber: () => void
    resetNumber: () => void
    examination: () => void
    maxLocalNumber: number
    minLocalNumber: number
}

export const Counter = (props:CounterType) => {

    return <div className={s.container}>
        <div className={s.value}>
            <span className={props.valueNumber === props.maxLocalNumber || props.minLocalNumber < 0 ? s.stop_span : ""}>
                {props.minLocalNumber<0 ? 'Error input > 0' : props.valueNumber}
            </span>
        </div>
        <div className={s.button_group}>
            <button
                className={props.valueNumber === props.maxLocalNumber ? s.stop : ""}
                onClick={props.incrementNumber}
                disabled={props.valueNumber === props.maxLocalNumber || props.minLocalNumber < 0 || props.minLocalNumber >= props.maxLocalNumber}>
                INC
            </button>
            <button
                className={props.valueNumber === props.minLocalNumber ? s.stop : ""}
                onClick={props.resetNumber}
                disabled={props.valueNumber === props.minLocalNumber || props.minLocalNumber < 0 || props.minLocalNumber >= props.maxLocalNumber}>
                RESET
            </button>
        </div>
    </div>
}
