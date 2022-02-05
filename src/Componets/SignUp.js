import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "./ Footer";
import "./SignUp.css";

function SignUp() {
  return (
    <>
      <section className="heroSectio">
        <Container>
          <Row>
            <Col md={6}>
              {/* input */}
              <br></br>
              <br></br>

              <div className="contact">
                <Col md={6}>
                  <img
                    className="bg"
                    src="../images/Signup.svg"
                    alt=""
                    width="170%"
                  />
                </Col>
              </div>
              <div>{/* <Subscribe/> */}</div>
            </Col>
            <Col md={6}>
              <div className=" about">
                <h5>Create Account</h5>
                <a href="/signin" className="btn1">
                  SignIn
                </a>
                <div>
                  <input
                    type="text"
                    className="firstn"
                    placeholder="Enter first name"
                  />
                  <br></br>
                  <br></br>
                  <input
                    className="inpu1"
                    type="text"
                    placeholder="Enter last name"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className="eye"
                    placeholder="Enter your email"
                  />
                  <br></br>
                  <br></br>
                  <input
                    type="text"
                    className="ep"
                    placeholder="Enter password"
                  />
                </div>
                <br></br>
                <button className="signin">Create Account</button>
                <br></br>
                <br></br>
				<sp>________________ OR _________________</sp>
				<br></br>
                <br></br>
                <br></br>
				<div>
                  <input
                    type="text"
                    className="firstn"
                    placeholder="Sign Up with Google"
                  />
                  <br></br>
                  <br></br>
                  <input
                    className="inpu1"
                    type="text"
                    placeholder="Sign Up with Polkadot"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer/>
    </>
  );
}

export default SignUp;
