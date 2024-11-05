

import stl from './Footer.module.css';
import logo from '../../assets/monasbtak logo.jpg'
const Footer = ()=>{
    return(
        <div className={stl.footer}>
            <div className={stl.footerLogo}>
                <img src={logo} alt="" />
            </div>
            <div className={stl.footerSection}>
                <h2>About Us</h2>
                <ul>
                <li><a href='#' >What We Offer</a></li>
                <li><a href="#" >About us</a></li>
                <li><a href="#" >FAQ</a></li>
                </ul>
            </div>
            <div className={stl.footerSection}>
                <h2>Community</h2>
                <ul>
                <li><a href="#" target='blank'>Categories</a></li>
                <li><a href="#" target='blank'>Profile</a></li>
                <li><a href="#" target='blank'>Sign Up</a></li>
                </ul>
            </div>
            <div className={stl.footerSection}>
                <h2>Contact Us</h2>
                <ul>
                <li><a href="https://web.facebook.com/?_rdc=1&_rdr" target='blank'>Facebook</a></li>
                <li><a href="https://www.instagram.com/accounts/login/" target='blank'>Instagram</a></li>
                <li><a href="https://x.com/" target='blank'>X</a></li>
                </ul>
            </div>
        </div>
    )

}
export default Footer;