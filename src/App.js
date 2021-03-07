import React from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Top from './pages/Top'
import Watch from './pages/Watch'
import Search from './pages/Search'
import {Provider as ReduxProvider} from 'react-redux';
import {store} from "./store";

const App = () => {
	return (
		<ReduxProvider store={store}>
			<Router>
				<Switch>
					<Route exact={true} path="/" component={Top}/>
					<Route exact={true} path="/watch" component={Watch}/>
					<Route exact={true} path="/search" component={Search}/>
				</Switch>
			</Router>
		</ReduxProvider>
	)
}

export default App
