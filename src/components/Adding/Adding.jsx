import React, { useState } from 'react';
import './Adding.css'

function Adding({ todo }) {
    const [showForm, setShowForm] = useState(false);
    const [name, setName] = useState('');
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const newSaving = {
          id: Date.now(),
          title: name,
          completed: 0, 
        };
        todo(newSaving);
        setName('');
        setShowForm(false);
      };

    return (
        <>
            {!showForm ? (<div className="plus-icon" onClick={() => setShowForm(true)}>
                <img className="➕"src="https://cdn-icons-png.flaticon.com/512/4210/4210903.png" alt="+" />
            </div>
            ) :(
            <div className='form'>
                <form onSubmit={handleSubmit}>
                    <h2>Add New Saving</h2>
                    <label>
                        Todo:
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                    </label>
                    <button id="form1"type="submit">Add Saving</button>
                </form>
            </div>
                )}
        </>
  );
}

export default Adding;
