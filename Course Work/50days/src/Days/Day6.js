import PageSelector from './PageSelector';
import React from 'react';
import img1 from '../download.jfif';
import img2 from '../new-women.jpg';
import img3 from '../sexy-bikini.jpg';
import img4 from '../sexy-man.jpg'

const Day6 = ()=> {
   let imgs = [img1, img2, img3, img4]
   return (
      <>
      <h1>Day 6</h1>
      <PageSelector imgs = {imgs}/>
   </>
   )
}

export default Day6;