import React from 'react'
import HomePage from './pages/HomePage'
import { ThemeProvider } from '@emotion/react'
import theme from './theme'


const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <div>
      <HomePage />
    </div>
    </ThemeProvider>
  )
}

export default App