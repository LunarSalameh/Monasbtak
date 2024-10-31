import stl from './navbar.module.css';
import logo from '../../assets/monasbtak logo.jpg'
const Navbar = () => {
  return (
    <nav className={stl.navbar}>
      <div className={stl.navbar_brand}>
        <img src={logo} alt="" className={stl.logo}  />
        <h2  className={stl.navbar_name}><a href="#home">Monasbtk</a></h2>
      </div>
      <ul className={stl.navbar_list}>
        <li className={stl.navbar_item}><a href="/">Home</a></li>
        <li className={stl.navbar_item}><a href="#categories">Categories</a></li>
        <li className={stl.navbar_item}><a href="#about">profile</a></li>
        <li className={stl.navbar_item}><a href="#about">About Us</a></li>
        <li className={stl.navbar_item}><a href="#signup">Sign Up</a></li>
        
      </ul>
    </nav>
  );
}

export default Navbar;
