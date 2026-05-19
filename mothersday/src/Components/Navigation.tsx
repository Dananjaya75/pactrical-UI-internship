 import './Navigation.css'
 import logo from '../assets/logo.jpg'
 import search from '../assets/search.jpg'
    import login from '../assets/login.jpg'
    import shoppingbag from '../assets/shopping.png'
    import drop from '../assets/dropdown-arrow.svg'
 function Navigation() {
   return (
 <div className='nav'>
      <ul>

        <li><img src={logo} alt="Logo" className='logo'  /></li>
        <li>Home</li>
        <li>Shop <img src={drop} alt="" className='icons1' /></li>
        <li>Blog <img src={drop} alt="" className='icons1' /></li>
        <li>pages <img src={drop} alt="" className='icons1' /></li>
        <li>Contact</li>
      </ul>
        <input type="text" name="search" id="searchbar" placeholder="Search our store" /><img src={search} alt="" className='icons' />
      <img src={login} alt="" className='icons' />
      <img src={shoppingbag} alt="" className='icons' />
     </div>

   )
}
export default Navigation