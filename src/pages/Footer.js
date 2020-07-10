import React from 'react';

function Footer() {
    return (
        <footer className="section footer" id="footer">
            <p>&copy;{new Date().getFullYear()} betich, backgrounds by <a href="https://www.svgbackgrounds.com/" target="_blank" rel="noopener noreferrer">svgbackgrounds.com</a></p>
        </footer>
    );
}

export default Footer;