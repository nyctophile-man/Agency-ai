import React from 'react'
import Nav from './compt/Nav'

const App = () => {
  const [theme, setTheme] = useState('light')
  return (
    <div className='dark:bg-black relative'>
      <Nav theme={theme} setTheme={setTheme} />
    </div>
  )
}

export default App