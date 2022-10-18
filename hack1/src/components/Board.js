/****************************************************************************
  FileName      [ Board.js ]
  PackageName   [ src/components ]
  Author        [ Cheng-Hua Lu ]
  Synopsis      [ This file generates the Board. ]
  Copyright     [ 2022 10 ]
****************************************************************************/

import Row from "./Row";
import './css/Board.css';
import React from "react";
import CurRow from "./CurRow";

const Board = ({ turn, guesses, curGuess }) => {

    let row = [<Row id="row_0" key="row_0" guess={guesses} rowIdx={0}/>, 
    <Row id="row_1" key="row_1"  guess={guesses} rowIdx={1}/>, 
    <Row id="row_2" key="row_2"  guess={guesses} rowIdx={2}/>, 
    <Row id="row_3" key="row_3"  guess={guesses} rowIdx={3}/>, 
    <Row id="row_4" key="row_4"  guess={guesses} rowIdx={4}/>, 
    <Row id="row_5" key="row_5"  guess={guesses} rowIdx={5}/>];
    
    row[turn] = <CurRow curGuess={curGuess} rowIdx={turn}/>

    return (
        <div className="Board-container">
            {/* TODO 2-2: show 6 rows (map function is recommended) and defined row's key.
                Hint: Use `CurRow` instead of `Row` when you are passing `curGuess` into it. */}
            
            {row}
        </div>
    )
};
export default Board;
