import React from 'react';
import "./Footer.css";

function Footer() {
    return <div className="footers" >
        <h3>Subscribe</h3>
        <span className="underline">________</span>
        <p>Subscribe  to our newslatter to stay updated at every moment.</p>
        <input type="text" placeholder=" enter a valid  email id" className="subscribe" />

        <button className="subscribe b">Subscribe</button> <br />
        <img src='../images/logo.svg' alt='' />


        <div className="last">
            <div className="first">
                <p>Company Nmae</p>
                <p>location</p>
            </div>
            <div className="second">
                <ul>
                    <li type="none">About</li>
                    <li type="none" >Terms</li>
                    <li type="none">Privacy</li>
                    <li type="none">Blog</li>
                </ul>

            </div>
            <div className="third">
                <p>Follow Us On</p>
                <div className="social">

                    <p>Twitter</p>
                    <p>FaceBook</p>
                </div>



            </div>
        </div>



    </div>;
}

export default Footer;
