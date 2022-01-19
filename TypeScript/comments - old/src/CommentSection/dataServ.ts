import {data} from './data';

export type CommentType = {
   id: number;
   name: string;
   comment: string;
   votes: number;
};

export type CommentsType = {
   comment: CommentType;
   comments: CommentType[];
}

export const fetchComments = ()=> {
   return Promise.resolve(data)//.then((comment)=> comment)
}