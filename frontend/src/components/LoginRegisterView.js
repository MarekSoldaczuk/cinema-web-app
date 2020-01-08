import React from 'react';
import LoginView from './LoginView';
import RegisterView from './RegisterView';

class LoginRegisterView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: !!localStorage.getItem('token'),
            isRegistered: false}
        }

    onHrefLoginClick = () =>  {
        this.setState({isRegistered: false});
      }
    
    onHrefRegisterClick = () => {
        this.setState({isRegistered: true});
      }

    render() {
        const isRegistered = this.state.isRegistered;
        let view;
       
        if (isRegistered) {
            view = <LoginView onClick={this.onHrefLoginClick} />;
        } else {
            view = <RegisterView onClick={this.onHrefRegisterClick} />;
        }
        
        return <div>{view}</div>;
    }
}


export default LoginRegisterView;