import React from "react";
import  ReactDOM  from "react-dom/client";

// const createEl = React.createElement('h1', {id:'heading'}, 'Helo world 🚀');
const CreateEl = () => (
<h1 
id="heading" 
className="red-COlor">Hello World 😃</h1>
);

const price = 10000;
// !Note : Component Composation
const Header = () => (
    <>
    <h2>{price + 100}</h2>
    <CreateEl />
    <h1>Heloo India</h1>
    <p>Jai Karnataka</p>
    </>
)

const rootEl = ReactDOM.createRoot(document.getElementById('root'));

rootEl.render(<Header />);