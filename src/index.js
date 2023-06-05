import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
// import { store, persistor } from 'redux/store';
import { store, persistor } from 'Redux/store';
// import { store } from 'redux/store';
// import { store } from './Redux/store';
import { App } from 'components/App';
import './index.css';

let theme = createTheme({
  palette: {
    primary: {
      main: '#4b2a99',
    },
    secondary: {
      main: '#edf2ff',
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter basename="/react_testwork_final">
              <App />
            </BrowserRouter>
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </>
  </React.StrictMode>
);
