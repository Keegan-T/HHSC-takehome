import React, { Component } from 'react'
import '../css/Form.css'

export class UserDetails extends Component {
    // Functions
    continue = e => {
        e.preventDefault();
        if (this.validateData()) {
            this.props.nextPage();
        }
    }

    back = e => {
        e.preventDefault();
        this.props.prevPage();
    }

    validateHealthCard = number => {
        let digits = Array.from(String(number), Number)
        let checkDigit = digits.pop();
        let sum = 0;

        for (let i = 0; i < digits.length; i++) {
            let digit = digits[i];
            if (i % 2 == 0) {
                let current = digit * 2
                sum += current % 10
                if (current >= 10) sum += 1
            } else {
                sum += digit;
            }
        }

        return (10 - (sum % 10) == checkDigit);
    }

    validateData = () => {
        let errorMessage = document.getElementById("error");
        const { values: { dateOfBirth, healthCardNumber, gender} } = this.props;
        
        if (dateOfBirth === "" || dateOfBirth === null) {
            errorMessage.innerHTML = "Date of birth must be selected.";
            return false
        } else if (dateOfBirth > new Date().toLocaleDateString("fr-CA"))  {
            errorMessage.innerHTML = "Date of birth cannot be in the future.";
            return false;
        } else if (healthCardNumber === "" || healthCardNumber === null) {
            errorMessage.innerHTML = "Health card must be filled in.";
            return false
        } else if (healthCardNumber.length != 10) {
            errorMessage.innerHTML = "Health card must be 10 digits.";
            return false;
        } else if (!this.validateHealthCard(healthCardNumber)) {
            errorMessage.innerHTML = "Health card number invalid.";
            return false;
        } else if (gender === "" || gender === null) {
            errorMessage.innerHTML = "Gender must be selected.";
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
                    <form id="user-details">
                        <h2>Enter Personal Details</h2>
                        <div id="error">&#8203;</div>

                        <label for="firstName">Enter Your Date of Birth</label>
                        <input type="date" name="dateOfBirth" onChange={updateData} defaultValue={values.dateOfBirth} max={new Date().getDay()}></input>
                        
                        <label for="healthCardNumber">Enter Your Health Card Number</label>
                        <input type="text" id="healthCard" name="healthCardNumber" onChange={updateData} defaultValue={values.healthCardNumber} autoComplete="off" maxLength="10"></input>

                        <label for="gender">Enter Your Gender</label>
                        <select name="gender" onChange={updateData} defaultValue={values.gender}>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>

                        <button id="continue" onClick={this.continue}>Continue</button>
                        <button id="back" onClick={this.back}>Go Back</button>
                    </form>
                </div>
            </>
        )
    }
}

export default UserDetails