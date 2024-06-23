
 import { createBrowserRouter , RouterProvider } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Header from "./Components/Header"
import Body from "./Components/Body"
import Footer from "./Components/Footer"
import ImgSlider from "./Components/ImgSlider"
import CartComponents from "./Components/CartComponents"
import Payment from "./Components/Payment"
import SignUp from "./Components/SignUp"
import Profile from "./Components/Profile"
import HelpComponent from "./Components/HelpComponent"
function App() {

const router=createBrowserRouter([
  {
    path:'/',
    element: <><Navbar/> <Header/> <ImgSlider/> <Body/> <Footer/> </>
  },
    {
    path:'/cart',
    element: <><Navbar/> <Header/> <CartComponents/> <Body/>  <Footer/></>
  }
  ,
    {
    path:'/payment',
    element: <><Navbar/> <Header/>  <Payment/>  <Footer/></>
  }
  ,
    {
    path:'/signup',
    element: <><Navbar/> <Header/> <SignUp/>  <Footer/></>
  }
  ,
    {
    path:'/profile',
    element: <><Navbar/> <Header/> <Profile/>  <Footer/></>
  }
  ,
  {
  path:'/help',
  element: <><Navbar/> <Header/> <HelpComponent/>   <Footer/></>
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
