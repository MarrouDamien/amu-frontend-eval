import React, { Component, useEffect, useState } from "react";

import { createCustomer } from "../api/http";

class CustomerCreateForm extends Component {
    constructor(props){
        super(props)
        this.state = { fullName : "", email:""}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
      }

      handleChange(event){
        this.setState({
          [event.target.name] : event.target.value
        })
      }

      handleSubmit(event){
        event.preventDefault();
        console.log(this.state);
        createCustomer(this.state);
    }
    render(){
    return <>

        <form onSubmit={this.handleSubmit}>
            <input
                type="text"
                name="fullName"
                placeholder="Nom complet"
                value={this.state.fullName}
                onChange={this.handleChange}
            />
            <input
                type="email"
                name="email"
                placeholder="email"
                value={this.state.email}
                onChange={this.handleChange}
            />
            <input type="submit" />
        </form>
    </>
    }
}

export default CustomerCreateForm