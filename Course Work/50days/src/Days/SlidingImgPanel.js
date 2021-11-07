import React, {useState} from 'react'; 
import {Image} from 'react-bootstrap';

const panelFlat = {
   maxWidth: '175px',
   transition: 'max-width 0.5s',
   overflow: 'hidden',
   height:'550px'
}
const panelActive = {
   maxWidth: '600px',
   transition: 'max-width 0.5s',
   overflow: 'hidden',
   height:'550px'
}

const SlidingImgPanel = ({image})=> {
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
      
         <div className='ps-4' style={showImage}>
          <Image
            src={image}
           onClick={handleImageClick}
           aria-controls="example-collapse-text"
           aria-expanded={open}
           style={{maxWidth: 'initial', height:'500px'}}
         />
         </div>
         
         </>
   )
}

export default SlidingImgPanel;