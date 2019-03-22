import axios from 'axios';
import React, {Component} from 'react';

class RegPage extends Component {
    constructor(props){
        super(props);
        this.state={
            login:'',
            password:''
        }
    }

    setLoginPassword=()=>{
        axios.get('http://localhost:3000/user/'+this.state.login)
            .then((res)=>{
                console.log(res);
            }).catch((err)=>console.log(err))
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

export default RegPage;