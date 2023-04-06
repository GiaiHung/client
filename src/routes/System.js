import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom'
import Header from '../containers/Header/Header'
import UserManage from '../containers/System/UserManage'
import UserRedux from '../containers/System/Admin/UserRedux'
import DoctorManage from '../containers/System/Admin/DoctorManage'
import DoctorSchedule from '../containers/System/Admin/DoctorSchedule'

class System extends Component {
  render() {
    const { systemMenuPath } = this.props
    return (
      <div className="system-container">
        {this.props.isLoggedIn && <Header />}
        <div className="system-list">
          <Switch>
            <Route path="/system/user-manage" component={UserManage} />
            <Route path="/system/user-redux" component={UserRedux} />
            <Route path="/system/manage-doctor" component={DoctorManage} />
            <Route
              path="/system/manage-doctor-schedule"
              component={DoctorSchedule}
            />
            <Route
              component={() => {
                return <Redirect to={systemMenuPath} />
              }}
            />
          </Switch>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    systemMenuPath: state.app.systemMenuPath,
    isLoggedIn: state.user.isLoggedIn,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(System)
