import * as axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { setAuthUserData, setMessage } from '../../redux/auth-reducer';
import Login from "./Login";

class LoginContainer extends React.Component {
    componentDidMount() {
        // axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true })
        //     .then(response => {
        //         if (response.data.resultCode === 0) {
        //             let { id, email, login } = response.data.data;
        //             this.props.setAuthUserData({ id, email, login })
        //         }
        //     })
    }

    render() {
        return (
            <Login {...this.props} />
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, { setAuthUserData, setMessage })(LoginContainer);
