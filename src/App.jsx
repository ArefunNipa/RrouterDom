import './App.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(

  createRoutesFromElements(
    <Route 
      path="/" element={"This is Nipa"}
    >
    </Route>
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
