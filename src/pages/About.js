import React from 'react';
import { Grid, Cell } from 'react-foundation';
import Navbar from './Navbar';
import Footer from './Footer';

function About() {
    return (
      <div>
        <Navbar />
        <section className="section primary" id="about">
            <div className="text-wrapper">
                <h1>About Me</h1>
            </div>
            <Grid id="about-wrapper">
                <Cell small={12} medium={9} className="paragraph text-wrapper">
                    <div id="about-text">
                        <p>Hi, I'm Thee and I come from Thailand. Coding has been my passion since I was little and I love everything about it. I am interested in Frontend Web Development - I.E. HTML, CSS, and JavaScript. I also have tried learning React and a bit of Backend Web Development with the Node.js-Express-Mongodb stack. I plan to expand my knowledge to other aspects of programming. cya!</p>
                        <p>This is a template. Labore tempor nisi minim proident reprehenderit excepteur pariatur exercitation adipisicing consectetur magna officia commodo. Voluptate dolor ipsum velit velit ipsum magna ea. Amet elit non voluptate excepteur ipsum. Magna elit dolore pariatur veniam Lorem voluptate esse mollit.</p>
                    </div>
                </Cell>
                <Cell small={12} medium={3}>
                    <img id="profile-image" src={`${process.env.PUBLIC_URL}/images/profile.jpg`} alt="Profile" />
                </Cell>
            </Grid>
        </section>
        <Footer />
      </div>
    );
}

export default About;