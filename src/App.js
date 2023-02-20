import './App.css'
import { Helmet } from 'react-helmet'

function App() {
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Helmet Tutorial</title>

        <meta
          name='description'
          content='React-Helmet demo by the web developers.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />

        <meta name='theme-color' content='#010101' />
      </Helmet>
      <div className='App'>
        <h2>Hello and welcome to the React-Helmet demo</h2>
      </div>
    </>
  )
}

export default App
