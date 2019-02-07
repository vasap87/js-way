import React, { Component } from 'react';
import './App.css';
import UserInput from './components/UserInput';
import UserCard from './components/UserCard';

class App extends Component {
  state = {
    user: {
      firstName: ' ',
      lastName: ' ',
      age: ' ',
      sex: ' '
    }
  }

  onFirstNameChangeHandler = (event) => {
    let userTemp = this.state.user
    userTemp.firstName = event.target.value
    this.setState({ user: userTemp })
  }

  onLastNameChangeHandler = (event) => {
    let userTemp = this.state.user
    userTemp.lastName = event.target.value
    this.setState({ user: userTemp })
  }

  onAgeChangeHandler = (event) => {
    let userTemp = this.state.user
    userTemp.age = event.target.value
    this.setState({ user: userTemp })
  }

  onSexChangeHandler = (event) => {
    let userTemp = this.state.user
    userTemp.sex = event.target.value
    this.setState({ user: userTemp })
  }

  render() {
    return (
      <div>
        <UserInput
          firstNameChange={this.onFirstNameChangeHandler}
          lastNameChange={this.onLastNameChangeHandler}
          ageChange={this.onAgeChangeHandler}
          sexChange={this.onSexChangeHandler} />
        <UserCard
          firstName={this.state.user.firstName}
          lastName={this.state.user.lastName}
          age={this.state.user.age}
          sex={this.state.user.sex} />
      </div>
    );
  }
}


export default App;
