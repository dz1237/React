import React, { Component } from 'react'
import Header from './common/header/Header.jsx'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, } from 'react-router-dom'
import store from './store/index'
import { GlobalStyle } from './style'
import { IconGlobalStyle } from './statics/iconfont/iconfont'
import Detial from './routers/Detial/Detial'
import Home from './routers/Home/Home'
import Login from './routers/Login/Login'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Header />
            <Route path='/' exact component={Home} />
            <Route path='/detial/:id' exact component={Detial} />
            <Route path='/login' exact component={Login} />
          </div>
        </Router>
        <GlobalStyle />
        <IconGlobalStyle />
      </Provider >
    )
  }
}
export default App
