import React, {Component} from 'react';
import Button from "../components/Button/Button";
import TextArea from "../components/InputArea/TextArea";

class RegPage extends Component {


    render() {
        return (
            <div>
                <p>Registration</p>

                <label>
                    Login
                </label>
                <TextArea/>
                <label>
                    Password
                </label>
                <TextArea/>
                <Button
                    value={"Enter"}
                />
            </div>
        );
    }
}

export default RegPage;