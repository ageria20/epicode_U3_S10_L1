
import Alert from "react-bootstrap/Alert"



function WelcomeAlert() {

        return (
            <Alert className="container mx-auto" variant="success">
      <Alert.Heading>Hey, nice to see you</Alert.Heading>
      <p>
        Aww yeah, you successfully read this important alert message.
      </p>
      <hr />
      <p className="fs-4 mb-0">
        Please Select a Library visualize our EpicBooks
      </p>
    </Alert>
        )
    
}

export default WelcomeAlert