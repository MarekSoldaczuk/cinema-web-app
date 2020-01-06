import React from 'react';

const RegisterView = (props) => {
    return (
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

                    <p>Posiadasz konto w naszym serwisie? <a id="hrefLogin" onClick={props.onClick} href="#">Zaloguj się</a>.</p>

                </form>
            </div>
        </div>
    );
}

export default RegisterView;