import * as ActionTypes from './ActionTypes';

export const Businesses = (state = {
      errMess: null,
      businesses: [],
      responseSearch:[]
      }, action) => {
    switch (action.type) {

      case ActionTypes.HIT_SEARCH:
          return {...state, isLoading: false, errMess: null, businesses: action.payload};

      case ActionTypes.RESPONSE_SEARCH:
          return {...state, isLoading: false, errMess: null, responseSearch: action.payload};

      default:
          return state;
      }
};
