import React from 'react';
import { Redirect } from 'react-router-dom';

class Profile extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            loggedOut: false
        }
    }


    onClickLogOut = () => {
        console.log('logging out!');
        alert('You will be logged out!');
        // window.location.replace('./index.html');
        const token = null;
        window.localStorage.removeItem("token");
        this.setState({
            loggedOut: true
        })
    }

    render() {
        if(this.state.loggedOut)
        {
            return <Redirect to="/"/>
        }
        return (
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div>PROFILE</div>
                <button onClick={this.onClickLogOut}>LOG OUT</button>
            </div>
        );
    }
}

export default Profile;