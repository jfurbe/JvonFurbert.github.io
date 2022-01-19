import * as React from 'react';
import Comment from './Comment';
import {fetchComments} from './dataServ';
import useGlobal, {MyState, MyActions, CommentsType} from './utils/CommentStateProvider';
import WriteComment from './WriteComment';

const CommentSection = ()=> {
const [comments, actions] = useGlobal<CommentsType[], MyActions>(
   (state: MyState)=> state.comments,
   (actions: MyActions)=> actions
 );
 const [count, upCount] = React.useState(0)

//Global state will not re-render so using this count variable to rerender.
React.useEffect(()=> {
  upCount(count+1)
   fetchComments().then((comments)=> {
      actions.setComments(comments)
  });
}, []);

const counter = ()=> {
   upCount(count + 1)
}


return(
   <div>
      
      <WriteComment addComment={actions.addComment} commentId={"-1"} upCount={counter}/>
      {comments.map((comment )=> <Comment props={comment} />)}
   </div>
)}

export default CommentSection;