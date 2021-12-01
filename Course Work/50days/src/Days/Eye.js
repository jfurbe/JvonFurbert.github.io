import React, {useState, useEffect} from 'react';

const eyes = {
   position: 'absolute',
   top: '40%',
   left:'20%',
   transform: 'translateY(-50%)',
   width: '62%',
   textAlign: 'center',
 }
const eye = {
   width: '240px',
   height: '120px',
   background: 'black',
   display: 'inline-block',
   margin: '40px',
   borderRadius: '50%',
   position: 'relative',
   overflow: 'hidden',
 }
const ball = {
   width: '80px',
   height: '80px',
   background:'green',
   position: 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   borderRadius: '50%',
 }

const Eye = ()=> {
   
   const balls = document.getElementsByClassName('ball');

   useEffect(()=> {document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';
  
   let trans = 'translate(-' + x + ',-' + y + ')'
for (let i=0; i<balls.length;i++){
  balls[i].style.left = x;
  balls[i].style.top = y;
  balls[i].transform = trans;
}
};
})

   
   return (
   <div style={eyes}>
      <div style={eye}>
          <div className="ball" style={ball}></div>
      </div>
      <div style={eye}>
          <div className="ball" style={ball}></div>
      </div>       
   </div>

   )
}

export default Eye;