import React from "react";
import globalHook, { Store } from 'use-global-hook';

//Define commentSection Global state.

export type Comment = {
  id: number;
  name: string;
  comment: string;
  votes: number;
  date: Date;
};

export type CommentsType = {
  comment: Comment;
  comments: Comment[];
}
type CommentVoteIndex = {
  id: number;
  votes: number;
}
export type MyState = {
  allComments: CommentsType[];
  commentVoteIndex: CommentVoteIndex[];
 };
 
 // Associated actions are what's expected to be returned from globalHook
export type MyActions = {
  setComments: (comments: CommentsType[])=> void;
  addComment: (comment: CommentsType)=> void;
  changeVotes: (comment: CommentsType, vote: number)=> void;
  //otherAction: (other: boolean) => void;
};

// setValue will be returned by globalHook as setValue.bind(null, store)
// This is one reason we have to declare a separate associated actions type
const setComments = (
  store: Store<MyState, MyActions>,
  allComments: CommentsType[]
) => {
  store.setState({ 
    commentVoteIndex: allComments.map((x)=> ({id : x.comment.id, votes: x.comment.votes})),
    allComments: allComments });
  //store.actions.otherAction(true);
};

const addComment = (
  store: Store<MyState, MyActions>,
  comment: CommentsType
) => {
  //store.state.allComments.push(comment)
  store.setState({
    commentVoteIndex: [{id: comment.comment.id, votes: comment.comment.votes}, ...store.state.commentVoteIndex],
    allComments: [comment, ...store.state.allComments]
  })
};

const changeVotes = (
  store: Store<MyState, MyActions>,
  comment: CommentsType,
  vote : number
)=> {

  let c = store.state.allComments.filter((x)=> x.comment.id == comment.comment.id)[0].comment
  c.votes = vote;
  let sect = store.state.commentVoteIndex;
  sect[sect.findIndex((x)=> x.id == c.id)].votes = vote;

  store.state.commentVoteIndex.sort((a,b)=> (a.votes < b.votes ? 1 : -1)) // sort IDs by votes
  
  let sect2 = store.state.allComments;
  

  store.setState({
    commentVoteIndex: store.state.commentVoteIndex,
    allComments: store.state.commentVoteIndex.map((x)=> sect2[sect2.findIndex((y)=> y.comment.id == x.id)]) //sort comments by votes
  })
  //console.log(store.state)
  //store.state.votes.sort
};

const initialState: MyState = {
  allComments: [],
  commentVoteIndex: []
};

// actions passed to globalHook do not need to be typed
const actions = {
  setComments,
  addComment,
  changeVotes
};

const useGlobal = globalHook<MyState, MyActions>(
  //React,
  initialState,
  actions,
);


export default useGlobal;