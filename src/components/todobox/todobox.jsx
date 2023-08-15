import React, { useState } from 'react'
import './todobox.css'

function TodoBox({ prop }) {
    const [isChecked, setIsChecked] = useState(prop.completed);
    const [bgColor, setBgColor] = useState(prop.completed ? '#A2EF44' : '#F7F48B');
    const handleCheckboxChange = () => {
        console.log('Checkbox clicked');
        const newIsChecked = !isChecked;
        console.log('New isChecked:', newIsChecked);
        setIsChecked(newIsChecked);
        const newBgColor = newIsChecked ? '#A2EF44' : '#F7F48B';
        console.log('New bgColor:', newBgColor);
        setBgColor(newBgColor);
      };
      
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