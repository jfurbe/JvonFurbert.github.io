import React, {useState, useEffect} from 'react'; 
import {Alert, Col, Row, Container} from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import MazeBuilder from './MazeGenerator';
import prize from './Blocks/mazeBG.jpg';
import wall from './Blocks/wall.png';
import bg from './Blocks/bg.jpg';

const maze = new MazeBuilder(6,6);
const pageWidth = window.innerWidth;
const pageHeight = window.innerHeight -100;
const [start, end] = [maze.maze[0].map((x,i)=> x.length > 1 && i).filter((x)=> x), 
                        maze.maze[maze.cols-1].map((x,i)=> x!=['wall'] && i)].filter((x)=> x)


let cellSize = Math.round(pageHeight/ maze.rows) 
let pos1 = 1;
let pos2 = start[0];
let myVar;


const getNewPosition = (pos1, pos2, old, setOld)=> {
    myVar = pos1 +"x"+pos2
    let start = [pos1, pos2]
    setOld((prev)=> [...prev, start])
    document.getElementById(myVar).src=bg  
    document.getElementById(myVar).src=prize  
    
    let arrayCheck = (a1, a2)=> {
        console.log(a2,a1)
        return !JSON.stringify(a2).includes(JSON.stringify(a1))

    }

    let checkWin = (pos1, pos2)=> {
       return maze.maze[pos1][pos2].length > 1 && <Win/>
    }
    
    let south = [pos1+1, pos2]
    if  (maze.maze[south[0]][south[1]] != 'wall' && arrayCheck(south,old)) {
        return [...south, old]
    }
    let west = [pos1, pos2+1]
    if  (maze.maze[west[0]][west[1]] != 'wall' && arrayCheck(west,old)){
        return [...west, old]
    }
    let east = [pos1, pos2-1]
    if  (maze.maze[east[0]][east[1]] != 'wall' && arrayCheck(east,old)){
        return [...east, old]
    }
    let north = [pos1-1, pos2]
    if (maze.maze[north[0]][north[1]] != 'wall' && arrayCheck(north,old)){
        return [...north, old]
    }

    //setOld((prev)=> [...prev, start])
    old.pop()
    setOld((prev)=> [start, ...prev])
    return [...old.pop(), old]
}

function Win() {
    return(
        <h1>You Win</h1>
    )
}

export default function MazeBuild() {
   // const [pageWidth, setPageWidth] = useState('');
   let myVar;
   let myInterval;
   const [old, setOld] = useState([[0,start[0]]])


    useEffect(()=> {
        console.log(pos1,pos2)
        
       myInterval = setInterval(function(){ 
            [pos1, pos2] = getNewPosition(pos1, pos2, old, setOld)
                        
        }, 500); 
        return ()=> clearInterval(myInterval)
    }, [old])
    
    return(
        <div>
        
           <Alert variant="success" className="m-5">
                <Alert.Heading style={{textAlign: "center"}}>Build the Maze</Alert.Heading>
               
                <hr />
                <Container>
                
                {maze.maze.map((row,i)=>{

                    return (
                        <Row id={i}>
                            <Col>
                            {row.map((x,j)=> x.length==0 ?
                            <Image id={i+"x"+j} src={bg} style={{width:cellSize, height:cellSize}} rounded /> :
                            x.includes("wall") ?
                            <Image id={i+"x"+j} src={wall} style={{width:cellSize, height:cellSize}} rounded /> :
                            <Image id={i+"x"+j} src={prize} style={{width:cellSize, height:cellSize}} rounded /> 
                            )}
                            </Col>
                        </Row>
                    )
                })}
                

            
            </Container>
            
            </Alert>
           
        </div>
    )
}