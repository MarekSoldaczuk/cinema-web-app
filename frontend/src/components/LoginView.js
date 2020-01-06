import React from 'react';

const LoginView = (props) => {
    return (
        <div className="login">
            <form className="form" action="main.html" id="loginForm">
                <div className="container">
                    <h1>Zaloguj się!</h1>
                    <hr />
                    <div className="imgcontainer">
                    </div>
                    <label htmlFor="uname"><b>Email</b></label>
                    <input type="text" placeholder="Adres email" name="uname" id="log_email" required />

                    <label htmlFor="psw"><b>Hasło</b></label>
                    <input type="password" placeholder="Hasło" name="psw" id="log_psw" required />

                    <button type="submit" className="loginbtn btn btn-outline-primary">Zaloguj</button>
                </div>

                <p>Chcesz założyć konto w naszym serwisie? <a id="hrefRegister" onClick={props.onClick} href="#">Zarejestruj się</a>.</p>

            </form>
        </div>
    );
  }  

  export default LoginView;