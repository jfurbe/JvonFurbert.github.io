

function createUser(user, email, password) { 
  fetch(`/account/create/${user}/${email}/${password}`)
  .then(response => response.text())
  .then(text => {
      try { //Success
          const data = JSON.parse(text);
          success(data)
          console.log('JSON:', data);
      } catch(err) { //Error
          setErrMsg(text);
          setComplete(true);
          console.log('err:', text);
      }
  });
}
function findUser(email){
  fetch(`/account/find/${email}`)
  .then(response = response.text())
  .then(text => {
    
  })
}

export {
  createUser,

};