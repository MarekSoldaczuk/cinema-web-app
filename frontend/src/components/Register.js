import React from 'react';

class Register extends React.Component {
    onHrefLoginClick = (event) =>   {
        event.target.parentNode.parentNode.parentNode.style.display = "none";
        event.target.parentNode.parentNode.parentNode.nextElementSibling.style.display = "block";
    }

    onHrefRegisterClick = (event) => {
        console.log(event.target.parentNode.parentNode.parentNode.previousElementSibling);
        event.target.parentNode.parentNode.parentNode.style.display = "none";
        event.target.parentNode.parentNode.parentNode.previousElementSibling.style.display = "block";
    }

    render() {
        return (
            <div>
                <div className="forms">
                    <div className="registration">
                        <form action="action_page.php" id="registerForm">
                            <div className="container">
                                <h1>Załóż konto!</h1>
                                <hr />

                                <label htmlFor="email"><b>Email</b></label>
                                <input type="text" placeholder="Adres email" name="email" id="reg_email" required />

                                <label htmlFor="psw"><b>Hasło</b></label>
                                <input type="password" placeholder="Hasło" name="psw" id="reg_psw" required />

                                <label htmlFor="psw-repeat"><b>Powtórz hasło</b></label>
                                <input type="password" placeholder="Powtórz hasło" name="psw-repeat" id="reg_psw_repeat" required />
                                <hr />
                                <button type="submit" className="registerbtn">Rejestracja</button>
                            </div>

                            <p>Posiadasz konto w naszym serwisie? <a id="hrefLogin" onClick={this.onHrefLoginClick} href="#">Zaloguj się</a>.</p>

                        </form>
                    </div>
                    <div className="login" style={{display: 'none'}}>
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

                            <p>Chcesz założyć konto w naszym serwisie? <a id="hrefRegister" onClick={this.onHrefRegisterClick} href="#">Zarejestruj się</a>.</p>

                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;