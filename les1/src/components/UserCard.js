import React from 'react'

class UserCard extends React.Component{
    render() {
        return (
            <div>
                <p>{this.props.firstName}</p>
                <p>{this.props.lastName}</p>
                <p>{this.props.age}</p>
                <p>{this.props.sex}</p>
            </div>
        )
    }
}

export default UserCard