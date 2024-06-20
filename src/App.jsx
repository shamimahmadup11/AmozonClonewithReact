
 import { createBrowserRouter , RouterProvider } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Header from "./Components/Header"
import Body from "./Components/Body"
function App() {

const router=createBrowserRouter([
  {
    path:'/',
    element: <><Navbar/> <Header/></>
  },
    {
    path:'/del',
    element: <><Navbar/><Header/> <Body/></>
  }
])
  return (
    <>
     <RouterProvider router={router}>
    <App/>
     </RouterProvider>
    </>
  )
}

export default App
