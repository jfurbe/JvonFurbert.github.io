import React, {useState} from 'react'; 
import {Image} from 'react-bootstrap';

const panelFlat = {
   maxWidth: '500px',
   overflow: 'hidden',
   height:'175px',
   position:'relative',
   transition: 'height 1s',
   
}
const panelActive = {
   maxWidth: '500px',
   overflow: 'hidden',
   height:'550px',
   position:'relative',
   transition: 'height 1s',
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
           style={{maxWidth: '500px', height:'initial', position:'absolute', bottom:'25px'}}
         />
         </div>
        </div>
         </>
   )
}

export default ImageEffect;