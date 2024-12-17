import './App.css'
import { Routes, Route } from "react-router";

import Home from './components/pages/Home';
import Layout from './components/RootLayout/Layout';
import Products from './components/layout/Products';

                         
function App() {

  return (
    <>
      <Routes>
          <Route element={<Layout />} >
            <Route path="/" element={<Products />} />
          </Route>
      </Routes>
    </>
  )
}
export default App
