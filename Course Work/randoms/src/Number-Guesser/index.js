import React, {useState} from 'react'; 
import './style.css';
import Dashboard from './Dashboard'

export default function Guesser() {
    const [computerScore, setComputerScore] = useState(0);
    const [userScore, setUserScore] = useState(0);
    const [rounds, setRounds] = useState(1);
    
    const setWinner = (winner)=> {
        console.log(winner)
        winner === "user" ? setUserScore((prevScore)=>prevScore+1) :
                            setComputerScore((prevScore)=>prevScore+1);

        setRounds((prevRound)=>prevRound+1)    
    }
    
    return(
        <div>
           <Dashboard setWinner={setWinner} rounds={rounds} computerScore={computerScore} userScore={userScore}/>
        </div>
    )
}

