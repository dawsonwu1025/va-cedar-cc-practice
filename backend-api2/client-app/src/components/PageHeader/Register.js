import React from "react";
import { Container } from "reactstrap"; // react components

class Register extends React.Component {
    render() {
      return (
        <div className="page-header header-filter">
          <div className="squares square1" />
          <div className="squares square2" />
          <div className="squares square3" />
          <div className="squares square4" />
          <div className="squares square5" />
          <div className="squares square6" />
          <div className="squares square7" />
          <Container>
            <div className="content-center brand">
              <h1 className="h1-seo">TheFridayNightFlights.NET</h1>
              <h3 className="d-none d-sm-block">
               A place to fly free!
              </h3>
            </div>
          </Container>
        </div>
      );
    }
  }
  
  export default Register;