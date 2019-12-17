import React from 'react';
import Home from './components/Home';
// import NoMatch from './components/NoMatch';
// import NavBar from './components/NavBar';
// import Login from './components/Login';
// import Register from './components/Register';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
// import FetchUser from './components/FetchUser';

const App = () => (
  <>
    {/* <NavBar/> */}
    <Container>
      {/* <FetchUser> */}
        <Switch>
          <Route exact path = '/' component = {Home} />
          {/* <Route exact path = '/Login' component = {Login} />
          <Route exact path = '/Register' component = {Register} />
          <Route component = {NoMatch} /> */}
        </Switch>
      {/* </FetchUser> */}
    </Container>
  </>
);

export default App;