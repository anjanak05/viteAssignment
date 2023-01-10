import React from 'react';

class EnglishApplicationForm extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: ''
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          First Name:
          <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Phone Number:
          <input type="tel" name="phoneNumber" value={this.state.phoneNumber} onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Address:
          <input type="text" name="address" value={this.state.address} onChange={this.handleChange} />
        </label>
        <br />
        </form>
    )}}
