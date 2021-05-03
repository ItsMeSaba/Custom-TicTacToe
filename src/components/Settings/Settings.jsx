import React, { useState } from 'react'
import './settings.css'

function Settings({ setDesiplayGame, setDimensions }) {
    const [height, setHeight] = useState(0)
    const [width, setWidth] = useState(0)
    const [win, setWin] = useState(0)

    function handleSubmit(e) {
        e.preventDefault();
        let c = Math.floor(Math.sqrt(height**2 + width**2));

        // Checks if win is possible
        if(win > c) return alert('Impossible to win enter different properties')

        setDimensions({
            height,
            width,
            win
        })

        setDesiplayGame(true);
    }

    return (
        <form className='settings flexCenter' onSubmit={handleSubmit}>

            <NumberInput name='Width' setState={setWidth} />
            <NumberInput name='Height' setState={setHeight} />
            <NumberInput name='Win on' setState={setWin} />

            <input type="submit" value="Generate"/>
        </form>
    )
}


function NumberInput({ name, setState }) {
    return (
        <div className="numberInput">
            <p>{ name }</p>

            <input type="number" min='1' required onChange={e => setState(parseInt(e.target.value))}  />
        </div>
    )
}

export default Settings
 