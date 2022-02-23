import React, { Component } from 'react';


const Footer = () => {
    return(
        <footer className="footer is-flex is-flex-shrink-0 is-justify-content-center is-align-self-flex-end">
            <div className="content has-text-centered">
                <p className="footer-text">
                    Built by <a href="https://github.com/johnnythai">Johnny Thai</a> using <a href="https://reactjs.org">ReactJS</a>. 
                    The website content is licensed
                    <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/"> CC BY NC SA 4.0</a>.
                </p>
            </div>
        </footer>
    )
}

export default Footer;