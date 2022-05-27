var redis = require("redis");
var client = redis.createClient();

//console.log(client);
client.on("error", (err) => console.log('Redis Client Error', err));
client.connect();

//single value write & read 
client.set("my_key", "Hello World");
client.get("my_key")
.then((v)=> console.log(v));
client.get("my_key", function(err, reply) {
  console.log(reply);
});

//multiple value write & read
client.set("header",0);
client.mSet('header','hello', 'left',0,'right',0,'footer',0);
client.mGet(['header','left','right','footer'])
.then((value)=> 
      console.log(value)
);
client.get('left').then((value)=>console.log(value));

//console.log(client.mGet('header').then((er,v)=> console.log(er,v)))

client.quit();  