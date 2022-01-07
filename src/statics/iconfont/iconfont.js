import { createGlobalStyle } from 'styled-components';
import icon1 from './iconfont.woff2?t=1641449997768'
import icon2 from './iconfont.woff?t=1641449997768'
import icon3 from './iconfont.ttf?t=1641449997768'

export const IconGlobalStyle = createGlobalStyle
  `
@font-face {
  font-family: "iconfont"; /* Project id 3121869 */
  src: url(${icon1}) format('woff2'),
       url(${icon2}) format('woff'),
       url(${icon3}) format('truetype');
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

// .icon-keaide:before {
//   content: "\e600";
// }

// .icon-fangdajing:before {
//   content: "\e617";
// }

// .icon-qianbi:before {
//   content: "\e615";
// }
`

