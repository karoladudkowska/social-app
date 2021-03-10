// import React from 'react';
import React, { Component } from 'react';
import './Login.css';
import axios from 'axios';

// function Login(props) {

//     return (
//         <div>

//             <h1>Login</h1>

//         </div>
//     );
// }


class Login extends Component {


    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            passwordRep: ''
            //     nameValidation: true,
            //     emailValidation: true,
            //     passwordValidation: true,
            //     passwordRepValidation: true,
            // };

        }
    }

    handleSubmit = ((event) => {
        event.preventDefault();




        let loggedUser = {
            "username": this.state.name,
            "email": this.state.email,
            "password": this.state.password,
            "ttl": 3600
        }

        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer <jwtToken>',


        }
        axios.post(
            'https://akademia108.pl/api/social-app/user/login',
            JSON.stringify(loggedUser),
            { 'headers': headers })
            .then((req) => {

                // your code :)   waidacja ze jest już usrname w bazie   



                console.log(req.data);
            }).catch((error) => {
                console.error(error);
            })
    })

    handleNameChange = (e) => {
        this.setState({
            name: e.target.value
        })

    }

    handleEmailChange = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    handlePasswordChange = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    render() {
        return (
            <div
            ><h1>Logowanie</h1>
                <form
                    onSubmit={this.handleSubmit}>

                    <label for="name">Nazwa użytkownika</label>
                    <input type="text" name="name" id="" value={this.state.name} onChange={this.handleNameChange}>
                    </input>
                    {/* <label for="email">Email</label>
                    <input type="email" name="email" id="email" value={this.state.email} onChange={this.handleEmailChange}
                    ></input> */}

                    <label for="password">Hasło</label>
                    <input type="password" name="password" id="password" onChange={this.handlePasswordChange}
                    ></input>
                    <input className="submit" type="submit" value="Wyślij"></input>
                </form >

            </div >
        );
    }
}

export default Login;