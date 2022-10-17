/****************************************************************************
  FileName      [ Board.js ]
  PackageName   [ src/components ]
  Author        [ Cheng-Hua Lu ]
  Synopsis      [ This file generates the Board. ]
  Copyright     [ 2022 10 ]
****************************************************************************/

import './css/Board.css'
import Cell from './Cell';
import Modal from './Modal';
import Dashboard from './Dashboard';
import { revealed } from '../util/reveal';
import createBoard from '../util/createBoard';
import React, { useEffect, useState } from 'react';


const Board = ({ boardSize, mineNum, backToHome }) => {
    const [board, setBoard] = useState([]);                     // An 2-dimentional array. It is used to store the board.
    const [nonMineCount, setNonMineCount] = useState(0);        // An integer variable to store the number of cells whose value are not '💣'.
    const [mineLocations, setMineLocations] = useState([]);     // An array to store all the coordinate of '💣'.
    const [gameOver, setGameOver] = useState(false);            // A boolean variable. If true, means you lose the game (Game over).
    const [remainFlagNum, setRemainFlagNum] = useState(0);      // An integer variable to store the number of remain flags.
    const [win, setWin] = useState(false);                      // A boolean variable. If true, means that you win the game.

    useEffect(() => {
        // Calling the function
        freshBoard();
    }, []);

    // Creating a board
    const freshBoard = () => {
        const newBoard = createBoard(boardSize, mineNum);
        // Basic TODO: Use `newBoard` created above to set the `Board`.
        // Hint: Read the definition of those Hook useState functions and make good use of them.
        let temp = [];
        for(var y = 0; y < boardSize; y++){
            let row = [];
            for(var x = 0; x < boardSize; x++){
                row.push(newBoard.board[x][y]);
            }
            temp.push(row);
        }
        setBoard(temp);
        setRemainFlagNum(mineNum);
        setMineLocations(newBoard.mineLocations);
        setNonMineCount(boardSize*boardSize-mineNum);
        setGameOver(false);
        setWin(false);
    }

    const restartGame = () => {
        freshBoard();
        setGameOver(false);
        setWin(false);
    }

    // On Right Click / Flag Cell
    const updateFlag = (e, x, y) => {
        // To not have a dropdown on right click
        e.preventDefault();
        // Deep copy of a state
        let newBoard = JSON.parse(JSON.stringify(board));
        let newFlagNum = remainFlagNum;
        let temp = [...board];
        if(!temp[y][x].revealed){
            if(temp[y][x].flagged){
                temp[y][x].flagged = 0;
                setRemainFlagNum(remainFlagNum + 1);
            }
            else if(remainFlagNum !== 0){
                temp[y][x].flagged = 1;
                setRemainFlagNum(remainFlagNum - 1);
            }
        }
        setBoard(temp);
        // Basic TODO: Right Click to add a flag on board[x][y]
        // Remember to check if board[x][y] is able to add a flag (remainFlagNum, board[x][y].revealed)
        // Update board and remainFlagNum in the end

    };

    const revealCell = (x, y) => {
        if(x < 0 || x >= boardSize || y < 0 || y > boardSize) return;
        if (board[y][x].revealed || gameOver || board[y][x].flagged) return;
        let newBoard = JSON.parse(JSON.stringify(board));
        let temp = [...board];
        let bomb = false;
        for(var i = 0; i < mineLocations.length; i++){
            if(x === mineLocations[i][0] && y === mineLocations[i][1]){
                bomb = true;
            }
        }
        if(bomb){
            for(var i = 0; i < mineLocations.length; i++){
                temp[mineLocations[i][1]][mineLocations[i][0]].revealed = 1;
            }
            setWin(false);
            setGameOver(true);
        }
        else if(nonMineCount > 1){
            temp[y][x].revealed = 1;
            setNonMineCount(nonMineCount - 1);
        }
        else{
            temp[y][x].revealed = 1;
            setWin(true);
            setGameOver(true);
        }
        // Basic TODO: Complete the conditions of revealCell (Refer to reveal.js)
        // Hint: If `Hit the mine`, check ...?
        //       Else if `Reveal the number cell`, check ...?
        // Reminder: Also remember to handle the condition that after you reveal this cell then you win the game.

    };

    return (
        <div className='boardPage' >
            <div className='boardWrapper' >
                

                {/* Advanced TODO: Implement Modal based on the state of `gameOver` */}
                {(gameOver)===true? <Modal restartGame={restartGame} backToHome={backToHome} win={win}/>: null}
                {/* Basic TODO: Implement Board 
                Useful Hint: The board is composed of BOARDSIZE*BOARDSIZE of Cell (2-dimention). So, nested 'map' is needed to implement the board.
                Reminder: Remember to use the component <Cell> and <Dashboard>. See Cell.js and Dashboard.js for detailed information. */}
                <div className='boardContainer'>
                    <Dashboard remainFlagNum={remainFlagNum} gameOver={gameOver}/>
                    {board.map((e, y) => <div id={"row".concat(y)} style = {{display: "flex"}}>{e.map((ee, x)=> <Cell id={"{y}-{x}"} rowIdx={y} colIdx={x} detail={ee} updateFlag={updateFlag} revealCell={revealCell}/>)}</div>)}
                </div>
            </div>
        </div>
    );



}

export default Board