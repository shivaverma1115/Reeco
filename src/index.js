import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import { store } from './redux/store';
import {Provider} from 'react-redux' ;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store} >
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </Provider>
);
