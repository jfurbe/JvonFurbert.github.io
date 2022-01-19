import React, {useState} from 'react';
import {Alert, Col, Row, Button} from 'react-bootstrap';
import useGlobal, {MyState, MyActions, CommentsType} from './utils/CommentStateProvider';
import WriteComment from './WriteComment';

const Comment = ({props} :{props : CommentsType})=> {
   const [comment, actions] = useGlobal<CommentsType, MyActions>(
      (state: MyState)=> state.comments[state.commentVoteIndex.map((x)=> x.id).indexOf(props.comment.id)],
      (actions: MyActions)=> actions
    );
   
   
   const [votes,setVotes] = useState(0);
   let thiscomment = props.comment;
   
   //console.log(thiscomment)
   const [addResponse, isAddReponse] = useState(false);

   const incr = ()=> {
      actions.changeVotes(props, thiscomment.votes+1)
      setVotes((v)=> v+1)
   };
   const decr = ()=> {
      actions.changeVotes(props, thiscomment.votes-1)
         setVotes((v)=> v+1)
   };
   const timeDisplay = ()=> {
      let t = new Date().getTime() - thiscomment.date.getTime();
      return t < 60000 ? Math.ceil(t/1000) + ' seconds ago' :
       t < 3600000 ? Math.ceil(t/360000) + ' minutes ago' :
       Math.ceil(t/3600000) + ' hours ago'
   }
   

   return (
   <>
   <Alert variant="light">
   <Alert.Heading>{thiscomment.name} @ <a style={{fontStyle: 'italic',fontSize:'1rem' }}>{timeDisplay()}</a></Alert.Heading>
   <hr />
   <Row>
   <Col>
   <Button variant="dark" size="sm" onClick={()=> incr()}>Up</Button>
   <Button variant="dark" size="sm" className="mx-1" onClick={()=> decr()}>Down</Button>
   <p>{thiscomment.votes}</p>
   </Col>
   <Col md={9}><p className="mb-0" style={{fontSize:'1.2rem', textAlign:'justify'}}>{thiscomment.comment}</p></Col>
   </Row>
   <Row>
      <Col md={{offset: 10}}><Button variant="dark" onClick={()=> isAddReponse(!addResponse)}>Reply</Button></Col>
   </Row>
   {props.comments.length > 0 && 
   <Row>
      <hr className="mt-2"/>
      <Col md={{offset:1}}>{props.comments.map((comment)=> <Comment props={comment} />)}
      </Col>
   </Row>
   }
   
   {addResponse && 
      <Row >
         <hr className="mt-2"/>
         <WriteComment addComment={actions.addComment} commentId={props.comment.id} upCount={()=> isAddReponse(!addResponse)}/>
      </Row>
   }
   
   </Alert>
   
   </>
   )
}

export default Comment;