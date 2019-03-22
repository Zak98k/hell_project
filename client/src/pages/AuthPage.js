import React, {Component} from 'react';
import axios from 'axios';

class AuthPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: ''
        }
    }

    setLoginPassword = () => {
        axios.post('http://localhost:3000/authentication/' + this.state.login)
            .then((res) => {
                console.log(res);
            }).catch((err) => console.log(err))
    };


    componentDidMount() {

    }


    render() {
        return (
            <div>
                <p>Authentication</p>
                <label>
                    Login
                </label>
                <input type="text" onChange={(e) => this.setState({login: e.target.value})}/>
                <label>
                    Password
                </label>
                <input type="text" onChange={(e) => this.setState({password: e.target.value})}/>
                <button
                    onClick={this.setLoginPassword}>
                    ENTER
                </button>
            </div>
        );
    }
}

export default AuthPage;