import React, { Component } from 'react'
import Header from './common/header/Header.js'
import { GlobalStyle } from './style'
import { IconGlobalStyle } from './statics/iconfont/iconfont'
class App extends Component {
  render() {
    return (
      <div>

        <Header />
        <GlobalStyle />
        <IconGlobalStyle />
      </div >
    )
  }
}
export default App
