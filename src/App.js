import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
// Components
import { Header } from './components';
// Routes
import Routes from './routes';
// Store
import { persistor, store } from './store';
// Styles
import GlobalStyles from './styles/GlobalStyles';

const App = () => {
  const [showBlackHeader, setShowBlackHeader] = useState();

  useEffect(() => {
    const scrollListener = () => {
      setShowBlackHeader(window.scrollY);
    };
    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <Header isBlack={showBlackHeader} />

          <Routes />

          <GlobalStyles />
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
