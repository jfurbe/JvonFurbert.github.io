import * as React from 'react';
import {
   atom,
   selector,
   useRecoilState,
   useRecoilValue
 } from 'recoil';
import {commentStore, CommentIndex, CommentsType, uniCommentStack, sortSelector} from './store/store';
import {v4} from 'uuid';
import Comment from './Comment';


type CommentArrProp = {
   comment? : CommentsType[],
   commentStack: any,
}

const ForceUpdate = ()=> {
   const [update, useupdate] = React.useState(1);
   console.log('update')
   return ()=> useupdate(0);
}  

const CommentArr = ({comment, commentStack}: CommentArrProp)=> {
   const comments = useRecoilValue<any[]>(commentStack);
   const [index, setIndex] = useRecoilState(uniCommentStack);
   
   console.log(commentStack);
   setIndex(commentStack);
   
   console.log(useRecoilValue(uniCommentStack))
   let theseComments = useRecoilValue(sortSelector)
   let thoseComments = comments.map((x)=> x.key)
   thoseComments.length !== theseComments.length && ForceUpdate()
   /* console.log(comments);
   console.log(theseComments)
   console.log(thoseComments) */
  return (
     <div>
      
      {commentStack.key === 'commentIndex' && comments.length == 1 ?
      <p></p> :
      theseComments.map((key : any)=> <Comment comment={comments[thoseComments.indexOf(key.id)]}/>)
      }

     </div>
  )
}

export default CommentArr;