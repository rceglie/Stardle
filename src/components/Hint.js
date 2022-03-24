import React from 'react';
import '../App.css';

class Hint extends React.Component{

    render(){
        return (
            <div className="hint">
                <div className="picture">
                    <img src={`https://image.tmdb.org/t/p/original/${this.props.actor.profile_path}`} alt="" className="image"/>
                </div>
                <span>{this.props.actor.name}</span>
            </div>
        )
    }

}

export default Hint;