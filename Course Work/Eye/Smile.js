
const Smile = ()=> {

   document.onmousemove = (e)=> {
      console.log(e)
      let a = document.getElementById('alpha').style
     let b = document.getElementById('beta').style
         console.log( e.clientY/6)
         document.getElementById('alpha').style.borderRadius = Math.floor(e.clientY/6)+"%"

      // b = '50%'
 
}}
Smile();