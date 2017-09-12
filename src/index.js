import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { UserIsAuthenticated, UserIsNotAuthenticated } from './util/wrappers.js'
// import getWeb3 from './util/web3/getWeb3'

// Components
import App from './app.jsx'

// Initialize react-router-redux.
// const history = syncHistoryWithStore(browserHistory, store)

// Initialize web3 and set in Redux.
// getWeb3
// .then(results => {
//   console.log('Web3 initialized!', results)
// })
// .catch(() => {
//   console.log('Error in web3 initialization.')
// })

ReactDOM.render((
    <App/>
  ),
  document.getElementById('root')
)
