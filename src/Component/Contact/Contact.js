import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedinIn,
    faWhatsapp,
    faYoutube,
  } from '@fortawesome/free-brands-svg-icons';
  import { faEnvelope } from '@fortawesome/fontawesome-free-solid';

export default function Contact(){
    return(
        <div className="contact-main">
            <div className="row contact-main-div">
                <div className="col-lg-7 box-left col-sm-12">
                    <div className="contact-title">
                        <div className="contact-title-number">
                            <span>01/</span>
                        </div>
                        <div className="contact-title-name">
                            <span>GET IN<br/> TOUCH</span>
                        </div>
                    </div>
                    <div className="sub-heading">
                        <p>
                            We are very approachable and would love to speak to you. Feel free to call, 
                            send us an email, Tweet us or simply complete the enquiry form.
                        </p>
                    </div>
                    <div className="social-icons mt-5">
                        <a
                            href="https://www.facebook.com/aashish.kumar.37454"
                            target="_blank"
                        >
                        <FontAwesomeIcon icon={faFacebook} color='white' className="mt-5"/><span className='link text-white'>aashish.kumar.37454</span>
                        </a>
                        <a
                            href="https://instagram.com/ashish_kumar_prasad?igshid=1w806o0g53bu3"
                            target="_blank"
                        >
                        <FontAwesomeIcon icon={faInstagram} color='white' className="mt-5"/><span className='link text-white'>ashish_kumar_prasad</span>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/ashish-kumar-31493b18b"
                            target="_blank"
                        >
                        <FontAwesomeIcon icon={faLinkedinIn} color='white' className="mt-5"/><span className='link text-white'>ashish-kumar-31493b18b</span>
                        </a>
                        <a
                            href="https://wa.me/917004596419"
                            target="_blank"
                        >
                        <FontAwesomeIcon icon={faWhatsapp} color='white' className="mt-5"/><span className='link text-white'>+91-7004596419</span>
                        </a>
                        <a
                            href="https://youtube.com/channel/UCQBM4qKg9_eA2UuE6yG5jug"
                            target="_blank"
                        >
                        <FontAwesomeIcon icon={faYoutube} color='white' className="mt-5"/><span className='link text-white'>aashish.kumar.37454</span>
                        </a>
                        <a
                            href="mailto:insurancepointoffice@gmail.com"
                            target="_blank"
                        >
                        <FontAwesomeIcon icon={faEnvelope} color='white' className="mt-5"/><span className='link text-white'>insurancepointoffice@gmail.com</span>
                        </a>
                        <a
                            href="https://twitter.com/DIRECTOR_ASHISH?s=08"
                            target="_blank"
                            className="mb-5"
                        >
                        <FontAwesomeIcon icon={faTwitter} color='white' className="mt-5"/><span className='link text-white'>DIRECTOR_ASHISH</span>
                        </a>
                    </div>
                </div>
                <div className="col-lg-5 box-right col-sm-12">
                    <div className="contact-title">
                        <div className="contact-title-number">
                            <span>02/</span>
                        </div>
                        <div className="contact-title-name">
                            <span>SEND US<br/>A MESSAGE</span>
                        </div>
                    </div>
                    <div className='contact-form pt-4'>
                        <div className="input-group mb-3 name-input mt-5">
                            <input type="text" className="form-control" placeholder="Your name" aria-label="Username" aria-describedby="basic-addon1"/>
                        </div>
                        <div className="input-group mb-3 name-input mt-5">
                            <input type="text" className="form-control" placeholder="Email address" aria-label="email" aria-describedby="basic-addon1"/>
                        </div>
                        <div className="input-group mb-3 name-input mt-5">
                            <input type="number" className="form-control" placeholder="Telephone number" aria-label="number" aria-describedby="basic-addon1"/>
                        </div>
                        <div className="input-group comment mb-5 mt-5">
                            <textarea class="form-control" aria-label="With textarea" placeholder="Write something..."></textarea>
                        </div>
                        <button type="button" className="btn submit-btn btn-lg mb-5">SUBMIT</button>
                    </div>
                </div>
            </div>
        </div>
    );
}