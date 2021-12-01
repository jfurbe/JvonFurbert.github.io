import React, {useState, useEffect} from 'react';
import {Accordion, Card, Button, useAccordionButton, Container, Row, Col} from 'react-bootstrap';
import Comment from './Comment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp} from '@fortawesome/free-solid-svg-icons'
import { UserContext } from "../Util/UserProvider";
//var commentsIn = require('../ext/commentsIn');

const CustomToggle = ({ children, eventKey })=> {
   
   const [icon, setIcon] = useState(faAngleUp)
   const decoratedOnClick = useAccordionButton(eventKey, () =>
      icon == faAngleDown ? setIcon(faAngleUp) : setIcon(faAngleDown)
    );
      return (
         <Button size="sm" variant="outline-secondary" 
         onClick={decoratedOnClick} 
         style={{float:'right'}}><FontAwesomeIcon icon={icon}/> </Button>
         
      )
   }

//console.log(JSON.stringify(commentsIn))

const CommentArea = ({ post})=> {
   const [ state, dispatch ] = React.useContext(UserContext) //Global state set up in Reducer
   const [posting, setPosting] = useState(false);
   const [comments, setComments] = useState(state.comments)
   const [votes, setVotes] = useState(state.comments.map((x)=> [x.votes, x.id]).sort().reverse())
   
   
   const handleVotes = (i, sign)=> {
      
      let temp = comments
      let tempC = temp;
      if (i.includes('.')) {
         i.split('.').map((x)=> {
            if (tempC[parseInt(x)].id != i){ console.log(tempC.id)
            tempC=tempC[parseInt(x)].comments}})

         sign ? tempC[parseInt(i.slice(-1))].votes +=1 : tempC[parseInt(i.slice(-1))].votes -= 1
      }
      else {
         sign ? temp[i].votes +=1 : temp[i].votes -= 1
      }
    //  votes > 5 && console.log(comments)
   }
   const handlePosting = ()=> {
      let text = document.getElementById('textArea').value;
      let newComment = {
         id: comments.length.toString(),
         userName: 'User',
         message: text,
         votes: 0,
         timeStamp: Date.now(),
         comments: []
      }
      post(newComment, dispatch);
      setPosting(false);
   }

   useEffect(()=> {
      setComments(state.comments)
      setVotes(state.comments.map((x)=> [x.votes, x.id]).sort().reverse())
      console.log(votes, comments.length)
   }, [state.comments])

   
   return (
   <Container>
      <Button onClick={()=>setPosting(!posting)} className="pt-2 mb-3">Add Comment</Button>
      {posting &&
      <Row>
         <Col md={{ span: 10, offset: 1 }}>
         <textarea id="textArea" className="form-control" aria-label="With textarea"></textarea>
         </Col>
      <Col md={{ span: 1, offset: 10 }}>
      <Button variant="outline-dark" className="my-3" onClick={handlePosting}>Post</Button>
      </Col>
      </Row>
         }
      <Accordion defaultActiveKey="0" flush >
      <Card bg="light" className="mb-2">
        <Card.Header > <CustomToggle eventKey="0" ></CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
        <div>
        {state.comments.length == comments.length && state.comments.map((x,i)=> <Comment comment={state.comments[parseInt(votes[i][1])]} handleVotes={handleVotes}/>)
        }
        </div>
        </Accordion.Collapse>
      </Card> 
      </Accordion>
   </Container>
   )
}

export default CommentArea;