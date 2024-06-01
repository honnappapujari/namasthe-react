import React from "react";
import  ReactDOM  from "react-dom/client";

// const createEl = React.createElement('h1', {id:'heading'}, 'Helo world 🚀');
const createEl = (<h1 
id="heading" 
className="red-COlor">Hello World</h1>);

const Header = () => (
    <>
    <h1>Heloo India</h1>
    <p>Jai Karnataka</p>
    </>
)
console.log(createEl);

const rootEl = ReactDOM.createRoot(document.getElementById('root'));

rootEl.render(<Header />);