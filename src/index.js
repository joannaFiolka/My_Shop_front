import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {AuthContextProvider} from "./context/AuthCotext";
import {Provider} from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import {LoadingIcon} from "./common/LoadingIcon/LoadingIcon";
import {persistor, store} from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <PersistGate loading={<LoadingIcon/>} persistor ={persistor}>
      <AuthContextProvider>
    <App />
      </AuthContextProvider>
      </PersistGate>
      </Provider>
  </React.StrictMode>
);


reportWebVitals();
