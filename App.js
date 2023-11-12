import React, { Component } from 'react';
import './App.css';

class App extends Component {
    state = {
    data: null
  };

  componentDidMount() {
    const response = fetch("/get_prices");
    this.callBackendAPI()
      .then((res) => this.setState({ data: res }))
      .catch((err) => console.log(err));
  }

  callBackendAPI = async () => {
    const response = await fetch("/get_prices");
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
          <ul>
            <li></li>
          </ul>
        </header>
      </div>
    );
  }
}
