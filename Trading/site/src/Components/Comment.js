import React, {useState, useEffect} from 'react'; 
import {Button, Card, Col, Row} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp, faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from "../Util/UserProvider";


const Voting = ({id, votes, comment, handleVotes})=> {
   const [vote, setVote] = useState(votes)
   const votesUp = ()=> {
     setVote(vote+1)
     console.log(id)
      handleVotes(id, true)
   }
   return(
      <div>
      
      <Button variant="light" onClick={votesUp}><FontAwesomeIcon icon={faThumbsUp}  /></Button>
         {vote}
      <Button variant="light" onClick={()=> setVote(vote-1)}><FontAwesomeIcon icon={faThumbsDown}  className="px-1"/></Button>

      </div>
   )

}

const Comment = ({comment, handleVotes})=> {
   const [ state, dispatch ] = React.useContext(UserContext) //Global state set up in Reducer
   const [votes, setVotes] = useState(comment.comments.map((x)=> [x.votes, x.id[x.id.length-1]]).sort().reverse())
   const [reply, setReply] = useState([])
   const [posting, setPosting] = useState(false);
   //console.log (comment, votes)
   
   const handleReply = ()=> {
      setPosting(!posting)
     // setReply((oldReply)=> [...oldReply, <Comment comments handleVotes={handleVotes}/>])
   }

   const handlePosting = ()=> {
      let text = document.getElementById('textArea').value;
      let newComment = {
         id: comment.id + '.' + comment.comments.length.toString(),
         userName: 'User',
         message: text,
         votes: 0,
         timeStamp: Date.now(),
         comments: []
      }
    //console.log(state)
      state.updatePost(comment, newComment, dispatch);
      setPosting(false);
   }
   useEffect(()=> {
      setVotes(comment.comments.map((x)=> [x.votes, x.id[x.id.length-1]]).sort().reverse())
   }, [comment.comments])
  
   return (
      <>
   <Card.Title className="pt-2 px-3">{comment.userName} <h6 className="text-primary">{comment.timeStamp}</h6></Card.Title>
    <Card.Body className="pt-0">
     {comment.message}
      <Row className="mt-2 pb-2">
      <Col className="text-center" md={{ span: 4, offset: 0}} className='mx-0'>
         <Voting id={comment.id} votes={comment.votes} comment={comment} handleVotes={handleVotes} />
      </Col>
      <Col className="text-center" md={{ span: 1, offset: 7 }} >
         <Button  variant="outline-dark" onClick={handleReply}>Reply</Button>
      </Col>
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
      </Row>
    
    <Row>
        <Col md={{offset: 1 }} >
          
     {comment.comments.length == votes.length && comment.comments.map((x,i)=> <Comment comment={comment.comments[parseInt(votes[i][1])]} handleVotes={handleVotes}/>)}
         </Col>
     </Row>
     </Card.Body>
  
  </>
   )
}

export default Comment;