import React, { Component } from 'react';

class AuthPage extends Component {
    constructor(props){
        super(props);
        this.state={
            login:'',
            password:''
        }
    }

    setLoginPassword=()=>{
console.log(this.state.login+this.state.password);
    };


    render() {
        return (
            <div>
                <p>Registration</p>
                <label>
                    Login
                </label>
                <input type="text" onChange={(e)=>this.setState({login:e.target.value})} />
                <label>
                    Password
                </label>
                <input type="text" onChange={(e)=>this.setState({password:e.target.value})}/>
                <button
                    onClick={this.setLoginPassword}>
                 ENTER
                </button>
            </div>
        );
    }
}

export default AuthPage;