var express = require("express");
var app = express();

//TODO: create a redis client
var redis = require("redis");
var client = redis.createClient();

//console.log(client);
//client.on("error", (err) => console.log('Redis Client Error', err));
//client.connect();

// serve static files from public directory
app.use(express.static("public"));

// TODO: initialize values for: header, left, right, article and footer using the redis client
let args = ['header', 'left', 'right', 'article', 'footer'];
args.forEach(key=> 
  client.set(key, 0)
);
// Get values for holy grail layout
function data() {
  // TODO: uses Promise to get the values for header, left, right, article and footer from Redis
  let d = {};
  let arr = [];
  return new Promise((resolve, reject) => {
  client.mget(args, 
    (err, value)=> {
    arr.push(...value)
  
    args.forEach((key, i)=>
      d[key] = arr[i]
    );

    err ? reject(null) : resolve(d);
  });
})
}

// plus
app.get("/update/:key/:value", function (req, res) {
  const key = req.params.key;
  let value = Number(req.params.value);
  console.log(value);
  client.set(key, client.get(key)+1);
  //TODO: use the redis client to update the value associated with the given key
});

// get key data
app.get("/data", function (req, res) {
  data().then((data) => {
    console.log(data);
    res.send(data);
  });
});

app.listen(3000, () => {
  console.log("Running on 3000");
});

process.on("exit", function () {
  client.quit();
});
