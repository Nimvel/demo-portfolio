import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { useLocation, useNavigate, useParams } from "react-router-dom";

import { connect, Provider } from 'react-redux';

import { initializeApp } from './redux/app-reducer'
import { getAuthUserData } from './redux/auth/auth-reducer';
import store from './redux/store';

import { withSuspense } from './hoc/withSuspense';

import './App.css';

import Preloader from './сomponents/common/Preloader/Preloader';
import HeaderContainer from './сomponents/Header/HeaderContainer';
import Navbar from './сomponents/Navbar/Navbar';
import LoginOrProfileContainer from './сomponents/Profile/LoginOrProfile/LoginOrProfileContainer';

import ProfileContainer from './сomponents/Profile/ProfileContainer';
import Settings from './сomponents/Settings/Settings';

const PostsContainer = React.lazy(() => import('./сomponents/Posts/PostsContainer'));
const DialogsContainer = React.lazy(() => import('./сomponents/Dialogs/DialogsContainer'));
const PhotosContainer = React.lazy(() => import('./сomponents/Photos/Photos'));
const UsersContainer = React.lazy(() => import('./сomponents/Users/UsersContainer'));
const LoginPageContainer = React.lazy(() => import('./сomponents/Login/LoginPageContainer'));

const App = (props) => {
  React.useEffect( () => { props.initializeApp() }, [])

  if (!props.initialized) {
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
        <Navbar navigation={props.state.navigation} />
      </div>
      <div className='content'>
        <Routes>
          <Route path='/profile/:userId' element={<ProfileContainer />} />
          <Route path='/profile/*' element={<ProfileContainer />} />
          <Route path='/posts' element={withSuspense(PostsContainer)} />
          <Route path='/dialogs/*' element={withSuspense(DialogsContainer)} />

          <Route path='/friends' element={withSuspense(UsersContainer, { getPeople: 'getFriends' })} />
          <Route path='/users' element={withSuspense(UsersContainer, { getPeople: 'getUsers' })} />

          <Route path='/photos' element={withSuspense(PhotosContainer)} />
          <Route path='/settings' element={<Settings />} />

          <Route path='/login' element={withSuspense(LoginPageContainer)} />
        </Routes>
      </div>
    </div>
  );
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

const AppContainer = withRouter(connect(mapStateToProps, { getAuthUserData, initializeApp })(App));

const MainApp = (props) => {
  return <React.StrictMode>
    <Provider store={store} >
      <HashRouter>
        <Routes>
          <Route path='/*' element={<AppContainer state={store.getState()} />} />
        </Routes>
      </HashRouter>
    </Provider>
  </React.StrictMode>
}

export default MainApp;