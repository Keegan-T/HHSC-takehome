import React, { Component } from 'react'
import '../css/Form.css'

export class Summary extends Component {
    // Functions
    back = e => {
        e.preventDefault();
        this.props.prevPage();
    }

    // Rendering
    render() {
        const { values: { firstName, lastName, dateOfBirth, healthCardNumber, gender } } = this.props;
        return (
            <>
                <h1>React SPA</h1>
                <div id="summary-container">
                    <div id="summary">
                        <h2>Summary</h2>
                        <ul>
                            <li>Name: {firstName} {lastName}</li>
                            <li>Gender: {gender}</li>
                            <li>Date of Birth: {new Date(Date.parse(dateOfBirth)).toLocaleDateString("en-US")}</li>
                            <li>Health Card Number: XXXXXX{healthCardNumber.toString().substr(-4)}</li>
                        </ul>
                        <button onClick={this.back}>Go Back</button>
                    </div>
                </div>
            </>
        )
    }
}

export default Summary