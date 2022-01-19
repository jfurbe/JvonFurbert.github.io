import {atom, selector, useRecoilState, useRecoilValue} from 'recoil';


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