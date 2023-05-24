import {React} from "react";
import {Nav, Basket, NavLogo, NavMenu} from './StyledComponents';
import { SlBasket } from "react-icons/sl";

const Navbar = () => {

     return(
            <Nav>
               <NavLogo href ='/'>SHOP</NavLogo>
              
                    <NavMenu>
                
                         <li className="dropdown">
                              <a href="Her" className="dropbtn">WOMAN</a>
                              <div className="dropdown-content">
                                   <a href="#">clothing</a>
                                   <a href="#">shoes</a>
                                   <a href="#">accessories</a>
                              </div>
                         </li>
                         <li className="dropdown">
                              <a href="Him" className="dropbtn">MAN</a>
                              <div className="dropdown-content">
                                   <a href="#">clothing</a>
                                   <a href="#">shoes</a>
                                   <a href="#">accessories</a>
                              </div>
                         </li>
                         <li className="dropdown">
                              <a href="Kids" className="dropbtn">KIDS</a>

                         </li>
                         
                    </NavMenu>
                    <Basket href='/Basket'>
                         <SlBasket/>
                    </Basket>

               </Nav>
     )
}
export default Navbar


