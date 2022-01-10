const axios = require('axios');
axios.get('https://marketplace.thetanarena.com/?page=1')
.then(({data})=> console.log(data));
