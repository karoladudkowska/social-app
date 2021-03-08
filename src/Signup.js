import React, { Component } from 'react';
import axios from 'axios';
import './Signup.css';


class Signup extends Component {


    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            passwordRep: '',
            nameValidation: true,
            emailValidation: true,
            passwordValidation: true,
            passwordRepValidation: true,
        };

    }


    validation = () => {

        console.log('waliduje');
        let validationCorrect = true;
        let validationEmailCorrect = true;
        let validationPasswordCorrect = true;
        let validationPasswordRep = true;

        if (this.state.name === '') {
            this.setState({ nameValidation: false });
            validationCorrect = false;
        } else {
            this.setState({ nameValidation: true });
            validationCorrect = true;
        }

        if (this.state.email === '') {
            this.setState({ emailValidation: false });
            validationEmailCorrect = false;
        } else {
            this.setState({ emailValidation: true });
            validationEmailCorrect = true;
        }

        if (this.state.password === '') {
            this.setState({ passwordValidation: false });
            validationPasswordCorrect = false;
        } else {
            this.setState({ passwordValidation: true });
            validationPasswordCorrect = true;
        }

        if (this.state.password === this.state.passwordRep) {
            this.setState({ passwordRepValidation: true });
            validationPasswordRep = true;
        } else {
            this.setState({ passwordRepValidation: false });
            validationPasswordRep = false;
        }

        return validationCorrect

        return validationEmailCorrect

        return validationPasswordCorrect

        return validationPasswordRep;
    }



    handleSubmit = ((event) => {
        event.preventDefault();
        console.log(`this sigUser`);

        if (!this.validation()) {
            return;
        }

        let newUser = {
            username: this.state.name,
            email: this.state.email,
            password: this.state.password
        }

        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',

        }

        axios.post(
            'http://akademia108.pl/api/social-app/user/signup',
            JSON.stringify(newUser),
            { 'headers': headers })
            .then((req) => {

                // your code :)   waidacja ze jest już usrname w bazie   



                console.log(req.data);
            }).catch((error) => {
                console.error(error);
            })
    }

    )




    handleNameChange = (e) => {
        this.setState({
            name: e.target.value
        })
        // console.log(e.target.value);
    }
    handleEmailChange = (e) => {
        this.setState({
            email: e.target.value
        });
    }
    handlePasswordChange = (e) => {
        this.setState({
            password: e.target.value
        });
    }
    handlePasswordRepChange = (e) => {
        this.setState({
            passwordRep: e.target.value
        });
    }



    render() {
        return (
            <div className="sign-up">
                <h1>Sign up</h1>
                <form
                    onSubmit={this.handleSubmit}>

                    <label for="name">Nazwa użytkownika</label>
                    <input type="text" name="name" id="" value={this.state.name} onChange={this.handleNameChange}>

                    </input>
                    {!this.state.nameValidation && <p>Wpisz nazwę uzytkownika</p>}
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" value={this.state.email} onChange={this.handleEmailChange}
                    ></input>
                    {!this.state.emailValidation && <p>Wpisz email</p>}
                    <label for="password">Hasło</label>
                    <input type="password" name="password" id="password" onChange={this.handlePasswordChange}
                    ></input>
                    {!this.state.passwordValidation && <p>Wpisz hasło</p>}
                    <label for="password">Potwierdzenie hasła</label>
                    <input type="password" name="passwordRep" id="passwordRep" value={this.state.passwordRep} onChange={this.handlePasswordRepChange}
                    ></input>
                    {!this.state.passwordValidation && <p>Powtórz hasło</p>}
                    {!this.state.passwordRepValidation && <p>Hasło musi byc identyczne jak w polu Hasło</p>}
                    <input className="submit" type="submit" value="Wyślij"></input>
                </form >
            </div >
        );
    }
}


export default Signup;