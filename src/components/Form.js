import React, {useState, useContext, useEffect} from 'react';
import axios from 'axios'
import { Button } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import CatList from './CatList'

const api = axios.create({
  baseURL: 'https://api.thecatapi.com/v1/',
  headers: {'x-key-api': '506d311b-c494-4e14-a75c-dffc90d30fd5'}
});

function Form() {

  const [page, setPage] = useState(1);
  const [breeds, setBreeds] = useState([]);
  const [breedSelected, setBreedSelected] = useState('');
  const [cats, setCats] = useState([]);

  useEffect( ()=>{
    api.get('breeds')
    .then(res => {
      setBreeds(res.data);
    })
    .catch(err => {
      console.log(err);
    });
  }, []);

  const updateBreedSelected = (e) => {
    setPage(1); //always set page to 1 when selecting new breed
    setBreedSelected(e.target.value);

    api.get('images/search/',{
      params: {
        page: {page},
        limit: 10,
        breed_id: breedSelected
      }
    })
    .then(res => {
      setCats(res.data);
    })
    .catch(err => {
      console.log(err);
    });
  }

  const loadMoreCats = () => {
    setPage(2); //2 is temporary, will be replace with incremental page count
    api.get('images/search',{
      params: {
        page: {page},
        limit: 10,
        breed_id: breedSelected
      }
    })
    .then(res => {
      setCats(res.data);
    })
    .catch(err => {
      console.log(err);
    });
  }


  return (
    <div>

        <Row>
          <Col md={6}>
          <select className="form-control" onChange={updateBreedSelected}>
            <option value=''>---</option>
            {breeds.map(breed => (
              <option value={breed.id} key={breed.id}>
                {breed.name}
              </option>
              ))}
          </select>
          </Col>
        </Row>

        <CatList cats={cats}/> 

        <Row>
          <Col md={4}>
            <Button variant="success" onClick={loadMoreCats}>Load More</Button>
          </Col>
        </Row>

    </div>

    
  );
}

export default Form

