import './App.css'
import { Layout } from './components/pages/Layout'
import{ BrowserRouter, Route, Routes} from "react-router-dom"
import ProductPage from './components/pages/ProductPage'
import { HomeProduct } from './components/sections/HomeProduct'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<HomeProduct />} /> 
        <Route path="/products/:id" element={<ProductPage />} />
      </Route>
    </Routes>
    </BrowserRouter>

    {/* <Layout /> */}
    </>
  )
}

export default App
