import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "./ Footer";

import './Home.css'
import HomeEvent from "./HomeEvent";

function Home() {
  return (
    <>
      <section className="herohome">
        <Container>
          <Row>
            <Col md={6}>
              <h1 className="headi">
                FIND <span className="Find">YOUR</span> NEXT TECH CONFERENCE{" "}
                <span className="Find">IN THE</span> POLKADOT{" "}
                <span className="Find">ECOSYSTEM</span>
              </h1>
              <p>
                Open-source and crowd-sourced list of<br></br> meetup around
                Polkadot ecosystem
              </p>
              <button>Get Started</button>
            </Col>
            <Col md={6}>
              <img src="../images/Home 1x.png" alt="" width="100%" />
            </Col>
          </Row>
        </Container>
      </section>
      <div>
        <Container>
          <Row>
            <div className="about_event">
              <section className="event">
                <div>
                  <h4 className="h4">100</h4>
                  <p>Upcoming Event</p>
                </div>
                <div>
                  <h4 className="h4">91</h4>
                  <p>Recently Added</p>
                </div>
                <div>
                  <h4 className="h4">91,000</h4>
                  <p>All Time Events</p>
                </div>
              </section>
            </div>
          </Row>
        </Container>
      </div>
      <HomeEvent/>
      
    <Footer/>
    </>
  );
}

export default Home;
