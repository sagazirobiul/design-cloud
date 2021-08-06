import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <section className="header">
            <div className="shopBox mx-auto">
                <h2>The gift of happiness</h2>
                <p>Show your gratitude with one of our gift sets, large and small,
                specially designed to spread joy to someone you love.</p>
                <button className="branBtn">Shop now</button>
            </div>
        </section>
    );
};

export default Header;