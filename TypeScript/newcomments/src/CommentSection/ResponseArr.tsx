import * as React from 'react';
import {
   atom,
   selector,
   useRecoilState,
   selectorFamily,
   useRecoilValue
 } from 'recoil';
import {CommentIndex, CommentsType, uniCommentStack, sortSelector, uniVar} from './store/store';
import Comment from './Comment';


type CommentArrProp = {
   commRef : any,
   parentCom? : CommentsType
}

export const responseSelecto = selectorFamily({
   key: 'reponseSelecto',
   get: (commRef : any) => ({get})=> {
     let responses = (get<any>(get<CommentsType>(commRef).commentVoteIndex))

      responses = responses.map((x:any)=> get(x))
      return responses.sort((a: any,b: any)=> (a.comment.votes < b.comment.votes) ? 1 : ((b.comment.votes < a.comment.votes) ? -1 : 0))
   }
})

const ResponseArr = ({commRef}: CommentArrProp)=> {
   let atom = useRecoilValue<CommentsType>(commRef).commentVoteIndex;
   const atomStack = useRecoilValue<any[]>(atom);

   let comments = (useRecoilValue(responseSelecto(commRef)))
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
      {/*  {atomStack.map((x)=> <Comment comment={x}/>)} */}
       {ref.map((x, i)=> <Comment comment={atomStack[x]} color={i%2==0 ? "#ffe289" : "#ffe28a"}/>)}
     </div>
  )
}

export default ResponseArr;