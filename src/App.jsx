import React, { Component } from 'react'
import Header from './common/header/Header.js'
import { Provider } from 'react-redux'
import store from './store/index'
import { GlobalStyle } from './style'
import { IconGlobalStyle } from './statics/iconfont/iconfont'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Header />
          <GlobalStyle />
          <IconGlobalStyle />
        </div >
      </Provider>
    )
  }
}
export default App
