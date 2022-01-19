import * as React from 'react';
import {fetchComments} from './dataServ';
import {
   atom,
   selector,
   useRecoilState,
   useRecoilValue
 } from 'recoil';
import {commentStore, CommentIndex, CommentsType, uniCommentStack} from './store/store';
import Comment from './Comment';
import WriteComment from './WriteComment';
import CommentArr from './CommentArr';
import {v4} from 'uuid';


const CommentSection = ()=> {
   const [comments, setComments] = useRecoilState(commentStore);
   const [commentIndex, setCommentIndex] = useRecoilState<any[]>(CommentIndex);
   
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
      });
    }, []);

   
   return(
   
      <div>
      
      <WriteComment />
     {/*  <button onClick={()=> addCount((x :any)=> x+1)}>Add </button> */}
      <CommentArr commentStack={CommentIndex} />
      </div>
   )
}

export default CommentSection;