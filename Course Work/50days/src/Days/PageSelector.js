import { alignContent } from '@xstyled/system';
import React, {useState} from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';


const PageSelector = ({imgs})=> {

      const style1 = { width:"200px", height:"200px", transition:"width 1s , height 1s"}
      const style2 = { width:"400px", height:"400px", transition:"width 1s, height 1s"}
      const style3 = { width:"100px", height:"100px", transition:"width 1s, height 1s", opacity: "0.5", }
   
      const [hover, setHover] = useState([true,true,true,true])
      const [style, setStyle] = useState([style1,style1,style1,style1])
      const [stylez, setStylez] = useState(false)

      const toggleHover = (e)=> {
         let i = e.target.id;
         i = i[i.length-1]-1
         console.log(e)

            setStyle((prev)=> prev.map((x,j)=>j!=i?style3:style2));
            setHover((prev)=> prev.map((x,j)=>j!=i?x:!hover[i]));

         
      }

      const toggleExit = (e)=> {
         let i = e.target.id;
         i = i[i.length-1]-1

         setStyle((prev)=> prev.map((x,j)=>style1));
            setHover((prev)=> prev.map((x,j)=>j!=i?x:!hover[i]));
      }
   return (
      <Container > 
          <Row xs={1} md={2}>
            <Col style={style[0]}>
               <Image src={imgs[0]} id="col1" style={style[0]} onMouseEnter={toggleHover} onMouseLeave={toggleExit} />
              </Col>
            <Col style={style[1]}>
               <Image src={imgs[1]} id="col2"  onMouseEnter={toggleHover} onMouseLeave={toggleExit} style={style[1]}/>
            </Col>
         </Row>
         <Row xs={1} md={2} >
            <Col style={style[2]}>
               <Image src={imgs[2]}  id="col3" onMouseEnter={toggleHover} onMouseLeave={toggleExit} style={style[2]}/>
            </Col>
            <Col style={style[3]}>
            <Image src={imgs[3]} id="col4" onMouseEnter={toggleHover} onMouseLeave={toggleExit} style={style[3]}/>
            </Col>
         </Row>
      </Container>
      
   )
}

export default PageSelector;