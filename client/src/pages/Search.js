import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import API from '../utils/API';
import { Col, Row, Container } from '../components/Grid';
import { Input, TextArea, FormBtn } from '../components/Form';

class Books extends Component {
  state = {
    books: [],
    title: '',
    author: '',
    synopsis: ''
  };

  handleFormSubmit = () => {
    API.saveBook().then((res) =>
      this.setState({
        books: res.data,
        title: res.title,
        author: res.author,
        synopsis: res.synopsis
      })
    );
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Search for books to add to your read list.</h1>
            </Jumbotron>
            <form>
              <Input name="title" placeholder="Title (required)" />
              <Input name="author" placeholder="Author (required)" />
              <TextArea name="synopsis" placeholder="Synopsis (Optional)" />
              <FormBtn>Submit Book</FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
