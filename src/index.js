import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { UserAgentProvider } from '@quentin-sommer/react-useragent';
import { Provider } from 'react-redux';
import configureStore from './store/configure-store';
import registerServiceWorker from './registerServiceWorker';
import theme from './styles/theme';
import App from './App';
import './index.css';

const store = configureStore();
const rootEL = document.getElementById('root');

const app = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <UserAgentProvider ua={window.navigator.userAgent}>
        <Router>
          <Route path="/" component={App} />
        </Router>
      </UserAgentProvider>
    </ThemeProvider>
  </Provider>
);

ReactDOM.render(
  app(),
  rootEL,
);
registerServiceWorker();
