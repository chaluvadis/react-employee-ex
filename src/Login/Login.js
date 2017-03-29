import React, {
    Component
} from 'react';

import './Login.css';
import Details from '../Details/Details';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {username: '', password:'', isLoggedIn : false, isError: false, message : ''};
        this.handleLogin = this.handleLogin.bind(this);
        this.handleUserNameChange = this.handleUserNameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleLogin(event) {

        let username =  this.state.username;
        let password = this.state.password;
        if(username !== 'Admin' && password !== 'Admin') {
            this.setState({isError: !this.state.isError, message: "Invalid Login Details"});
        } else {
            this.setState({isLoggedIn: !this.state.isLoggedIn, message: "Welcome to Employee Portal"});
        }
    }

    handleUserNameChange(event) {
        this.setState({username: event.target.value});
    }

    handlePasswordChange(event) {
         this.setState({password: event.target.value});
    }

    render(){
        let isLoggedIn = this.state.isLoggedIn;
        let isError = this.state.isError;
        let userDetails = null;
        if(isLoggedIn && !isError) {
            userDetails = <Details message={this.state.message} status="sucess"/>;
        } else {
            userDetails = <Details message={this.state.message} status="error" />;
        }

        return(
            <div>
                <form name="login-form">
                        <p>
                            <label className="header">Employee Login</label>
                        </p>
                        <p>
                            <input className="form-control" value={this.state.username} type="text" placeholder="User Name" name="username" onChange={this.handleUserNameChange}/>
                        </p>
                        <p>
                            <input className="form-control" value={this.state.password} type="password" placeholder="Password" name="password" onChange={this.handlePasswordChange}/>
                        </p>
                        <p>
                            <button type="button" name="btn-login" onClick={this.handleLogin} className="btn btn-primary">Login</button>
                        </p>
                </form>
                {userDetails}
            </div>
        );
    }
}

export default Login;
