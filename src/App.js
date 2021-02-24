import React, { Component } from 'react'
import { Button, Form, Container, Header } from 'semantic-ui-react'
import './App.css';
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       term: '',
       meaning: '',
       spanish: '',
       commments: ''
    }
  }

  changeHandler = (e) => {
    this.setState({[e.target.name] : e.target.value})
  }

  submitHandler = e => {
    e.preventDefault();
    
    const url = process.env.REACT_APP_GOOGLE_SHEET_URL;

    axios.post(url, this.state)
    .then(response => {
      console.log(response);
    })
  }

  render() {
    const { term, meaning, spanish, comments } = this.state;
    return (
      <Container fluid className="container">
        <Header as='h2'>Vocabulary!</Header>
        <Form className="form" onSubmit={this.submitHandler}>
          <Form.Field>
            <label>Term / Término</label>
            <input placeholder='Enter your name' type="text" name = "term" value = {term} onChange={this.changeHandler}/>
          </Form.Field>
          <Form.Field>
            <label>Meaning / Significado</label>
            <input placeholder='Enter your age' type="text" name = "meaning" value = {meaning} onChange={this.changeHandler}/>
          </Form.Field>
          <Form.Field>
            <label>Spanish / Español</label>
            <input placeholder='Enter your salary' type="text" name = "spanish" value = {spanish} onChange={this.changeHandler}/>
          </Form.Field>
          <Form.Field>
            <label>Comments / Comentarios</label>
            <input placeholder='Enter your hobby' type="text" name = "comments" value = {comments} onChange={this.changeHandler}/>
          </Form.Field>
          
          <Button color="blue" type='submit'>Accept</Button>
        </Form>
      </Container>
    )
  }
}