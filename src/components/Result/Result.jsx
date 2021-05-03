import React from 'react'
import './result.css'

function Result({ result, setResult, setDesiplayGame }) {
    function handleClick() {
        setResult(false);
        setDesiplayGame(false);
    }

    return (
        <div onClick={handleClick}  className='result'>
            <h1>{ result }</h1>
        </div>
    )
}

export default Result
