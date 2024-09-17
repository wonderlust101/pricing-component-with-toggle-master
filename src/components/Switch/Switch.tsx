import React from "react";
import './Switch.scss'

type SwitchProps = {
    onToggle: React.ChangeEventHandler<HTMLInputElement>;
}

export default function Switch({onToggle}: SwitchProps) {
    return (
        <div className="switch__layout">
            <div className="switch__container">
                <input className="switch__box"
                       type="checkbox"
                       id="check"
                       onChange={onToggle}/>
                <label className="switch" htmlFor="check"></label>
            </div>
        </div>
    )
}