import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';
function Footer() {

  return(
    <div id="Footer" className="bg-dark"style={{ position:'block'}}>
      <Container className='p-3'>
      <Row>
        <Col style={{color:'white'}} md={{ span: 3}}> 
        <h3 >Contact us</h3>
        <h5 className="h5"> Ministry of Economy and Labour</h5>
        <h6 className="h5">Department of Statistics</h6>
        <h5 className="h5">Physical Address</h5>
        <p className='p'>CedarPark Centre, 3rd Floor</p>
        <p className='p'>48 Cedar Avenue</p>
        <p className='p'>Hamilton HM 11</p>
        <p className='p'>Bermuda</p>
        <p className='p'>(441) 297-7761</p>
        <p className='p'>Send us an email</p>
        <h5 className="h5">Mailing Address</h5>
        <p className='p'>P.O. Box HM 3105</p>
        <p className='p'>Hamilton HM MX</p>
        <p className='p'>Bermuda</p>
        </Col>

        <Col style={{color:'white'}} md={{ span: 3, offset:1}}>
        <h3 >Social Media</h3>
        </Col>

      </Row>
      </Container>
      
    </div>
  )
}

export default Footer;