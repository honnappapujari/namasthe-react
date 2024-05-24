const createEl = React.createElement('h1', {id:"Heading", abc:'xyz'}, 'hello world');
const getEl = ReactDOM.createRoot(document.getElementById('root'));
getEl.render(createEl);