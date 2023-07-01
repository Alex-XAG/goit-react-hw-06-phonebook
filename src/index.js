import React from 'react';
import ReactDOM from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';
import { App } from 'components/App';
import { Provider } from 'react-redux';
import './index.css';
// import { AppStudy } from 'study/componentsStudy/AppStudy';
import { persistor, store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
        {/* <AppStudy /> */}
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
