import React, {useState} from 'react'; 
import './style.css';
import { getTarget, getWinner} from './GameLogic';

export default function Dashboard({rounds, setWinner, computerScore, userScore}) {
    
    const [userGuess, setUserGuess] = useState(0);
    const [computerGuess, setComputerGuess] = useState("?");
    const [target, setTarget] = useState("?");
    const [win, setWin] = useState("");
    const subtractGuess = ()=> {
        setUserGuess((prevNum)=>prevNum-1)
    }

    const addGuess = ()=> {
        setUserGuess((prevNum)=>prevNum+1)
    }

    const handleGuess= ()=> {
        let results = getWinner(userGuess)
        console.log(results)
        setTarget(results[1]);
        setComputerGuess(results[2]);
        setWin(results[0]);
        setWinner(results[0]);
        
    }

    const nextRound = ()=> {
        setTarget('?')
        setComputerGuess("?");
        setUserGuess(0)
        
    }
    return(
        <div>
           <h1 style={{textAlign: "center"}}>Number Guesser</h1>

           <div className="rounds">
                <p className="round-label">Round <span id="round-number">{rounds}</span></p>
                <p className="guess-label">Target Number: <span id="target-number">{target}</span></p>
                {target != "?" ? <p>Winner is {win}!</p> : <p></p>}
            </div>

            <div className="guessing-area">
                <div className="guess computer-guess">
                <div className="guess-title">
                    <p className="guess-label">Computer</p>
                    <p className="score-label">Score: <span id="computer-score">{computerScore}</span></p>
                </div>
                <p id="computer-guess">{computerGuess}</p>
                <p className="winning-text" id="computer-wins"></p>
            </div>
            <div className="guess human-guess">
                <div className="guess-title">
                    <p className="guess-label">You</p>
                    <p className="score-label">Score: <span id="human-score">{userScore}</span></p>
                </div>
                <input type="number" id="human-guess" min={0} max={9} value={userGuess}/>
                <div className="number-controls">
                    <button className="number-control left" id="subtract" onClick={subtractGuess} disabled={userGuess==0}>-</button>
                    <button className="number-control right" id="add" onClick={addGuess} disabled={userGuess==9}>+</button>
                </div>
                <button className="button" id="guess" onClick={handleGuess} disabled={target!="?"}>Make a Guess</button>
                </div>

            </div>

            <div className="next-round-container" style={{textAlign: "center" }}>
                    <button className="button" id="next-round" onClick={nextRound} disabled={target==="?"}>Next Round</button>
                </div>

            <div class="instructions">
                <div class="instruction">
                    <h3>Step 1</h3>
                    <p>Input a number between 0 and 9</p>
                </div>
                <div class="instruction">
                    <h3>Step 2</h3>
                    <p>Click "Make a Guess" to submit your guess and see who won the round.</p>
                </div>
                <div class="instruction">
                    <h3>Step 3</h3>
                    <p>Click "Next Round" to play again.</p>
                </div>
            </div>
        </div>
    )
}

