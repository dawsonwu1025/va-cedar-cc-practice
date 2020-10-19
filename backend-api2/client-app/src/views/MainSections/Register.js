import React from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

function fetchAPI(objPerson) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      "title": "Mr",
      "firstName": "Carlos",
      "lastName": "Navarro",
      "email": "cnavarro0321@gmail.com",
      "password": "password",
      "confirmPassword": "password",
      "acceptTerms": true
    })
  };
    
  return fetch('http://thefridaynightflights.net:8080/Accounts/register', requestOptions)
        .then(response => response.json());
};


class FNFRegister extends React.Component {

  state = { };

  constructor(props) {
    super(props);
    this.state = {
      registerMessage: '',
      password: ''
    };
  }

  registerApi = () => {

    console.log(this.state.fullNameFocus);
    fetchAPI("").then(result => {
      // this.setState({ registerMessage: result.message })
      // this.setState({ registerMessage: result.message });
      alert(JSON.stringify(result));
    });
  };

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    // console.log(`${name} : ${event.target.value}`)
    this.setState({name: event.target.value});
  }

  setPassword(event) {
    console.log(event.target.value);
    this.setState({registerMessage: event.target.value});
    // this.setState({password: event.target.value});
    // console.log(this.state.password);
  }


  render() {
    return (
      <div className="section section-signup">
        <Container>
          <div className="squares square-1" />
          <div className="squares square-2" />
          <div className="squares square-3" />
          <div className="squares square-4" />
          <Row className="row-grid justify-content-between align-items-center">
            <Col lg="6">
              <h3 className="display-3 text-white">
                Friday Night Flights.NET
              </h3>
            </Col>
            <Col className="mb-lg-auto" lg="6">
              <Card className="card-register">
                {/* <CardHeader>
                  <CardImg
                    alt="..."
                    src={require("assets/img/square-purple-1.png")}
                  />
                  <CardTitle tag="h4">Register</CardTitle>
                </CardHeader> */}
                <CardBody>
                  <Form className="form">
                    <InputGroup
                      className={classnames({
                        "input-group-focus": this.state.fullNameFocus
                      })}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="tim-icons icon-single-02" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Full Name"
                        type="text"
                        onFocus={e => this.setState({ fullNameFocus: true })}
                        onBlur={e => this.setState({ fullNameFocus: false })}
                      />
                    </InputGroup>
                    <InputGroup
                      className={classnames({
                        "input-group-focus": this.state.emailFocus
                      })}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="tim-icons icon-email-85" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Email"
                        type="text"
                        onFocus={e => this.setState({ emailFocus: true })}
                        onBlur={e => this.setState({ emailFocus: false })}
                      />
                    </InputGroup>
                    <InputGroup
                      className={classnames({
                        "input-group-focus": this.state.passwordFocus
                      })}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="tim-icons icon-lock-circle" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        name="password"
                        placeholder="Password"
                        type="text"
                        onFocus={e => this.setState({ passwordFocus: true })}
                        onBlur={e => this.setState({ passwordFocus: false })}
                        onChange={ this.setPassword }
                      />
                    </InputGroup>
                    {/* <FormGroup check className="text-left">
                      <Label check>
                        <Input type="checkbox" />
                        <span className="form-check-sign" />I agree to the{" "}
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          terms and conditions
                        </a>
                        .
                      </Label>
                    </FormGroup> */}
                  </Form>
                </CardBody>
                 <span className="messageResponse">
                    {this.state.registerMessage}
                 </span>
                <CardFooter>
                  <Button className="btn-round" color="primary" size="lg" onClick={this.registerApi}>
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default FNFRegister;
