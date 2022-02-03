import React, {useState} from 'react';
import {Alert, Col, Row, Button} from 'react-bootstrap';
import {CommentsType, commentStore, CommentIndex, uniCommentStack, uniVar, uniReference} from './store/store';
import {useRecoilState, useRecoilValue} from 'recoil';
import WriteComment from './WriteComment';
import ResponseArr from './ResponseArr';

type Comms = {
   comment: any,
   color: string
}


const Comment = ({comment, color}: Comms)=> {
   //console.log(comment)
   const [theComment, setTheComment] = useRecoilState<CommentsType>(comment)
   const [addResponse, isAddResponse] = useState(false);
   const thisComment = theComment.comment;

   const incr = ()=> {
     setTheComment({
        ...theComment,
        comment : {
           ...thisComment,
           votes: thisComment.votes + 1
        }
     })
   };
   const decr = ()=> {
      setTheComment({
         ...theComment,
         comment : {
            ...thisComment,
            votes: thisComment.votes - 1
         }
      })
   };

   const timeDisplay = ()=> {
      let t = new Date().getTime() - thisComment.date.getTime();
      return t < 60000 ? Math.ceil(t/1000) + ' seconds ago' :
       t < 3600000 ? Math.ceil(t/360000) + ' minutes ago' :
       Math.ceil(t/3600000) + ' hours ago'
   }
   
   console.log(comment)

   return (
   <>
   <Alert variant="light" style={{backgroundColor:color}}>
   <Alert.Heading>{thisComment.name} @ <a style={{fontStyle: 'italic',fontSize:'1rem' }}>{timeDisplay()}</a></Alert.Heading>
   <hr />
   <Row>
   <Col>
   <Button variant="dark" size="sm" onClick={()=> incr()}>Up</Button>
   <Button variant="dark" size="sm" className="mx-1" onClick={()=> decr()}>Down</Button>
   <p>{thisComment.votes}</p>
   </Col>
   <Col md={9}><p className="mb-0" style={{fontSize:'1.2rem', textAlign:'justify'}}>{thisComment.comment}</p></Col>
   </Row>
   <Row>
      <Col md={{offset: 10}}><Button variant="dark" onClick={()=> isAddResponse(!addResponse)}>Reply</Button></Col>
   </Row>
   
   {addResponse && 
      <Row >
         <hr className="mt-2"/>
         <WriteComment comment={comment} response={isAddResponse}/>
      </Row>
   }
   
   {theComment.comments.length > 0 && 
   <Row>
      <hr className="mt-2"/>
      <Col md={{offset:1}}>{<ResponseArr commRef={comment}/>}
      </Col>
   </Row>
   } 
   </Alert>
   
   </>
   )
}

export default Comment;