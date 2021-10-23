import React, {useState} from 'react'; 
import ReactDOM from 'react-dom';
import CopyCatContainer from './CopyCatContainer';
import Guesser from './Number-Guesser/index'
import MazeSolver from './Maze-solver/index'

const AppI = ()=> {
    
    const [copyCat, setCopyCat] = useState(false)
    const [guesser, setGuesser] = useState(false)
    const [mazer, setMazer] = useState(false)
    
    const handleClick=()=>{
        setCopyCat(!copyCat)
        setGuesser(false)
        setMazer(false)
    }

    const handleGuesserClick=()=>{
        setGuesser(!guesser)
        setCopyCat(false)
        setMazer(false) 
    }

    const handleMazerClick=()=>{
        setMazer(!mazer)
        setCopyCat(false)
        setGuesser(false) 
    }

    return(
        <div>
            <h1>Randoms R Us</h1>
            <button onClick={handleClick}>
             Copying Cat
            </button>
            <button onClick={handleGuesserClick}>
             Number Guesser
            </button>
            <button onClick={handleMazerClick}>
             Maze Solver
            </button>
            {copyCat && <CopyCatContainer/>}
            {guesser && <Guesser/>}
            {mazer && <MazeSolver/>}
        </div>
    )
}

ReactDOM.render(
    <AppI />,
    document.querySelector('#root')
)