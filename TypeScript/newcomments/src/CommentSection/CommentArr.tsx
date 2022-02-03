import * as React from 'react';
import {
   atom,
   selector,
   useRecoilState,
   useRecoilValue
 } from 'recoil';
import {CommentIndex, CommentsType, uniCommentStack, sortSelector, uniVar, uniSel} from './store/store';
import Comment from './Comment';


type CommentArrProp = {
   comment? : CommentsType[],
   commentStack: any,
}

const ForceUpdate = (x : any)=> {
   const xx = useRecoilValue<CommentsType>(x);
   console.log('update')
   return xx;
}  

const CommentArr = ()=> {
   const atomStack = useRecoilValue<any[]>(CommentIndex);
   console.log(atomStack)

   const comments = useRecoilValue(uniSel);

   console.log(comments)
   console.log(atomStack)
   let ref: any[];
   ref = [];
   if (atomStack[0].key !== '000'){
   ref = comments.map((x : any)=> (
      atomStack
      .map((atom)=> atom.key)
      .indexOf(
         x.comment.id)))
      }
 
  return (
     <div>
       {ref.map((x, i)=> <Comment comment={atomStack[x]} color={i%2==0 ? "white" : "#ffe599"}/>)}

     </div>
  )
}

export default CommentArr;