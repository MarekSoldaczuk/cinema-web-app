import React from 'react';
import {Redirect} from 'react-router-dom'

class LoginView extends React.Component {
    constructor(props) {
        super(props);

        this.refs = React.createRef();

        this.state = {
            isLoggedIn: !!localStorage.getItem('token')
        }
    }

    login = (e) => {
        e.preventDefault(); 
        const mail = this.refs.log_email.value;
        const pass = this.refs.log_psw.value;

        const usr = JSON.stringify({
            email: mail,
            password: pass
        });
    
        let token = undefined;
        const xhr = new XMLHttpRequest();
        xhr.onloadend = ()=> {
            if(xhr.status !== 200) {
                alert(xhr.response);
            } else {
                token = xhr.response;
                localStorage.setItem("token", token);
                this.setState({isLoggedIn: true});
            }
        };
        // changed from 3000
        xhr.open("POST", "https://obscure-sierra-52013.herokuapp.com/api/auth/");
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhr.send(usr);
    }

    render() {
        if(this.state.isLoggedIn)
        {
            return <Redirect to="/myaccount"/>
        }

        return (
            <div className="login">
                <form className="form" action="main.html" id="loginForm" onSubmit={this.login}>
                    <div className="container">
                        <h1>Zaloguj się!</h1>
                        <hr />
                        <div className="imgcontainer">
                        </div>
                        <label htmlFor="uname"><b>Email</b></label>
                        <input type="text" placeholder="Adres email" name="uname" id="log_email" ref="log_email" required />

                        <label htmlFor="psw"><b>Hasło</b></label>
                        <input type="password" placeholder="Hasło" name="psw" id="log_psw" ref="log_psw" required />

                        <button type="submit" className="loginbtn btn btn-outline-primary">Zaloguj</button>
                    </div>

                    <p>Chcesz założyć konto w naszym serwisie? <a id="hrefRegister" onClick={this.props.onClick} href="#">Zarejestruj się</a>.</p>

                </form>
            </div>
            );
        }
  }  

  export default LoginView;