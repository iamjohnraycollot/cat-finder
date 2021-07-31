import React, {useState} from 'react'
import Form from './components/Form';
import {CatProvider} from './components/CatContext'
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';
import CatDetail from './pages/CatDetail'

function App() {

  return (
    <CatProvider>

      <div className="App">
        <div className="container">
          <Switch>
            <Route path='/' exact>
              <h1>Cat Browser</h1>
              <Row>
                <Col>
                  <Form />
                </Col>
              </Row>

            </Route> 
            <Route path='/cat-details'>
              <CatDetail />
            </Route> 

          </Switch>
        </div>
      </div>

    </CatProvider>
  );
}

export default App;
