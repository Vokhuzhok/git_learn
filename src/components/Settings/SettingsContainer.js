import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { getAuthUserProfile, getIsLoad } from "../../redux/selectors/settingSelector";
import {putAuthUserProfile, loadAuthUserProfile, savePhoto} from "../../redux/reducers/setting-reducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import Settings from "./Settings";
import { getUserId } from "../../redux/selectors/authSelector";
import Preloader from "../common/Preloader";

const SettingsContainer = ({profileAuth, isLoad, authUserId, loadAuthUserProfile, putAuthUserProfile, savePhoto}) => {
    if (isLoad === false ) {loadAuthUserProfile(authUserId)};
    if (profileAuth === null) {return <Preloader/>}
    return <Settings
    profileAuth = {profileAuth}
    putAuthUserProfile = {putAuthUserProfile}
    savePhoto = {savePhoto}
     />
}

let mapStateToProps = (state) => ({
    profileAuth: getAuthUserProfile(state),
    isLoad: getIsLoad(state),
    authUserId: getUserId(state)
    
})

export default compose(
    connect(mapStateToProps, {loadAuthUserProfile, putAuthUserProfile, savePhoto }),
    withAuthRedirect
) (SettingsContainer);