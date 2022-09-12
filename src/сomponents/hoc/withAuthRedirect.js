import React from "react"
import { connect } from "react-redux"
// import { Navigate } from "react-router-dom"

export const withAuthRedirect = (Component) => {
    class ConnectedRedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) {
                // return <Navigate to='/login' />
                return 'you are not authorized'
            }
            return <Component {...this.props} />
        }
    }

    const mapStateToProps = (state) => {
        return {
            isAuth: state.auth.isAuth
        }
    }
    
    return connect(mapStateToProps)(ConnectedRedirectComponent)
}