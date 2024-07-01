import { Component } from "react";
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import fantasy from '../data/fantasy.json';
import history from '../data/history.json';
import horror from '../data/horror.json';
import romance from '../data/romance.json';
import sciFi from '../data/scifi.json';
import { Row, Col } from "react-bootstrap";
import WelcomeAlert from "./Welcome";

class AllTheBooks extends Component {

    state = {
        library: null,
        cartCount: 0
    }

    render() {
        return (

            <>
            <div className="d-flex justify-content-between container mx-auto mb-5">
            <Button variant="primary" onClick={() => this.setState({library: fantasy })
            }>Fantasy</Button>
            <Button variant="primary" onClick={() => this.setState({library: history })
            }>History</Button>
            <Button variant="primary" onClick={() => this.setState({library: horror })
            }>Horror</Button>
            <Button variant="primary" onClick={() => this.setState({library: romance })
            }>Romanance</Button>
            <Button variant="primary" onClick={() => this.setState({library: sciFi })
            }>SciFi</Button>
            </div>
            {!this.state.library ? <WelcomeAlert/> :(
        
            
            <Row className="container mx-auto row-gap-5">
                <div className="container mb-4">
            <Button className="position-relative" variant="primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
            </svg><Badge className="position-absolute  top-0 start-100 translate-middle" bg="danger">{this.state.cartCount}</Badge>
                <span className="visually-hidden"></span>
             </Button>
             </div>
            {this.state.library.map(book => {
            return ( 
            <Col>
            <Card className="shadow" style={{width: "20rem"}} key={book.asin}> 
            <Card.Img variant="top" src={book.img} style={{aspectRatio: "3/4"}}/>
            <Card.Body>
              <Card.Title className="text-truncate">{book.title}</Card.Title>
              <Card.Text>
                    <div>{book.category}</div>
              </Card.Text>
              <Button variant="primary" onClick={() => this.setState({ cartCount: this.state.cartCount + 1})}>
                Buy <Badge bg="secondary">${book.price}</Badge>
                <span className="visually-hidden"></span>
             </Button>
               
            </Card.Body>
          </Card>
          </Col>
           )
        })}
    
        </Row>
        
        )}
        </>
        )
    }
}

export default AllTheBooks