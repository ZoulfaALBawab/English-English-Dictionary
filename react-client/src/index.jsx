import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import AppRoute from './components/AppRoute.jsx';
// import Interface from './components/Interface.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

     }
  };



  render () {
    return (<div>
      <AppRoute />
     </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
