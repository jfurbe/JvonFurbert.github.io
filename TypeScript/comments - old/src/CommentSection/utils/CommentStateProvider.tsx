import globalHook, { Store } from 'use-global-hook';

//Define commentSection Global state.

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
  commentVoteIndex: CommentVoteIndex[]
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
  //addCommentToComment: (comment: CommentsType, commentId : number)=> void;
  //otherAction: (other: boolean) => void;
};

// setValue will be returned by globalHook as setValue.bind(null, store)
// This is one reason we have to declare a separate associated actions type
const setComments = (
  store: Store<MyState, MyActions>,
  comments: CommentsType[]
) => {
  store.setState({ 
    commentVoteIndex: comments.map((x)=> ({id : x.comment.id, votes: x.comment.votes})),
    comments: comments });
  //store.actions.otherAction(true);
};

// If commentId = -1, add comment to main stack, else add comment to comment
const addComment = ( 
  store: Store<MyState, MyActions>,
  comment: CommentsType,
  commentId: string
) => {
  
  if (commentId !== "-1") {
    let c = store.state
    let id = ''
    commentId.split(' ').forEach((x)=>{
      id = (id + ' ' + x).trim()
      c = c.comments[c.commentVoteIndex.findIndex((x)=> x.id === id)]
    })
    
   // let c = store.state.comments.filter((x)=> x.comment.id === commentId);
    c.comments.push(comment);
    c.commentVoteIndex.push({id:comment.comment.id, votes:0})
  }
  else {
    store.setState({
      commentVoteIndex: [{id: comment.comment.id, votes: comment.comment.votes}, ...store.state.commentVoteIndex],
      comments: [comment, ...store.state.comments]
    });
  }
};

const changeVotes = ( //Update votes and sort them
  store: Store<MyState, MyActions>,
  comment: CommentsType,
  vote : number
)=> {
  // Update vote
  let c = comment.comment; 
  c.votes = vote;
  
  //Update voting index
  let commentId = comment.comment.id;
  let cc = store.state;
  
  if (commentId.includes(" ")) {  // Find parent comment 
    let id = ''
    let trail = commentId.split(' ')
    trail.splice(-1,1)
    trail.forEach((x)=>{
      id = (id + ' ' + x).trim()
      cc = cc.comments[cc.commentVoteIndex.findIndex((x)=> x.id === id)]
    })
    let sect = cc.commentVoteIndex; 
    sect[sect.findIndex((x)=> x.id === c.id)].votes = vote; // Update vote in voting index
    sect.sort((a,b)=> (a.votes < b.votes ? 1 : -1)) // sort IDs by votes

    let sect2 = cc.comments;

    sect2 = (sect.map((x)=> sect2[sect2.findIndex((y)=> y.comment.id === x.id)])) //sort comments by votes
    store.setState({
      commentVoteIndex: store.state.commentVoteIndex,
      comments: store.state.comments //sort comments by votes
    })
  }
  else {
    let sect = store.state.commentVoteIndex; 
    sect[sect.findIndex((x)=> x.id === c.id)].votes = vote; // Update vote in voting index
    sect.sort((a,b)=> (a.votes < b.votes ? 1 : -1)) // sort IDs by votes

    let sect2 = store.state.comments;
   
    store.setState({
      commentVoteIndex: sect,
      comments: sect.map((x)=> sect2[sect2.findIndex((y)=> y.comment.id === x.id)]) //sort comments by votes
    })
  }
  console.log(store)
};

const initialState: MyState = {
  comments: [],
  commentVoteIndex: []
};

// actions passed to globalHook do not need to be typed
const actions = {
  setComments,
  addComment,
  changeVotes,

};

const useGlobal = globalHook<MyState, MyActions>(
  //React,
  initialState,
  actions,
);


export default useGlobal;