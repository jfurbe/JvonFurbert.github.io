import React, {useEffect, useState} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import { UserContext } from "../Util/UserProvider";
import {getPicList, getOnePic, uploadPic, getCommentList, postComment, updatePost} from '../Util/ActionCreator';
import PicUpload from './picUpload';
import CommentArea from './CommentArea';


const Main = ()=> {
   const [ state, dispatch ] = React.useContext(UserContext) //Global state set up in Reducer
   const [picList, setPicList] = useState('')
   const [pic, setPic] = useState('');

   useEffect(()=> console.log(state), [state])
   
   const handleClick = ()=> {
      getPicList(dispatch)
   }

   const handleGetPic = ()=> {
      getOnePic(dispatch, '1637700972634-TTD-Madara.png')
   }

   const handleComments = ()=> {
      console.log(state)
      getCommentList(dispatch)
      
   }

   console.log(state)
   
   return (
      <>
      <h1>Hello</h1>
          <div class="container">
      <button onClick={handleComments}> Comments</button>
      <PicUpload upload={uploadPic} />
      
      <div class="row">
        <div class="col-sm-12">
          <div class="preview-images"></div>
         
         <button onClick={handleClick}>Get List</button>
         <button onClick={handleGetPic}>Get Pic</button>
         {state.onePic && <img src={state.onePic}></img>}
         <p></p>
         {state.comments && <CommentArea post={postComment}/>}
        </div>
      </div>
    </div>

      </>
   )
}

   export default (Main);