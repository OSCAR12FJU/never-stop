import './App.css'
import { Layout } from './components/pages/Layout'
import{ BrowserRouter, Route, Routes} from "react-router-dom"
import ProductPage from './components/pages/ProductPage'
import { HomeProduct } from './components/sections/HomeProduct'
// import { PrivateRoute } from './components/PrivateRoute'
import { Login } from './components/pages/Login'
import { EditPage } from './components/pages/EditPage'
import { PrivateRoute } from './components/PrivateRoute'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<HomeProduct />} /> 
        <Route path="/products/:id" element={<ProductPage />} />
      </Route>
      <Route path='/login' element={<Login />} />

      <Route element={<PrivateRoute />}> 
      <Route path='edition' element={<EditPage />} />
      </Route>
      <Route path='*' element={<h1 className='text-[20rem]'>404</h1>}/>
    </Routes>
    </BrowserRouter>

    {/* <Layout /> */}
    </>
  )
}

export default App
