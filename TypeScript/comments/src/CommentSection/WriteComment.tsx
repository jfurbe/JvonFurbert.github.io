import * as React from 'react';
import {Form, Button} from 'react-bootstrap';
import useGlobal, {MyState, MyActions, CommentsType} from './utils/CommentStateProvider';

const WriteComment = ({upCount} : any)=> {
   const [input, setInput] = React.useState('');
   const [comments, addComment] = useGlobal<CommentsType[], (value: CommentsType) => void>(
      (state: MyState)=> state.allComments,
      (actions: MyActions)=> actions.addComment
    );
   
   

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=> {
      e.preventDefault()
      let newComment = {
         comment : {
            id: Math.floor(Math.random() * 999) + 1,
            name: 'test',
            comment: input,
            votes:0,
            date: new Date(),
         },
         comments: []
      }
      addComment(newComment);
      setInput('');
      upCount()
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