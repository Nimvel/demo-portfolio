import { Route, Routes } from 'react-router-dom';
import './App.css';
import Friends from './сomponents/Friends/Friends';
import Header from './сomponents/Header/Header';
import Navbar from './сomponents/Navbar/Navbar';
import ProfileContainer from './сomponents/Profile/ProfileContainer';
import PhotosContainer from './сomponents/Photos/PhotosContainer';
import Settings from './сomponents/Settings/Settings';
import PostsContainer from './сomponents/Posts/PostsContainer';
import DialogsContainer from './сomponents/Dialogs/DialogsContainer';
import UsersContainer from './сomponents/Users/UsersContainer';

function App( {state, dispatch, ...props} ) {
  return (
    <div className='App'>
      <div className='header'>
        <Header />
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
          <Route path='/friends' element={<Friends />} />
          <Route path='/photos' element={<PhotosContainer />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/users' element={<UsersContainer />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
