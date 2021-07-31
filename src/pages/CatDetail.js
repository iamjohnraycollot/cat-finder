import React from 'react'
import { Button } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CatDetail = () => {
  return (
    <Row>
      <Row>
        <Col>
          <Link to='/'>
            <Button variant="primary">Back</Button>
          </Link>
          Cat Details
        </Col>
      </Row>
      <Row>
        <Col>
          <Card style={{ width: '50rem' }}> 
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Row>
  )
}

export default CatDetail
