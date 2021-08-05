import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter , Route, Switch} from 'react-router-dom';

import Home from './pages/Home';
import DashBoard from './pages/Dashboard';
import Register from './pages/Register';
import Camping from './pages/Camping';
import Parks from './pages/Parks';
import Supplies from './pages/Supplies';
import Hiking from './pages/Hiking';
import NavBar from './pages/NavBar';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <NavBar />    
        <Switch>
           <Route component={Home} path='/' exact />
           <Route component={DashBoard} path='/dashboard' exact />
           <Route component={Register} path='/register' exact />
           <Route component={Camping} path='/camping' exact />
           <Route component={Parks} path='/parks' exact />
           <Route component={Supplies} path='/supplies' exact />
           <Route component={Hiking} path='/hiking' exact />
           </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
