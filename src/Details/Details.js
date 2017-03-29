import React, {Component} from 'react';
import './Details.css';

class Details extends Component {

    render(){
        let elementClass = null;
        if(this.props.status === "sucess") {
            elementClass =  "successClass";
        } else if(this.props.status === "error") {
            elementClass = "errorClass";
        }

        return(
            <div className={elementClass}>
                {this.props.message}
            </div>
        )
    }
}

export default Details;
