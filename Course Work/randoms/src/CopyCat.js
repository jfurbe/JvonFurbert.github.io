import React, {useState} from 'react';
import {imgStyles} from './styles'
import {divStyles} from './styles'

export function CopyCat(props) {

    console.log(this)
    const copying = props.copying;
    const toggleTape = props.toggleTape;
    const images = props.images
    const [copied,setCopied] = useState('');

    const handleOnChange = (e)=> {
        setCopied(e.target.value);
    }
    
    return (
      <div style={divStyles}>
        <h1 style={{marginBottom:80}}>Copy Cat</h1>
        <input type='text' value={copied} onChange={handleOnChange}/>
        <img 
          alt='cat'
          src={copying ? images.copycat : images.quietcat}
          onClick={toggleTape}
          style={imgStyles}
        />
        <h1>{copying && copied}</h1>
      </div>
    );
  };

