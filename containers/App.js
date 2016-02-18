/**
 * Created by adjohnso on 2/17/2016.
 */
import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import UserComponent from '../components/UsersComponent'
import { switchUser } from '../actions'
console.log(switchUser)

class App extends Component {
  render() {
    const { users, onUserClick } = this.props;
    return (
      <div>
        <UserComponent users={users} actions={onUserClick} />
      </div>
    )
  }
}

App.propTypes = {
  users: PropTypes.array.isRequired,
  onUserClick: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    users: state.users
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onUserClick: (id) => {
      "use strict";
      dispatch(switchUser(id))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
