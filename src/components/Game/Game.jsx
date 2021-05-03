import React, { useState } from 'react'
import './game.css'

import checkWin from './win'

function Game({ dimensions, setResult }) {
    const { width, height, win } = dimensions;
    // Board
    const [blocks, setBlocks] = useState(Array(height).fill(Array(width).fill('')))
    const [blockSize] = useState({
        height: `${80/Math.max(height, width)}vh`, 
        width: `${80/Math.max(height, width)}vh`
    })
    // For checking whose turn it is
    const [count, setCount] = useState(0);
    // Checking for draw  
    const [empty, setEmpty] = useState(width*height)
    // Winning blocks
    const [won, setWon] = useState({});


    function DisplayTable() {
        return blocks.map((row, i) => <tr key={i}>{
            row.map((block, a) => {
                // Checks if current spot in winning one
                let isWon = won[`${i}-${a}`] ? { backgroundColor: 'green' } : {};
    
                return <td 
                    key={a} 
                    style={{ ...blockSize, ...isWon }} 
                    onClick={() => {
                        // Checks if spot in already taken
                        return block ? false : handlePlay(i, a);
                    }}
                >
                    { block }
                </td>
            })    
        }</tr>) 
    }

    
    function handlePlay(x, y) {
        let blocksCopy = blocks.map(arr => arr.slice()) // Copying board
        let turn = count%2 === 0 ? 'O' : 'X'; // Checking whose turn it was 

        blocksCopy[x][y] = turn; // assigning move
        
        setCount(count+1); 
        setEmpty(empty-1); // Decreases empty spots count
        setBlocks(blocksCopy); // Update board

        // Settimeout to give some time for updating board
        setTimeout(() => { 
            if(checkWin(x, y, blocksCopy, win, turn, setWon)) return setResult(`${turn} Won!`) 

            else if(empty === 1) return setResult(`Draw`) 
        }, 100)
    }


    return (
        <table className='game'>
            <tbody>

                <DisplayTable />

            </tbody>
        </table>
    )
}

export default Game
