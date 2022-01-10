
var userTypeDB = {
   'jfurbe@gmail.com': 'Admin',
   'accounts@bca.bm' : 'User',
   'pouterbridge@bacardi.com' : 'User',
   'rshearer@bfm.bm' : 'User',
   'gerry_swan@heritageesp.com' : 'User',
   'moose@logic.com' : 'User',
   'amaralcm@ibl.bm' : 'User',
   'colin@elevator.bm' : "User",
   'jbraithwaite@liberty.bm' : "User",
   'cberkeley@basg.bm' :  "User",
   'dalderdice@cambeach.bm' : "User",
   'kevin.walsh@digicelgroup.com' : "User",
   'hbgroup@northrock.bm' : "User",
   'accounts@oleandercycles.bm' : "User",
   'cindy.stewart@pwc.com' : "User",
   "jonathan@centralfiling.bm" :"User",
   "mdenwiddie@aeriefoundation.org" : "User",
   
}

const checkUserType = (user)=> {
   return Object.keys(userTypeDB).includes(user) && userTypeDB[user];
}

export default checkUserType;