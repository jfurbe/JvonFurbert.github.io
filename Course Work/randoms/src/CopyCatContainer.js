import React, {useState} from 'react';
import {CopyCat} from './CopyCat'

const images = {
  copycat: 'https://content.codecademy.com/courses/React/react_photo_copycat.png',
  quietcat: 'https://content.codecademy.com/courses/React/react_photo_quietcat.png'
};


export default function CopyCatContainer() {
    let [copying, setCopying] = useState(true);

    
  const toggleTape = ()=> {
    setCopying(!copying);
  }
  
    
    return (
      <div>
        <CopyCat copying={copying} toggleTape={toggleTape} images={images}/>
      </div>
    );
  };


