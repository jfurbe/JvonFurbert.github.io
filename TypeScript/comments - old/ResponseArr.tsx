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

export const responseSelector = selectorFamily({
   key: 'reponseSelector',
   get: (commRef) => ({get})=> {
      // Use selectorFamily in a component and use a state object to make sure it gets updated.....
      const commentStack = get(uniCommentStack);
      console.log(commentStack)
      console.log(commRef)
      let responses = commentStack.filter((x : any)=> x.key === commRef)
      console.log(responses)
      responses = (get(get<CommentsType>(responses[0]).commentVoteIndex))
      responses = responses.map((x:any)=> get(x))
      return responses.sort((a: any,b: any)=> (a.comment.votes < b.comment.votes) ? 1 : ((b.comment.votes < a.comment.votes) ? -1 : 0))
   }
})

export const responseSelecto = selectorFamily({
   key: 'reponseSelecto',
   get: (commRef : any) => ({get})=> {
      // Use selectorFamily in a component and use a state object to make sure it gets updated.....
      /* const commentStack = get(uniCommentStack);
      console.log(commentStack)
      console.log(commRef)
      let responses = commentStack.filter((x : any)=> x.key === commRef)
      console.log(responses) */
     let responses = (get<any>(get<CommentsType>(commRef).commentVoteIndex))
     
      responses = responses.map((x:any)=> get(x))
      return responses.sort((a: any,b: any)=> (a.comment.votes < b.comment.votes) ? 1 : ((b.comment.votes < a.comment.votes) ? -1 : 0))
   }
})

const ResponseArr = ({commRef}: CommentArrProp)=> {
   //let atom = useRecoilValue<CommentsType>(useRecoilValue(uniCommentStack).filter((x:any)=> x.key === commRef)[0]).commentVoteIndex
   
   let atom = useRecoilValue<CommentsType>(commRef).commentVoteIndex;
   const atomStack = useRecoilValue<any[]>(atom);
   
   //let comments = useRecoilValue(responseSelector(useRecoilValue<CommentsType>(commRef).comment.id))

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
       {ref.map((x)=> <Comment comment={atomStack[x]}/>)}
     </div>
  )
}

export default ResponseArr;