import styled, {
  createGlobalStyle
} from "styled-components"

import logoPic from './statics/logo.png'

export const GlobalStyle = createGlobalStyle `
  body {
    color: red;
  }
`
export const Logo = styled.a.attrs({
  href:'/'
})`
  height:58px;
  width: 100px;
  display:block;
  background:url(${logoPic});
  background-size:contain;
`