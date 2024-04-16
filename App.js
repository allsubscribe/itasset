import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Assets from './pages/Assets';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Assets} />
        {/* Add more routes as needed */}
      </Switch>
    </Router>
  );
};

export default App;