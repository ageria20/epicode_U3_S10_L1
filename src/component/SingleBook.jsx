import { Col, Button, Card, Badge } from "react-bootstrap"
import { Component } from "react"

class SingleBook extends Component{

  state = {
    isSelected: false
  }
  rener() {
    return (
        
        
            <Col className="mx-auto">
            <Card className="shadow" style={{width: "20rem"}} key={this.props.asin}> 
            <Card.Img variant="top" src={this.props.img} style={{aspectRatio: "3/4"}} onClick={() => this.setState({isSelected: !this.state.isSelected})}/>
            <Card.Body>
              <Card.Title className="text-truncate">{this.props.title}</Card.Title>
              <Card.Text>
                    {this.props.category}
              </Card.Text>
              <Button variant="primary">
                Buy <Badge bg="secondary">${this.props.price}</Badge>
                <span className="visually-hidden"></span>
             </Button>
               
            </Card.Body>
          </Card>
          </Col>
    )
  }
}
export default SingleBook