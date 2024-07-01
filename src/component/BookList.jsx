import { Component } from "react";
import SingleBook from "./SingleBook";
import { Col, Form, Row } from "react-bootstrap";
import CommentArea from "./CommentArea";

class BookList extends Component {
  state = {
    searchQuery: "",
  };

  render() {
    return (
      <>
        <Row className="justify-content-center mt-5">
          <Col xs={12} md={4} className="text-center">
            <Form.Group>
              <Form.Control
                type="search"
                placeholder="Cerca un libro"
                value={this.state.searchQuery}
                onChange={e => this.setState({ searchQuery: e.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>
        <Col xs={12} md={6}>
          <Row className="g-2 mt-3">
            {this.props.books
              .filter(book => book.title.toLowerCase().includes(this.state.searchQuery))
              .map(book => (
                <Col xs={12} md={4} key={book.asin}>
                  <SingleBook book={book} />
                </Col>
              ))}
          </Row>
        </Col>
        <Col xs={12} md={6}>
          <CommentArea />
        </Col>
      </>
    );
  }
}

export default BookList;
