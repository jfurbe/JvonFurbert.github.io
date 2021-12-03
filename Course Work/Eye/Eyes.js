
const Eye = ()=> {
   
   const balls = document.getElementsByClassName('ball');

   document.onmousemove = (event)=> {
   const x = (event.clientX * 100) / window.innerWidth + '%';
   const y = (event.clientY * 100) / window.innerHeight + '%';
  
   let trans = 'translate(-' + x + ',-' + y + ')'
   for (let i=0; i<balls.length;i++){
   balls[i].style.left = x;
   balls[i].style.top = y;
   balls[i].transform = trans;
   }
   

   const a = document.getElementById('alpha').style
   const b = document.getElementById('beta').style
   let base = 300;

   if (event.clientY < 300) {
      a.visibility = 'visible'
      a.borderRadius = Math.floor((-event.clientY/6)+50)+"%"
      console.log(Math.floor((-event.clientY/6)+50))
      b.visibility = 'hidden'
   }
   else {
      a.visibility = 'hidden'
      b.borderRadius = Math.floor((event.clientY/6)-50)+"%"
      console.log(Math.floor((event.clientY/6)-50))
      b.visibility = 'visible'
   }
};
}  

Eye();

