import {atom, selector, useRecoilState, useRecoilValue, selectorFamily} from 'recoil';


export type Comment = {
   id: string;
   name: string;
   comment: string;
   votes: number;
   date: Date;
 };
 
 
 export type CommentsType = {
   comment: Comment;
   comments: CommentsType[]; 
   commentVoteIndex: any
 }
 
 type CommentVoteIndex = {
   id: string;
   votes: number;
 }
 export type MyState = {
   comments: CommentsType[];
   commentVoteIndex: CommentVoteIndex[];
  };

   // Associated actions are what's expected to be returned from globalHook
export type MyActions = {
   setComments: (comments: CommentsType[])=> void;
   addComment: (comment: CommentsType, commentId: string)=> void;
   changeVotes: (comment: CommentsType, vote: number)=> void;
 };

 const initialState: MyState = {
   comments: [],
   commentVoteIndex: []
 };


 export const commentStore = atom({
   key: 'commentStore',
   default: initialState
 });

export const CommentIndex = atom<any>({
   key: 'commentIndex',
   default: [atom({
      key: '000',
      default: {}
   })
      ]
})

export const uniCommentStack = atom({
   key: 'uniCommentStack',
   default: CommentIndex
})

export const uniVar = atom<any[]>({
   key: 'uniVar',
   default: []
})

export const uniReference = atom({
   key:'uniReference',
   default:''
})

export const uniSel = selector({
   key: 'uniSel',
   get: ({get})=> {
   const list = get(uniCommentStack)
   console.log(list)

   let commlist = list.map((x : any)=> get(x));
   return commlist.sort((a: any,b: any)=> (a.comment.votes < b.comment.votes) ? 1 : ((b.comment.votes < a.comment.votes) ? -1 : 0))
   }
})

export const responseSelector = selectorFamily({
   key: 'reponseSelector',
   get: (commRef) => ({get})=> {
      
      const commentStack = get(uniCommentStack);
      console.log(commentStack)
      console.log(commRef)
      let responses = commentStack.filter((x : any)=> x.key === commRef)
      responses = useRecoilValue(useRecoilValue<CommentsType>(responses[0]).commentVoteIndex)
      console.log(responses)
      //responses = 
      return responses.map((x:any)=> get(x))
   }
})

export const sortSelector = selector({
   key: 'sortSelector',
   get: ({get})=> {
      const filter = 'this';
      const list = get(uniCommentStack);
      console.log(list)
      const gets = (x: CommentsType)=> {
         return {...x.comment}
      }
      let commList : any[];
      commList = list.map((x : any)=> gets(get<CommentsType>(x)))
      return commList.sort((a: any,b: any)=> (a.votes < b.votes) ? 1 : ((b.votes < a.votes) ? -1 : 0))
   }
})

/* export const commentActions = atom({
   key: 'commentActions',
   default: actions
}) */