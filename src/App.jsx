import React, { Component } from 'react'
import Header from './common/header/Header.jsx'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, } from 'react-router-dom'
import store from './store/index'
import { GlobalStyle } from './style'
import { IconGlobalStyle } from './statics/iconfont/iconfont'
import Detial from './routers/Detial/Detial'
import Home from './routers/Home/Home'
class App extends Component {
  render() {
    return (
      <Provider store={store}>

        <Router>
          <div>
            <Header />
            <Route path='/' exact component={Home} />
            <Route path='/detial' component={Detial} />
          </div>

        </Router>
        <GlobalStyle />
        <IconGlobalStyle />
      </Provider >
    )
  }
}
export default App
