import { faPray } from '@fortawesome/free-solid-svg-icons';
import * as ActionTypes from './ActionTypes';

const baseUrl = 'http://localhost:3000/';

export const getOnePic = (dispatch, picName) => {

    return fetch(baseUrl + 'files/'+ picName, {
        method: "GET",
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
    .then(response => dispatch(onePic(response.url)))//response.json())
    //.then(response => dispatch(picList(response)))
    .catch(error =>  { console.log('post PIc', error.message); alert('Your Pic could not be found\nError: '+error.message); });
};

export const onePic = (pic) => ({
  type: 'onePic',
  payload: pic
});

export const getPicList = (dispatch) => {

  return fetch(baseUrl + 'files', {
    method: "GET",
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
.then(response => dispatch(picList(response)))
};

export const picList = (list) => ({
  type: 'PicList',
  payload: list
});

export const uploadPic = (data) => {
  const formData = new FormData()
   formData.append('file', data)
  console.log(formData)
  return fetch(baseUrl+"upload", {
   // mode: 'no-cors',
    method: "POST",
   // headers: {"Content-Type": "multipart/form-data"},
    body: formData,
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

export const hitSearch = (searchItem) => ({
    type: 'picUpload',
    payload: searchItem
});

export const getCommentList = (dispatch) => {

  return fetch(baseUrl + 'comments', {
    method: "GET",
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
.then(response => dispatch(commentList(response)))
//.then(disptach(response))
};

export const postComment = (comment, dispatch) => {
 // console.log(comment)
  
  //let formData = new FormData();
  //Object.keys(comment).map((x)=> formData.append(x, comment[x]))
  
  return fetch(baseUrl+"comments", {
    method: "POST",
    body: JSON.stringify(comment),
    headers: {
      "Content-Type": "application/json"
  }
   })
   .then(response => {
       if (response.ok) {
         getCommentList(dispatch);
         return response;
       } else {
         console.log(response)
       }
     },
     error => {
           throw error;
     })
 };

export const commentList = (list) => ({
  type: 'CommentList',
  payload: list
});

export const updatePost = (comment, newComment, dispatch) => {
 // let pack = [comment._id, newComment]
   return fetch(baseUrl+"comments/"+comment.id, {
     method: "POST",
     body: JSON.stringify(newComment),
     headers: {
       "Content-Type": "application/json"
   }
    })
    .then(response => {
        if (response.ok) {
          getCommentList(dispatch);
          return response;
        } else {
          console.log(response)
        }
      },
      error => {
            throw error;
      })
  };