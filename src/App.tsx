import React from 'react'
import { render } from 'react-dom'

import WebFont from 'webfontloader'
import { ThemeProvider } from 'styled-components'

import Home from './screen'
import { GlobalStyle } from './styles/GlobalStyle'
import { defaultTheme } from './styles/theme'

WebFont.load({
  google: {
    families: ['Noto Sans JP:300,400,500,600,700', 'serif']
  }
})

const mainElement = document.createElement('div')
mainElement.setAttribute('id', 'root')
document.body.appendChild(mainElement)

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  )
}

render(<App />, mainElement)
