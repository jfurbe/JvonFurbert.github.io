import React, {useState} from 'react'; 
import {Image} from 'react-bootstrap';

const panelFlat = {
   
   transition: 'transform .2s',
}
const panelActive = {
 
   transform: 'scale(1.3)',
   transition: 'transform .2s',
}

const ImageEffect = ({image})=> {
   const [open, setOpen] = useState(false);
   const [showImage, setShowImage] = useState(panelFlat);

   const handleImageClick = ()=> {
      console.log(open)
      setOpen(!open);
     // open ? setTimeout(()=> setShowImage(!showImage), 300) : setShowImage(!showImage)
      open ? setShowImage(panelFlat) : setShowImage(panelActive);
   }
   return (
      <>
        <div>
         <div className='ps-4' style={showImage}>
          <Image
          
            src={image}
           onMouseEnter={handleImageClick}
           onMouseLeave={handleImageClick}
           aria-controls="example-collapse-text"
           aria-expanded={open}
           style={{width: '20vw',maxWidth: '300px'}}
         />
         </div>
        </div>
         </>
   )
}

export default ImageEffect;