import { Route, Routes } from 'react-router-dom';
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

function App({ state, dispatch, ...props }) {
  return (
    <div className='App'>
      <div className='header'>
        <HeaderContainer />
      </div>
      <div className='login_or_profile'>
        <LoginOrProfileContainer userId={22798} />
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

export default App;
