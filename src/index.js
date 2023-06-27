import React from 'react';
import ReactDOM from 'react-dom/client';
// import { App } from 'components/App';
import { Provider } from 'react-redux';
import { store } from 'study/redux/store';
import './index.css';
import { AppStudy } from 'study/componentsStudy/AppStudy';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
      {/* <App /> */}
      <AppStudy />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
