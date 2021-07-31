import React, {useState, useContext, useEffect} from 'react'
import { Button } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {CatContext} from '../components/CatContext';
import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.thecatapi.com/v1/',
  headers: {'x-key-api': '506d311b-c494-4e14-a75c-dffc90d30fd5'}
});

const CatDetail = () => {
  const [catSelected, setCatSelected] = useContext(CatContext);
  const [catData, setCatData] = useState([]);
  let url = 'images/'+catSelected.id;
  useEffect( ()=>{
    api.get(url)
    .then(res => {
      setCatData(res.data);
    })
    .catch(err => {
      console.log(err);
    });
  }, []);

  return (
    <Row>
      <Row>
        <Col>
          <Link to='/'>
            <Button variant="primary">Back</Button>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card style={{ width: '50rem' }}> 
            <Card.Img variant="top" src={catData.url} />
            <Card.Body>
              <Card.Title>{catData.breeds!=undefined ? catData.breeds[0].name : 'No breed available.'}</Card.Title>
              <Card.Text>
              {catData.breeds!=undefined ? catData.breeds[0].description : 'No description available.'}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Row>
  )
}

export default CatDetail
