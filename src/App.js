import { Route, Routes } from 'react-router-dom';
import './App.css';

import HeaderContainer from './сomponents/Header/HeaderContainer';
import LoginContainer from './сomponents/Login/LoginContainer';
import Navbar from './сomponents/Navbar/Navbar';
import ProfileContainer from './сomponents/Profile/ProfileContainer';
import PostsContainer from './сomponents/Posts/PostsContainer';
import PhotosContainer from './сomponents/Photos/PhotosContainer';
import DialogsContainer from './сomponents/Dialogs/DialogsContainer';
import FriendsContainer from './сomponents/Friends/FriendsContainer';
import UsersContainer from './сomponents/Users/UsersContainer';
import Settings from './сomponents/Settings/Settings';

function App({ state, dispatch, ...props }) {
  return (
    <div className='App'>
      <div className='header'>
        <HeaderContainer />
      </div>
      <div className='login_or_profile'>
        <LoginContainer />
      </div>
      <div>
        <Navbar navigationPage={state.navigationPage} />
      </div>
      <div className='content'>
        <Routes>
          <Route path='/profile/:userId' element={<ProfileContainer />} />
          <Route path='/profile/*' element={<ProfileContainer />} />
          <Route path='/posts' element={<PostsContainer />} />
          <Route path='/dialogs/*' element={<DialogsContainer />} />
          <Route path='/friends' element={<FriendsContainer />} />
          <Route path='/photos' element={<PhotosContainer />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/users' element={<UsersContainer />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
