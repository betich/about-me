import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function MainPage() {
    return (
      <div>
        <Navbar />
        <section className="section main" id="welcome-section">
          <div id="content">
            <h1>betich</h1>
            <p>a web developer.</p>
          </div>
        </section>
        <Footer />
      </div>
    );
}

export default MainPage;