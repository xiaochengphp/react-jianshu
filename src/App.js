import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './common/header';
import Home from './pages//home/loadable';
import Login from './pages//login';
import LogoPng from './assets/img/logo.png';
import store from './store';

class App extends Component {
  constructor (props) {
    super (props);

    this.state = {
      logo: {},
    };
  }

  render () {
    return (
      <Provider store={store}>
        <div className="app">
          <Router>
            <div>
            <Header logo={this.state.logo} />
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/text/:text" component={Home} />
                <Route path="/detail" render={() => <div>detail</div>} />
              </Switch>
            </div>
          </Router>
        </div>
      </Provider>
    );
  }
  componentDidMount () {
    const logoStyle = {
      backgroundImage: `url(${LogoPng})`,
    };
    this.setState ({
      logo: logoStyle,
    });
  }
}

export default App;
