import * as ActionTypes from './ActionTypes';
import {baseUrl} from '../shared/baseUrl.js';


export const getSearch = (searchItem, dispatch) => {
    getOldIct(searchItem, dispatch)
    getOldEas(searchItem, dispatch)

    return fetch(baseUrl + 'businesses/'+ searchItem, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
    .then(response => {
        //console.log(response);
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            throw error;
      })
    .then(response => response.json())
    .then(response => dispatch(hitSearch(response)))
    .catch(error =>  { console.log('post comments', error.message); alert('Your comment could not be posted\nError: '+error.message); });
};

export const getOldIct = (searchItem, dispatch) => {
    
  return fetch(baseUrl + 'OldIctSearches/'+ searchItem, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "same-origin"
  })
  .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
    error => {
          throw error;
    })
  .then(response => response.json())
  .then(response => dispatch(storeOldICT(response[0])))
  .catch(error =>  { console.log('post comments', error.message); alert('Your comment could not be posted\nError: '+error.message); });
};

export const getOldEas = (searchItem, dispatch) => {
  return fetch(baseUrl + 'OldEasSearches/'+ searchItem, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "same-origin"
  })
  .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
    error => {
          throw error;
    })
  .then(response => response.json())
  .then(response => response.length > 0 && dispatch(storeOldEAS(response[0])))
  .catch(error =>  { console.log('post comments', error.message); alert('Your comment could not be posted\nError: '+error.message); });
};

export const responseSearch = (searchItem) => {

    return fetch(baseUrl + 'responses/'+ searchItem, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
    .then(response => {
        console.log(response);
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            throw error;
      })
    .then(response => response.json())
  //  .then(response => dispatch(hitResponseSearch(response)))
    .catch(error =>  { console.log('post comments', error.message); alert('Your comment could not be posted\nError: '+error.message); });
};

export const emailSearch = (searchItem, dispatch) => {

  return fetch(baseUrl + 'businesses/EmailSearch/'+ searchItem, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "same-origin"
  })
  .then(response => {
      
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
    error => {
          throw error;
    })
  .then(response => response.json())
  .then(response => dispatch(hitSearch(response)))
  .catch(error =>  { console.log('post comments', error.message); alert('Your comment could not be posted\nError: '+error.message); });
};

export const hitSearch = (searchItem) => ({
    type: ActionTypes.HIT_SEARCH,
    payload: searchItem
});

export const adminData = (dispatch) => {

  return fetch(baseUrl + 'adminData/', {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "same-origin"
  })
  .then(response => {
      
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
    error => {
          throw error;
    })
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(error =>  { console.log('post comments', error.message); alert('Your comment could not be posted\nError: '+error.message); });
};

export const adminDataFind = (reponse) => ({
    type: ActionTypes.ADATA_SEARCH,
    payload: reponse
});

export const hitResponseSearch = (searchItem) => ({
    type: ActionTypes.RESPONSE_SEARCH,
    payload: searchItem
});


export const storeICT = (ict)=> ({
    type: ActionTypes.STORE_ICT,
    payload: ict
});

export const storeOldICT = (ict)=> ({
    type: ActionTypes.STORE_OLDICT,
    payload: ict
});

export const storeOldEAS = (eas)=> ({
  type: ActionTypes.STORE_OLDEAS,
  payload: eas
});

export const workEAS = (item, value)=> {

}

export const storeEAS = (eas) => (
  {
    type: ActionTypes.STORE_EAS,
    payload: eas
});

export const saveRecord = (record) => {
  // let pack = [comment._id, newComment]
  
    return fetch(baseUrl+"eascurrent/"+record.ReferenceNumber, {
      method: "POST",
      body: JSON.stringify(record),
      headers: {
        "Content-Type": "application/json"
    }
     })
     .then(response => {
         if (response.ok) {
           return response;
         } else {
           console.log(response)
         }
       },
       error => {
             throw error;
       })
   };

