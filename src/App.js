import React, { Component } from 'react';
import { Provider } from "react-redux";
import Header from "./common/header";
import LogoPng from "./assets/img/logo.png";
import store from './store';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      logo: {}
    }
  }

  render() {
    return (
      <div className="app">
        <Provider store={store}>
          <Header logo={this.state.logo} />
        </Provider>
      </div>
    );
  }
  componentDidMount() {
    const logoStyle = {
      backgroundImage: `url(${LogoPng})`
    }
    this.setState({
      logo: logoStyle
    })
  }
}

export default App;
