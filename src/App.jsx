import './App.css'
import { Routes, Route } from "react-router";

import Home from './components/pages/Home';
import Layout from './components/RootLayout/Layout';

                         
function App() {

  return (
    <>
      <Routes>
          <Route element={<Layout />} >
            <Route path="/" element={<Home />} />
          </Route>
      </Routes>
    </>
  )
}
export default App
