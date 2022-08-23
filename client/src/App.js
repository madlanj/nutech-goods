import React from 'react'
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './redux/store';
import {Route, Switch } from 'react-router-dom';
import Views from './views/Views';


export const UserContext = React.createContext();
function App() {
  return (
    <div className='App'>
          <Provider store={store}>
<Router>
    <Switch>
    <Route path="/" component={Views}/>
    </Switch>
</Router>
    </Provider>
    </div>
  );
}

export default App;
