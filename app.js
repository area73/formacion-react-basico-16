import React from 'react';
import { render } from 'react-dom';


    console.log('external js loaded');
    const App = () => React.createElement("div", {}, "Luke yo soy tu padre");

    render(
        React.createElement(App),
        document.getElementById("root")
    );


