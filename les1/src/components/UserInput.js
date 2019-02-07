import React from 'react'

class UserInput extends React.Component {
    render () {
        return (
            <div>
                <input type="text" onChange={this.props.firstNameChange}/>
                <br></br>
                <input type="text" onChange={this.props.lastNameChange}/>
                <br></br>
                <input type="text" onChange={this.props.ageChange}/>
                <br></br>
                <input type="text" onChange={this.props.sexChange}/>
            </div>
        )
    }
}

export default UserInput