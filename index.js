import React from "react";
import  ReactDOM  from "react-dom/client";

const createEl = React.createElement('h1', {id:'heading'}, 'Helo world 🚀');

const rootEl = ReactDOM.createRoot(document.getElementById('root'));

rootEl.render(createEl);