import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={rootStor.store}>
      <PersistGate loading={null} persistor={rootStor.persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
