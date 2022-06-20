import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Route, Routes } from 'react-router-dom';
import store from './redux/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerender = () => {
  root.render(
    <React.StrictMode>
      <Provider store={store} >
        <HashRouter>
          <Routes>
            <Route path='/*' element={<App state={store.getState()} dispatch={store.dispatch.bind(store)} />} />
          </Routes>
        </HashRouter>
      </Provider>
    </React.StrictMode>
  );
}

rerender(store.getState());

store.subscribe(() => {
  let state = store.getState();
  rerender(state);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
