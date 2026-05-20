import './App.css'
import Navigation from './Components/Navigation'
import Wallimage from './Components/Wallimage'
import Scrollbar from './Components/Srollbar'
import Products from './Pages/Products'
import Footer from './Components/Footer'
import Valantine from './Pages/Valantine'
import FeaturedItem from './Pages/FeaturedItem'
import Expert from './Pages/expert'




function App() {
  
  return (
    <>
    <Navigation></Navigation>
    <Wallimage></Wallimage>
    <Scrollbar></Scrollbar>
    <Products></Products>
    <Valantine></Valantine>
    <FeaturedItem></FeaturedItem>
    <Expert></Expert>
    <Footer></Footer>


    </>
  )
}

export default App
