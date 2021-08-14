import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../error';
import {CharacterPage, BooksPage, HousesPage} from '../pages';
import gotService from '../../services/gotService';
import {BrowserRouter as Router, Route } from 'react-router-dom';

import './app.css';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.randomChar = this.randomChar.bind();
  }

  gotService = new gotService();


  state = {
    popap: true,
    error: false
  }
  
  componentDidCatch() {
    this.setState({
      error: true
    })
  }

  randomChar = () => {
    this.setState({
      popap: !this.state.popap
    })
  }

  

  render() {
    const { popap } = this.state;
    const popapUp = popap ? <RandomChar/> : null;

    if (this.state.error) {
      return <ErrorMessage/>
    }
    return (
      <Router>
          <div className='app'> 
              <Container>
                  <Header />
              </Container>
              <Container>
                  <Row>
                      <Col lg={{size: 5, offset: 0}}>
                          {popapUp}
                          <button
                            onClick={this.randomChar}
                            className='btn-random'>RandomChar</button>
                      </Col>
                  </Row>
                  <Route path='/characters' exact component={CharacterPage}/>
                  <Route path='/books' component={BooksPage}/>
                  <Route path='/houses' component={HousesPage}/>
              </Container>
          </div>
      </Router>
    )
  }
}
