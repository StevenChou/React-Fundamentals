import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserHeader extends Component {
  render() {
    // const user = this.props.users.find(user => user.id === this.props.userId);
    const { user } = this.props;

    if (!user) {
      return <div>Loading...</div>;
    }

    return <div>{user.name}</div>;
  }
}

const mapStateToProps = ({ users }, ownProps) => {
  return {
    user: users.find(user => user.id === ownProps.userId)
  };
};

export default connect(mapStateToProps)(UserHeader);
