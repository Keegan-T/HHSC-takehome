import React, { Component } from 'react'
import UserName from './UserName';
import UserDetails from './UserDetails'
import Summary from './Summary';

export class Form extends Component {
    // Variables
    state = {
        view: 1,
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        healthCardNumber: "",
        gender: "Male",
    }

    // Functions
    nextPage = () => {
        const { view } = this.state;
        this.setState({
            view: view + 1
        });
    }

    prevPage = () => {
        const { view } = this.state;
        this.setState({
            view: view - 1
        });
    }

    updateData = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    // Rendering
    render() {
        // State information
        const { view } = this.state;
        const { firstName, lastName, dateOfBirth, healthCardNumber, gender } = this.state;
        const values = { firstName, lastName, dateOfBirth, healthCardNumber, gender };

        switch (view) {
            // User Name Page
            case 1: 
                return (
                    <UserName
                        nextPage = { this.nextPage }
                        updateData = { this.updateData }
                        values = { values }
                    />
                )
            // User Details Page
            case 2:
                return (
                    <UserDetails 
                    nextPage = { this.nextPage }
                    prevPage = { this.prevPage }
                    updateData = { this.updateData }
                    values = { values }
                    />
                )
            // Summary Page
            case 3:
                return (
                    <Summary
                        prevPage = { this.prevPage }
                        values = { values }
                    />
                )
            default:
                break;
        }
    }
}

export default Form