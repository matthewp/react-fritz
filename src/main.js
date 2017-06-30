import React from 'react';
import ReactDOM from 'react-dom';
import fritz from 'fritz/window';
import h from './val.js';

fritz.use(new Worker('/worker.js'));

class Home extends React.Component {
  render() {
    return <div>
      <span>Hello world</span>
      <worker-component name={"Wilbur"}></worker-component>
    </div>
  }
}

const main = document.querySelector('main');
ReactDOM.render(<Home/>, main);