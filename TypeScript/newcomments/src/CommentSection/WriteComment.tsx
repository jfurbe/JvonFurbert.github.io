import * as React from 'react';
import {Form, Button} from 'react-bootstrap';
import {CommentsType, CommentIndex} from './store/store';
import {atom, useRecoilState, useRecoilValue} from 'recoil';
import {v4} from 'uuid';


type WriteCommentProps = { 
   comment? : any;
   response?: (response: boolean)=> void;
}

const IsComment = ({comment, response} : any)=> {
   
   const [parentComment, setParentComment] = useRecoilState<CommentsType>(comment);
   
   const [input, setInput] = React.useState('');
   const [store, setComment] = useRecoilState(CommentIndex);
   const [parentCommentIndex, setParentCommentIndex] = useRecoilState<any[]>(parentComment.commentVoteIndex)
  
   let commentId=''

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=> {
      e.preventDefault()
      let id = v4();
      let newComment = {
         comment : {
            id: id,
            name: 'test',
            comment: input,
            votes:0,
            date: new Date(),
         },
         comments: [],
         commentVoteIndex: atom({
            key: v4(),
            default: []
         }),
      }

      let newAtom = atom<CommentsType>({
         key: id,
         default: newComment
      })
      setInput('');
      response && response(false);
      
      setParentCommentIndex([
         ...parentCommentIndex,
         newAtom
      ]);

      
      setParentComment({
         ...parentComment,
         comments: [
            ...parentComment.comments,
            newComment
         ]
      }
   );
   
   }
   

   return (
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="CommentTextarea">
         <Form.Control 
         as="textarea" 
         placeholder="Enter Comment Here"  
         rows={3} 
         value={input}
         onChange = {(e)=> setInput(e.target.value)}
         />
      </Form.Group>
      <Button variant="primary" type="submit">
         Submit
      </Button>
   </Form>
   );
}

function WriteComment({comment, response} : WriteCommentProps) {
   const [input, setInput] = React.useState('');
   const [store, setComment] = useRecoilState(CommentIndex);
   
   let commentId=''

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=> {
      e.preventDefault()
      let id = v4();
      let newComment = {
         comment : {
            id: id,
            name: 'test',
            comment: input,
            votes:0,
            date: new Date(),
         },
         comments: [],
         commentVoteIndex: atom({
            key: v4(),
            default: []
         }),
      }

      let newAtom = atom<CommentsType>({
         key: id,
         default: newComment
      })
      setInput('');
      response && response(false);
      addComment(newAtom);
   }

   const addComment = (newAtom: any)=>{
      if (comment != null) {
         console.log(commentId)
       }
       else {
         setComment([...store, newAtom])
       }
   }
   //console.log(store)
 return (
    <>
    {comment ? 
    <IsComment comment={comment} response={response}/> :
   <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="CommentTextarea">
         <Form.Control 
         as="textarea" 
         placeholder="Enter Comment Here"  
         rows={3} 
         value={input}
         onChange = {(e)=> setInput(e.target.value)}
         />
      </Form.Group>
      <Button variant="primary" type="submit">
         Submit
      </Button>
   </Form>
   }
   </>
 ) 
}

const repaceItemAtIndex = (arr : CommentsType[], index : number, newVal : CommentsType)=> {
   return [...arr.slice(0, index), newVal, ...arr.slice(index + 1)]
}

export default WriteComment;