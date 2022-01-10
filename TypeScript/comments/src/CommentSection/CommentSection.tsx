import * as React from 'react';
import Comment from './Comment';
import {fetchComments} from './dataServ';
import useGlobal, {MyState, MyActions, CommentsType} from './utils/CommentStateProvider';
import WriteComment from './WriteComment';

const CommentSection = ()=> {
//const [comments, setComments] = React.useState<CommentsType[]>([]);
//const [state, dispatch] = React.useReducer(reducer, initialState);
//const [state, actions] = useGlobal<MyState, MyActions>(state=> state, actions=>actions);
const [comments, setComments] = useGlobal<CommentsType[], (value: CommentsType[]) => void>(
   (state: MyState)=> state.allComments,
   (actions: MyActions)=> actions.setComments
 );
 const [count, upCount] = React.useState(0)


React.useEffect(()=> {
  upCount(count+1)
   fetchComments().then((comments)=> {
      setComments(comments)
         /* comments.map((x)=> [x.comment.id, x.comment.votes]).
      sort(function(first, second) {
         return second[1] - first[1];
       }).map((x)=> comments[x[0]]))  */
  });
}, []);

const counter = ()=> {
   upCount(count + 1)
}
function addComment(comment: string) {
   let newComment = {
      comment : {
         id: 999,
         name: 'test',
         comment: comment,
         votes:0,
         date: Date.now(),
      },
      comments: []
   }
   //dispatch({type: 'ADD_COMMENT', payload: [newComment, ...state.comments]})
   
}
   

//console.log(actions)
return(
   <div>
      
      <WriteComment upCount={counter}/>
      {comments.map((comment )=> <Comment props={comment} />)}
   </div>
)}

export default CommentSection;