
 import { createBrowserRouter , RouterProvider } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Header from "./Components/Header"
import Body from "./Components/Body"
import Footer from "./Components/Footer"
import ImgSlider from "./Components/ImgSlider"
function App() {

const router=createBrowserRouter([
  {
    path:'/',
    element: <><Navbar/> <Header/> <ImgSlider/> <Body/> <Footer/> </>
  },
    {
    path:'/del',
    element: <><Navbar/><Header/>  <Body/></>
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
