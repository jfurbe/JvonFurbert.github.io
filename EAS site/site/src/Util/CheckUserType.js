
var userTypeDB = {
   'jfurbe@gmail.com': 'Admin',
   'accounts@bca.bm' : 'User'
}

const checkUserType = (user)=> {
   return Object.keys(userTypeDB).includes(user) && userTypeDB[user];
}

export default checkUserType;