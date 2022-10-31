import React,{useState} from 'react'
import './App.css';
import {guess, startGame, restart} from './axios.js'

function App() {
  const [started, setStarted] = useState(false);
  const [won, setWon] = useState(false);
  const [input, setInput] = useState('');
  const [playerGuess, setPlayerGuess] = useState('');
  const [guessTime, setGuessTime] = useState(0);
  const [status, setStatus] = useState('');
  const [winner, setWinner] = useState('');
  const [compGuess, setCompGuess] = useState('');
  const [compStatus, setCompStatus] = useState('');
  const [ans, setAns] = useState('');
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);


  const handleGuess = async() => {
    const reply = await guess(input);
    setGuessTime(guessTime + 1);
    setPlayerGuess(input);
    if(reply === 'Equal'){
      setAns(input);
      setWon(true);
      setWinner('You');
      return;
    }
    else{
      if(reply === 'Bigger'){
        setMin(Number(playerGuess));
      }
      else if(reply === 'Smaller'){
        setMax(Number(playerGuess));
      }
      setStatus(reply);
      var randGuess = Math.floor(Math.random()*100) + 1;
      const compReply = await guess(randGuess);
      setCompGuess(randGuess);
      if(compReply === 'Equal'){
        setWon(true);
        setWinner('Computer');
        setAns(randGuess);
        return;
      }
      else{
        setCompStatus(compReply);
        return;
      }
    }
  }

  let currentStatus;

  if(guessTime !== 0){
    currentStatus = 
    <div id='status'>
      <div>Your guess is {playerGuess}.</div>
      <div>Your status is :{status}.</div>
      <div>Computer's guess is {compGuess}.</div>
      <div>Computer's status is :{compStatus}.</div>
      <div>You have guessed {guessTime} time.</div>
    </div>
  }
  else{
    currentStatus = null;
  }

  const game = 
  <div className='box'>
    <div>Guess a number between 1 and 100</div>
      <div>
        <input id='inpt' onChange={(e)=>{setInput(e.target.value)}}></input>
        <button className='btn' onClick={handleGuess}>guess</button>
      </div>
    {currentStatus}
  </div>;

  const menu = 
   <div className='box'>
    <div>Number Guessing Game</div>
    <button className='btn' onClick={async()=>{
      setStarted(true);
      await startGame();
    }}>Start</button>
   </div>;

  
  
  const restartMenu =
  <div className='box'>
    <div>{winner} won in {guessTime} time!</div>
    <div>The number is {ans}.</div>
    <button className='btn' onClick={async()=>{
      await restart();
      setWon(false);
      setStarted(true);
      setInput('');
      setGuessTime(0);
      setStatus('');
      setPlayerGuess('');
      setWinner('');
      setAns('');
    }}>Restart</button>
  </div>;

  let view;
  
  if(!started){
    view = menu;
  }
  else if(!won){
    view = game;
  }
  else{
    view = restartMenu;
  }

  return (
    <div className='main'>
      {view}
    </div>
  );
}

export default App;
