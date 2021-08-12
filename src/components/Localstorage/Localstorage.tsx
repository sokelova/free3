import React, {ChangeEvent} from "react";
import s from "../Counter/Counter.module.css";

type LocalType = {
    minLocalNumber: number
    maxLocalNumber: number
    setNumber: () => void
    setNumberMin: (event: ChangeEvent<HTMLInputElement>) => void
    setNumberMax: (event: ChangeEvent<HTMLInputElement>) => void
}

export const Localstorage = (props: LocalType) => {
    return <div className={s.container_local}>
        <div className={s.local_storage}>
            <div className={s.start}>
                <div>
                    <span className={s.val_local}>start value: </span>
                </div>
                <div>
                    <span className={s.val_local}>max value: </span>
                </div>
            </div>
            <div className={s.max}>
                <input
                    className={props.minLocalNumber < 0 || props.minLocalNumber >= props.maxLocalNumber ? s.error_input : ""}
                    type='number'
                    onChange={props.setNumberMin}
                    value={props.minLocalNumber}
                />
                <input
                    type='number'
                    onChange={props.setNumberMax}
                    value={props.maxLocalNumber}
                />
            </div>
        </div>
        <div className={s.button_group}>
            <button
                className={props.minLocalNumber < 0 || props.minLocalNumber >= props.maxLocalNumber ? s.stop : ""}
                onClick={props.setNumber}
                disabled={props.minLocalNumber < 0 || props.minLocalNumber >= props.maxLocalNumber}>
                SET
            </button>
        </div>
    </div>
}
