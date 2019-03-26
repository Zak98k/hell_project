import React, {Component} from 'react';
import connect from 'react-redux/es/connect/connect';
import {getAuthData} from '../actions/actionCreator';

//import {authentication} from "../api/rest/restContoller";


class AuthPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: '',
            data: {
                success: false
            }

        }
    }

    setLoginPassword = () => {
        this.props.getAuthData({email: this.state.login, password: this.state.password});
    };

    success() {
            return <p>{this.props.data.message}</p>;
    };


    componentDidMount() {
    }


    render() {
        if (this.props.isFetching) {
            return <div>Loading...</div>
        }
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
                <br/>
                {this.success()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.reducers.isFetching,
        data: state.reducers.data,
        error:state.reducers.data
    }
};
const mapDispatchToProps = (dispatch) => ({
    getAuthData: (data) => dispatch(getAuthData(data))

});

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);