import React from 'react'
import './todobox.css'

function TodoBox({ prop }) {
    let bgColor;
    if (prop.completed == 0) {
        bgColor = '#F7F48B';
    } else if (prop.completed == 1) {
        bgColor = '#A2EF44';
    }
    return (
        <>
            <div className="box-container" style={{ backgroundColor: bgColor }}>
                <div className="title">{prop.title}</div>
            </div>
        </>
    )
}

export default TodoBox