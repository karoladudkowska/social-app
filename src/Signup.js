import React, { Component } from 'react';
import axios from 'axios';
import './Signup.css';


class Signup extends Component {


    state = {
        name: '',
        email: '',
        password: '',
        passwordRep: ''
    };



    handleSubmit = ((event) => {
        event.preventDefault();
        console.log(`this sigUser`);

        // const user = {
        //     name: this.state.name
        // };

        // axios.post(
        //     'http://akademia108.pl/api/social-app/user/signup',
        //     JSON.stringify(newUser),
        //     { 'headers': headers })
        //     .then((req) => {

        //         // your code :)      

        //         console.log(req.data);
        //     }).catch((error) => {
        //         console.error(error);
        //     })

        let newUser = {
            name: "hans",
            email: "hans@hansbot.pl",
            password: "password",
        }

        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }

        axios.post(
            'http://akademia108.pl/api/social-app/user/signup',
            JSON.stringify(newUser),
            { 'headers': headers })
            .then((req) => {

                // your code :)      

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
                    <input type="text" name="name" id="" value={this.state.name}
                        onChange={this.handleNameChange} required
                    ></input>
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" value={this.state.email} onChange={this.handleEmailChange} required
                    ></input>
                    <label for="password">Hasło</label>
                    <input type="password" name="password" id="password"
                        onChange={this.handlePasswordChange} required
                    ></input>
                    <label for="password">Potwierdzenie hasła</label>
                    <input type="password" name="passwordReps" id="passwordRep" value={this.state.passwordRep} required

                        onChange={this.handlePasswordRepChange}
                    ></input>
                    <input className="submit" type="submit" value="Wyślij"></input>
                </form >
            </div >
        );
    }
}


export default Signup;