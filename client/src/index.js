import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import ContactBar from './components/views/ContactBar/ContactBar';
import NavBar from './components/views/NavBar/NavBar';
import Footer from './components/views/Footer/Footer';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ContactBar />
        <NavBar />
          <App />
        <Footer />
      </BrowserRouter>
     </Provider> 
  </React.StrictMode>
);
