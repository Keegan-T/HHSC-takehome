import React, { Component } from 'react'
import '../css/Form.css'

export class UserName extends Component {
    // Functions
    continue = e => {
        e.preventDefault();
        if (this.validateData()) {
            this.props.nextPage();
        }
    }

    validateData = () => {
        let errorMessage = document.getElementById("error");
        const { values: { firstName, lastName} } = this.props;

        if (firstName === "" || firstName === null) {
            errorMessage.innerHTML = "First name must be filled in.";
            return false;
        } else if (lastName === "" || lastName === null) {
            errorMessage.innerHTML = "Last name must be filled in.";
            return false;
        }

        return true;
    }

    // Rendering
    render() {
        const { values, updateData } = this.props;
        return (
            <>
                <h1>React SPA</h1>
                <div id="form-container">
                    <form id="user-name">
                        <h2>Enter Your Name</h2>
                        <div id="error">&#8203;</div>

                        <label for="firstName">First Name</label>
                        <input type="text" name="firstName" onChange={ updateData } defaultValue={values.firstName} autoComplete="off" placeholder="First Name"></input>

                        <label for="lastName">Last Name</label>
                        <input type="text" name="lastName" onChange={ updateData } defaultValue={values.lastName} autoComplete="off" placeholder="Last Name"></input>

                        <button id="continue" onClick={this.continue}>Continue</button>
                    </form>
                </div>
            </>
        )
    }
}

export default UserName