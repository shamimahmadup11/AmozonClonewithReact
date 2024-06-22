
 import { createBrowserRouter , RouterProvider } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Header from "./Components/Header"
import Body from "./Components/Body"
import Footer from "./Components/Footer"
import ImgSlider from "./Components/ImgSlider"
import CartComponents from "./Components/CartComponents"
function App() {

const router=createBrowserRouter([
  {
    path:'/',
    element: <><Navbar/> <Header/> <ImgSlider/> <Body/> <Footer/> </>
  },
    {
    path:'/cart',
    element: <><Navbar/><CartComponents/> <Body/>  <Footer/></>
  }
  ,
    {
    path:'/slide',
    element: <><Navbar/><Header/>  <ImgSlider/></>
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
