import React, {Component} from 'react';
import './UserDetails.css';


class UserDetails extends Component {
    render(){
        return(
            <div>
                <p>
                <label className="label-control">
                    Hello {this.props.username} ! Welcome to my portal.
                </label>
                </p>
            </div>
        )
    }
}

export default UserDetails;