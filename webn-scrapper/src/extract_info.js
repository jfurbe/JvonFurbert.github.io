const fetch = require("node-fetch");

const getRawData = (URL)=> {
   return fetch(URL)
      .then((response)=> response.text())
      .then((data)=> {
         return data;
      });
};

const URL = "https://marketplace.thetanarena.com/?page=1";

const getData = async ()=> {
   const data = await getRawData(URL);
   console.log(data);
}

getData();

