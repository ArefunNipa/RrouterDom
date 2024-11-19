import './App.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import Products from './components/layout/Products';
import Users from './components/Users';

const router = createBrowserRouter(

  createRoutesFromElements(
    <>
      {/* <Route
        path="/" element={"This is Nipa"}
      /> */}

      <Route
        path="/" element={<Products />}
      />
      <Route
        path="/" element={<Users />}
      />
    </>
  )
);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
export default App
