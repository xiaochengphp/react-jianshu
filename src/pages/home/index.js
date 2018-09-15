import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class Home extends Component {
  render () {
    const {text} = this.props.match.params;

    return (
      <div className="Home">
        Home Page => {text}
      </div>
    );
  }
}

export default withRouter (Home);
