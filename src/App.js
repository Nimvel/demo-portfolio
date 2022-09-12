import { Route, Routes } from 'react-router-dom';
import { useLocation, useNavigate, useParams } from "react-router-dom";

import { connect } from 'react-redux';

import {initializeApp} from './redux/app-reducer'
import { getAuthUserData } from './redux/auth-reducer';

import './App.css';

import HeaderContainer from './сomponents/Header/HeaderContainer';
import LoginPageContainer from './сomponents/Login/LoginPageContainer';
import Navbar from './сomponents/Navbar/Navbar';
import LoginOrProfileContainer from './сomponents/Profile/Login/LoginOrProfileContainer';
import ProfileContainer from './сomponents/Profile/ProfileContainer';
import PostsContainer from './сomponents/Posts/PostsContainer';
import PhotosContainer from './сomponents/Photos/PhotosContainer';
import DialogsContainer from './сomponents/Dialogs/DialogsContainer';
import UsersContainer from './сomponents/Users/UsersContainer';
import Settings from './сomponents/Settings/Settings';
import React from 'react';
import Preloader from './сomponents/common/Preloader/Preloader';

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
}

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className='App'>
        <div className='header'>
          <HeaderContainer />
        </div>
        <div className='login_or_profile'>
          <LoginOrProfileContainer />
        </div>
        <div>
          <Navbar navigationPage={this.props.state.navigationPage} />
        </div>
        <div className='content'>
          <Routes>
            <Route path='/profile/:userId' element={<ProfileContainer />} />
            <Route path='/profile/*' element={<ProfileContainer />} />
            <Route path='/posts' element={<PostsContainer />} />
            <Route path='/dialogs/*' element={<DialogsContainer />} />
  
            <Route path='/friends' element={<UsersContainer getPeople={'getFriends'} />} />
            <Route path='/users' element={<UsersContainer getPeople={'getUsers'} />} />
  
            <Route path='/photos' element={<PhotosContainer />} />
            <Route path='/settings' element={<Settings />} />
  
            <Route path='/login' element={<LoginPageContainer />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export const withRouter = (Component) => {
  function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
          <Component
              {...props}
              router={{ location, navigate, params }}
          />
      );
  }
  return ComponentWithRouterProp;
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default withRouter(connect(mapStateToProps, {getAuthUserData, initializeApp})(App));
