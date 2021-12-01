const commentsIn = [
   {
   id:"0",
   userName: "fun",
   timeStamp: "whenever",
   message: "This is the comment of all days ",
   votes: 0,
   comments: []
   },
   {
   id:"1",
     userName: "doctor",
   timeStamp: "whereever",
   message: "We are here",
   votes: 3,
   comments: []
   },
   {
   id:"2",
   userName: "doctor",
   timeStamp: "whereever",
   message: "When you go there you must stay here to share everything you were while whereing",
   votes: 1,
   comments: [{
   id: "2.0",
   userName: "doctor",
   timeStamp: "whereever",
   message: "When you go there you must stay here to share everything you were while whereing",
   votes: 1,
   comments: [{
   id: "2.0.0",   
   userName: "doctor",
   timeStamp: "whereever",
   message: "When you go there you must stay here to share everything you were while whereing",
   votes: 1,
   comments: []
   },{
      id: "2.0.1",   
      userName: "doctor2",
      timeStamp: "whereeverssss",
      message: "When you go there you must stay here to share everything you were while whereing",
      votes: 2,
      comments: []
      },]
   },]
   },
]

module.exports = (commentsIn)