import React from 'react';
import {Redirect} from 'react-router-dom'

class RegisterView extends React.Component {
    constructor(props) { 
        super(props);

        this.refs = React.createRef();
        this.state = { isLoggedIn: !!localStorage.getItem('token') }
    }

    registration = (e) => {
        e.preventDefault(); 

        const mail = this.refs.reg_email.value;
        const pass = this.refs.reg_psw.value;
        const pass_rep = this.refs.reg_psw_repeat.value;

        if (pass !== pass_rep) {
            return alert('Oba hasła muszą być takie same');
        }

        const usr = JSON.stringify({
            email: mail,
            password: pass
        }); 
    
        const xhr = new XMLHttpRequest();
        xhr.onloadend = ()=> {
            if(xhr.status !== 200) {
                alert(xhr.response);
            } else {
                let token = xhr.response;
                localStorage.setItem("token", token);
                this.setState({isLoggedIn: true})

            }
        }
        // changed to 3020, as 3000 is used by react App
        xhr.open("POST", "https://obscure-sierra-52013.herokuapp.com/api/users/");
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhr.send(usr);
    };

    render() {
        if(this.state.isLoggedIn)
        {
            return <Redirect to="/myaccount"/>
        }

        return (
            <div className="forms">
                <div className="registration">
                    <form action="action_page.php" id="registerForm" onSubmit={this.registration}>
                        <div className="container">
                            <h1>Załóż konto!</h1>
                            <hr />
                            
                            <label htmlFor="email"><b>Email</b></label>
                            <input type="text" placeholder="Adres email" name="email" id="reg_email" ref="reg_email" required />

                            <label htmlFor="psw"><b>Hasło</b></label>
                            <input type="password" placeholder="Hasło" name="psw" id="reg_psw" ref="reg_psw" required />

                            <label htmlFor="psw-repeat"><b>Powtórz hasło</b></label>
                            <input type="password" placeholder="Powtórz hasło" name="psw-repeat" id="reg_psw_repeat" ref="reg_psw_repeat" required />
                            <hr />
                            <button type="submit" className="registerbtn">Rejestracja</button>
                        </div>

                        <p>Posiadasz konto w naszym serwisie? <a id="hrefLogin" onClick={this.props.onClick} href="#">Zaloguj się</a>.</p>

                    </form>
                </div>
            </div>
        );
    }
}

export default RegisterView;