/****************************************************************************
  FileName      [ CurRow.js ]
  PackageName   [ src/components ]
  Author        [ Cheng-Hua Lu ]
  Synopsis      [ This file generates the CurRow. ]
  Copyright     [ 2022 10 ]
****************************************************************************/

import "./css/Row.css";
import React from 'react';


const CurRow = ({ curGuess, rowIdx }) => {
    let letters = curGuess.split('');
    const rowId = ["row_0", "row_1", "row_2", "row_3", "row_4", "row_5"];
    const idAndKey=[["0-0", "0-1","0-2","0-3","0-4"],
    ["1-0", "1-1","1-2","1-3","1-4"],
    ["2-0", "2-1","2-2","2-3","2-4"],
    ["3-0", "3-1","3-2","3-3","3-4"],
    ["4-0", "4-1","4-2","4-3","4-4"],
    ["5-0", "5-1","5-2","5-3","5-4"],];
    return (
        <div id={rowId[rowIdx]} key={rowId[rowIdx]} className='Row-container'>
            {/* TODO 3: Row Implementation -- CurRow */}
            
            {/* ↓ Default row, you should modify it. ↓ */}
            <div className='Row-wrapper current'>
                <div id={idAndKey[rowIdx][0]} key={idAndKey[rowIdx][0]} className='Row-wordbox'>{curGuess[0]}</div>
                <div id={idAndKey[rowIdx][1]} key={idAndKey[rowIdx][1]} className='Row-wordbox'>{curGuess[1]}</div>
                <div id={idAndKey[rowIdx][2]} key={idAndKey[rowIdx][2]} className='Row-wordbox'>{curGuess[2]}</div>
                <div id={idAndKey[rowIdx][3]} key={idAndKey[rowIdx][3]} className='Row-wordbox'>{curGuess[3]}</div>
                <div id={idAndKey[rowIdx][4]} key={idAndKey[rowIdx][4]} className='Row-wordbox'>{curGuess[4]}</div>
            </div>
            {/* ↑ Default row, you should modify it. ↑ */}
        </div>
    )
}

export default CurRow;
