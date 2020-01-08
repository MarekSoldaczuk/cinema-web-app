import React from 'react';

class Profile extends React.Component {

    onClickLogOut = () => {
        console.log('logging out!');
        alert('You will be logged out!');
        window.location.replace('./index.html');
        const token = null;
        window.localStorage.removeItem("token");
    }

    render() {
        return (
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div>PROFILE</div>
                <button onClick={this.onClickLogOut}>LOG OUT</button>
            </div>
        );
    }
}

export default Profile;