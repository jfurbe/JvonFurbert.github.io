
setInterval(()=> {
 //  const ad = document.getElementsByTagName("iframe");
 //  ad[0].parentElement.removeChild(ad[0])
 let gDiv = document.querySelectorAll('div[class^="Ad"]')
 console.log('goo')
 gDiv.forEach((x)=> x.parentElement.removeChild(x))

}, 2000);

/* setInterval(()=> {

   document.getElementsByTagName('div')
   const ad = document.getElementsByClassName;
   ad[0].parentElement.removeChild(ad[0])
}, 2000);

const gDiv = document.querySelectorAll('div[class^="google"]')
gDiv.forEach((x)=> x.parentElement.removeChild(x)) */