import {atom} from 'recoil';
import {v4} from 'uuid';

export const data = [
   {
      comment :{
      id: "0",
      name: "J'Von", 
      comment: "Have fun", 
      votes: 0,
      date: new Date(),
      },
      comments: [],
      commentVoteIndex: atom({
         key: v4(),
         default: []
      }),
   },
   {
      comment :{
      id: "1",
      name: "Jasmine", 
      comment: "Get it done.", 
      votes: 3,
      date: new Date(),
      },
      comments: [],
      commentVoteIndex: atom({
         key: v4(),
         default: []
      }),
   },
   {
      comment :{
      id: "2",
      name: "Kyle", 
      comment: "Lets go!", 
      votes : 1,
      date: new Date(),
      },
      comments: [],
      commentVoteIndex: atom({
         key: v4(),
         default: []
      }),
   },
];