import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import { Categories } from './components/Categories'

function App() {
  return (
    <>
      <Header />
      <main>
        {/* Create your routes here. Don't forget to install the router package! */}
        <Routes>
        <Route path='/home' element={<Home />} /> 
        <Route path='/categories' element={<Categories/>} /> 

        </Routes>
      </main>
    </>
  )
}

export default App
