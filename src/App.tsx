import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Products from './components/Products'
import { Categories } from './components/Categories'
import { ProductDetail } from './components/ProductDetail'
import { PageNotFound } from './components/PageNotFound'
import { Basket } from './components/Basket'
import { CategoriesItem } from './components/CategorisItem'

function App() {
  return (
    <>
      <Header />
      <main>
        {/* Create your routes here. Don't forget to install the router package! */}
        <Routes>
        <Route path='/products' element={<Products/>} /> 
        <Route path='/categories' element={<Categories/>} /> 
        <Route path='/products/:id' element={<ProductDetail/>} /> 
        <Route path='*' element={<PageNotFound />} />
        <Route path='/basket/:id' element={<Basket />} />
        <Route path='/categories/:id' element={<CategoriesItem />} />


        </Routes>
       
      </main>
    </>
  )
}

export default App
