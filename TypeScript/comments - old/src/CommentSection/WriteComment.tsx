import * as React from 'react';
import {Form, Button} from 'react-bootstrap';
import {MyState, MyActions, CommentsType} from './utils/CommentStateProvider';

type WriteCommentProps = {
   addComment : (comment: CommentsType, commentId:string)=> void; 
   commentId : string;
   upCount: ()=> void
}
function WriteComment (
                     props : WriteCommentProps
                  ) {
   const [input, setInput] = React.useState('');

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=> {
      e.preventDefault()
      let newComment = {
         comment : {
            id: props.commentId === "-1" ? 
               String(Math.floor(Math.random() * 999) + 1) : 
               props.commentId + " " + String(Math.floor(Math.random() * 999)+1),
            name: 'test',
            comment: input,
            votes:0,
            date: new Date(),
         },
         comments: [],
         commentVoteIndex: [],
      }
      props.addComment(newComment, props.commentId);
      setInput('Happy Days');
      props.upCount()
   }

 return (
   <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="CommentTextarea">
         <Form.Control 
         as="textarea" 
         placeholder="Enter Comment Here"  
         rows={3} 
         onChange = {(e)=> setInput(e.target.value)}
         />
      </Form.Group>
      <Button variant="primary" type="submit">
         Submit
      </Button>
   </Form>
 ) 
}

export default WriteComment;