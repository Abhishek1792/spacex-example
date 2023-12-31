/**
 * Import necessary dependencies and components
 */
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { QueryClient, QueryClientProvider } from 'react-query';

// App level configuration
import MainNavigator from '@src/navigations/MainNavigator';
import { persistor, store } from '@src/redux/store';
import { DarkTheme, DefaultTheme } from '@src/theme/theme';
import { ApolloProvider } from '@apollo/client';
import { client } from '@src/appolo-client/AppoloClient';

/**
 * Main App component
 */
const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const theme = isDarkTheme ? DarkTheme : DefaultTheme;

  const queryClient = new QueryClient();

  useEffect(() => {
    // Subscribe to the redux store to listen for changes in the theme
    const storeListener = store.subscribe(() => {
      setIsDarkTheme(store.getState().theme.isDark);
    });

    // Cleanup the subscription when component unmounts
    return () => {
      storeListener();
    };
  });

  return (
    <ApolloProvider client={client}>
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <QueryClientProvider client={queryClient}>
            <PaperProvider theme={theme}>
              <NavigationContainer theme={theme}>
                <StatusBar
                  backgroundColor={isDarkTheme ? 'black' : 'white'}
                  barStyle={isDarkTheme ? 'light-content' : 'dark-content'}
                />
                <MainNavigator />
              </NavigationContainer>
            </PaperProvider>
          </QueryClientProvider>
        </PersistGate>
      </ReduxProvider>
    </ApolloProvider>
  );
};

export default App;
