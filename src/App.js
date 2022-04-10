import React, { Component } from 'react';

import Home from './Home/containers/Home';
import About from './About/containers/About';
import Menu from './Menu/containers/Menu';
import Contact from './Contact/containers/Contact';


class App extends Component {
    render() {
        return (
            <div>
                <Home />
                <About />
                <Contact />
            </div>
        )
    }
}

export default App;