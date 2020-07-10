import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function Contact() {
    return (
      <div>
        <Navbar />
        <section class="section secondary" id="contact">
            <div class="text-wrapper">
                <h1>Contact</h1>
                <div id="email">
                    <p>Email: <a href="mailto:betich365@gmail.com" target="_blank" rel="noopener noreferrer">betich365@gmail.com</a></p>
                </div>
                <div id="contact-wrapper" class="text-wrapper">
                    <a id="profile-link" href="https://github.com/betich" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                    <a href="https://codepen.io/betich" target="_blank" rel="noopener noreferrer"><i class="fab fa-codepen"></i></a>
                    <a href="https://www.instagram.com/7h33_p4n17h1/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
        </section>
        <Footer />
      </div>
    );
}

export default Contact;