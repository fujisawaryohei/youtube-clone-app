import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Top from './pages/Top'
import Watch from './pages/Watch'
import Search from './pages/Search'


const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/" component={ Top } />
        <Route exact={true} path="/watch" component={ Watch }/>
        <Route exact={true} path="/search" component={ Search } />
      </Switch>
    </Router>
  )
}

export default App