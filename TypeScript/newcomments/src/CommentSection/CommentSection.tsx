import * as React from 'react';
import {fetchComments} from './dataServ';
import {
   atom,
   selector,
   useRecoilState,
   useRecoilValue
 } from 'recoil';
import {CommentIndex, CommentsType, uniCommentStack, uniVar} from './store/store';
import WriteComment from './WriteComment';
import CommentArr from './CommentArr';
import {v4} from 'uuid';


const CommentSection = ()=> {
   const [commentIndex, setCommentIndex] = useRecoilState<any[]>(CommentIndex);
   const [commStack, setCommStack] = useRecoilState(uniCommentStack);

   const createComment = (comment : CommentsType)=> {
      let id = v4();
      let newComment = atom({
        key: id,
        default: {...comment, 
         comment: {
            ...(comment.comment), 
            id:id
         }
        },
     })
     return newComment
  }
 
   React.useEffect(()=> {
       fetchComments().then((comments : CommentsType[])=> {
         let zinc = comments.map((x: CommentsType)=> createComment(x))
         setCommentIndex(zinc);
         setCommStack(CommentIndex);
      });
    }, []);

   console.log(commentIndex)
   return(
   
      <div>
      
      <WriteComment />
     {/*  <button onClick={()=> addCount((x :any)=> x+1)}>Add </button> */}
      <CommentArr />
      </div>
   )
}

export default CommentSection;