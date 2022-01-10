import * as React from 'react';
import {Alert, Col, Row, Button} from 'react-bootstrap';
import useGlobal, {MyState, MyActions, CommentsType} from './utils/CommentStateProvider';


const Comment = ({props} :{props : CommentsType})=> {
   const [comment, changeVotes] = useGlobal<CommentsType, (value: CommentsType, vote: number) => void>(
      (state: MyState)=> state.allComments[state.commentVoteIndex.map((x)=> x.id).indexOf(props.comment.id)],
      (actions: MyActions)=> actions.changeVotes
    );
   const [votes,setVotes] = React.useState(0);
   //const [date, setDate] = React.useState(new Date().getTime()-comment.comment.date.getTime())

   const incr = ()=> {
      changeVotes(comment, comment.comment.votes+1)
      setVotes((v)=> v+1)
   };
   const decr = ()=> {
      changeVotes(comment, comment.comment.votes-1)
         setVotes((v)=> v+1)
   };
   const timeDisplay = ()=> {
      let t = new Date().getTime() - comment.comment.date.getTime();
      return t < 60000 ? Math.ceil(t/1000) + ' seconds ago' :
       t < 3600000 ? Math.ceil(t/360000) + ' minutes ago' :
       Math.ceil(t/3600000) + ' hours ago'
   }

   return (
   <Alert variant="light">
   <Alert.Heading>{comment.comment.name} @ <a style={{fontStyle: 'italic',fontSize:'1rem' }}>{timeDisplay()}</a></Alert.Heading>
   <hr />
   <Row>
   <Col>
   <Button variant="dark" size="sm" onClick={()=> incr()}>Up</Button>
   <Button variant="dark" size="sm" className="mx-1" onClick={()=> decr()}>Down</Button>
   <p>{comment.comment.votes}</p>
   </Col>
   <Col md={9}><p className="mb-0" style={{fontSize:'1.2rem', textAlign:'justify'}}>{comment.comment.comment}</p></Col>
   </Row>
   </Alert>
   )
}

export default Comment;