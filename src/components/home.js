import React, { Component } from 'react';
import '../scss/styles.scss'

const HomeBody = () => {
    return(
        <div className="homeBody">
            <br /> This web app was built to interact with the alpaca trading api and is used to display data and test trading algorithms.<br /> 
            <br /> Log in with
            <br /> username: user1
            <br /> password: mintchip1
        </div>
    )
}

const Home = () => {
    return(
        <div className="container">
            <section className="hero is-medium">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <p className="title">
                            Welcome! 
                        </p>
                    </div>
                </div>
            </section>
            <HomeBody />
        </div>
    );
}

export default Home;
