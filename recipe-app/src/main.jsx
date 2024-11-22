import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'; // Import Provider for Redux
import { store } from './app/store.js'; // Import the Redux store
import './index.css';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
