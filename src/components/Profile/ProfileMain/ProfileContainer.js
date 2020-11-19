import * as axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Profile from '../Profile';
import {setCurrentProfile} from '../../../redux/profile-reducer'
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {
    componentDidMount () {
    let userId = this.props.match.params.userId;
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then((response) => {
        this.props.setCurrentProfile(response.data);
      });
    }

    render () {
        return <Profile {...this.props} profile = {this.props.profile} />;
    }
};

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

let WithUserUrl = withRouter (ProfileContainer)

export default connect( mapStateToProps, { setCurrentProfile }) (WithUserUrl);