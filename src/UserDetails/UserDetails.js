import React, {Component} from 'react';
import './UserDetails.css';


class UserDetails extends Component {
    constructor(props)  {
        super(props);
    }

    render(){
        return(
            <div>
                <p>
                <label className="label-control">UserName</label>
                </p>
                <p>
                <label className="label-control">Password</label>
                </p>
            </div>
        )
    }
}

export default UserDetails;