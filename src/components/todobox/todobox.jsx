import React, { useState } from 'react'
import './todobox.css'

function TodoBox({ prop }) {
    const [isChecked, setIsChecked] = useState(prop.completed);
    const [bgColor, setBgColor] = useState(prop.completed ? '#A2EF44' : '#F7F48B');
    const handleCheckboxChange = () => {
        const newIsChecked = !isChecked;
        setIsChecked(!isChecked);
        setBgColor(newIsChecked ? '#A2EF44' : '#F7F48B');
    }
    return (
        <>
            <div className="box-container" style={{ backgroundColor: bgColor }}>
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                />
                <div className="text">{prop.title}</div>
            </div>
        </>
    )
}

export default TodoBox