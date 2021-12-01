import * as ActionTypes from './ActionTypes';
import {updatePost} from '../Util/ActionCreator';

export const reducer = (state = {
      errMess: null,
      userType: '',
      Data: {},
      section: '',
      picList:[],
      onePic:'',
      votes:[],
      comments:[],
      }, action) => {
    switch (action.type) {

      case ActionTypes.SET_USERTYPE:
        return {...state, userType: action.payload};
      
      case 'PicList':
        return {...state, picList: action.payload};
      
      case 'CommentList':
        return {...state, comments: action.payload};
      
      case 'onePic':
        return {...state, onePic: action.payload};
      
      default:
       return {...state};
     }
};

export const initialState = {
  'updatePost':updatePost,
  onePic:'',
};