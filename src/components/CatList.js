import React, {useState, useContext} from 'react'
import {CatContext} from './CatContext';
import Cat from './Cat'
import { Row } from 'react-bootstrap';

const CatList = () => {

  const [cats, setCats] = useContext(CatContext);

  return (
    <Row>
      {cats.map(cat => (
        <Cat url={cat.url} id={cat.id} key={cat.id} />
      ))}
    </Row>
  )
}

export default CatList
