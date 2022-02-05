import React from 'react';
import {Container,Row,Col, Button} from 'react-bootstrap'
import Footer from './ Footer';

import './ContactUs.css';


function ContactUs() {
  return (
      <>
         <section className="heroCon">
				<Container>
					<Row>
						<Col md={6}>
						<h2>Contact Us</h2>
                    <span>_________</span>
					{/* input */}
					<br></br>
					<div >
					<input type="text" className='eyn' placeholder="Enter your name"/><br/><br/>
					<input type="email" className='eyp'  placeholder="Enter your email"/><br/><br/>
					<textarea className='masage' typeof='massage' placeholder='massage'/>
					</div>
					<div>
					<div>
								<Button className='bt1'>Submit</Button>
							</div>
					</div>
					
						</Col>
						<Col md={6}>
							<img src="../images/Contact.svg" alt="" className='cont'/>
						</Col>
					</Row>
				</Container>
			</section>
<Footer/>
      </>
  )
}

export default ContactUs;
