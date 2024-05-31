import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Products from './pages/Products';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/products">
            <Products />
          </Route>
          {/* 其他路由 */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;

