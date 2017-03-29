import React, {
    Component
} from 'react';

import './Login.css';
import UserDetails from '../UserDetails/UserDetails';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {username: '', password:'', isButtonClicked : false};
        this.handleLogin = this.handleLogin.bind(this);
        this.handleUserNameChange = this.handleUserNameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleLogin(event) {
        this.setState({isLoggedIn: true});
    }

    handleUserNameChange(event) {
        this.setState({username: event.target.value});
    }

    handlePasswordChange(event) {
         this.setState({password: event.target.value});
    }

    render(){
        const isLoggedIn = this.state.isLoggedIn;
        let userDetails = null;
        if(isLoggedIn) {
            userDetails = <UserDetails username={this.state.username} password={this.state.password}/>;
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
