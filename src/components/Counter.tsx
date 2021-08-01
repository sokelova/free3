import React from 'react';
import s from './Counter.module.css'
type counterType = {
    valueNumber: number
    incrementNumber: () => void
    resetNumber: () => void
    examination: () => void
}

export const Counter = (props:counterType) => {

    return <div className={s.container}>
        <div className={s.value}>
            <span className={props.valueNumber === 5 ? s.stop_span : ""}>{props.valueNumber}</span>
        </div>
        <div className={s.button_group}>
            <button
                className={props.valueNumber === 5 ? s.stop : ""}
                onClick={props.incrementNumber}
                disabled={props.valueNumber === 5}>
                INC
            </button>
            <button
                className={props.valueNumber === 0 ? s.stop : ""}
                onClick={props.resetNumber}
                disabled={props.valueNumber === 0}>
                RESET
            </button>
        </div>
    </div>
}
