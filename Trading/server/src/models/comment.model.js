module.exports = mongoose => {
   const Comment = mongoose.model(
     "cmt",
     mongoose.Schema(
       {
         id: String,
         userName: String,
         message: String,
         timeStamp: Date,
         votes: Number,
         comments:Array,

       },
     )
   );
 
   return Comment;
 };