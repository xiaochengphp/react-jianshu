import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class Login extends Component {
  render () {
    return (
      <div className="Login" ref="login">
        <div>
          <input type="text" ref={input => (this.account = input)} />
        </div>
        <div>
          <input type="password" ref={input => (this.password = input)} />
        </div>
        <button onClick={() => this.props.Login (this.account, this.password)}>
          Login
        </button>
      </div>
    );
  }

  Login = (account, password) => {
    console.log (account, password);
	};
	
	componentDidMount(){
		// console.log(this.refs['login'])
	}
}

const mapDispatchToProps = dispatch => {
  return {
    Login (account, password) {
      console.log (account, password);
    },
  };
};
export default connect (null, mapDispatchToProps) (withRouter(Login));
