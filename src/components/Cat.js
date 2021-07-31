import React, {useState, useContext} from 'react'
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Cat = ({url, id}) => {
  
  return (
    <Col md={3}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={url} />
        <Card.Body>
          <Link to='/cat-details'>
            <Button variant="primary" >View Details</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default Cat
