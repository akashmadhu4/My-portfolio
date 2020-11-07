import React,{useState} from 'react';
import './Navbar.css';
import logo from '../images/logo.png';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem} from 'reactstrap';


function Header(){
    const [isNavOpen, setNav] = useState(false);
    const [isbuttonclicked,setbutton] = useState(false);


    var togglebutton=()=>{
        setbutton(!isbuttonclicked);
        setNav(!isNavOpen);
    }
    var togglelink=()=>{
        if(isbuttonclicked && isNavOpen){
            setbutton(false);
            setNav(false);
        }
    }

    return(
        <Navbar className="navbar-dark bg-dark sticky-top" expand="md">
            <div className="container">
                <NavbarToggler onClick={()=>togglebutton()} />
                <NavbarBrand className="ml-auto nav_text" href="#home"><img src={logo} height="30" width="30" />Akash Madhu</NavbarBrand>
                <Collapse isOpen={isNavOpen} navbar>
                    <Nav navbar id="navbarSupportedContent">
                    <NavItem>
                        <a className="nav-link nav_text ml-2 "  href='#home' onClick={()=>togglelink()}><span className="fa fa-home fa-lg"></span> Home</a>
                    </NavItem>
                    <NavItem>
                        <a className="nav-link nav_text ml-2 " href='#aboutme' onClick={()=>togglelink()}><span className="fa fa-info fa-lg"></span> About Me</a>
                    </NavItem>
                    <NavItem>
                        <a className="nav-link nav_text ml-2 "  href='#' onClick={()=>togglelink()}><span className="fa fa-list fa-lg"></span>My Projects</a>
                    </NavItem>
                    <NavItem>
                        <a className="nav-link nav_text ml-2" href='#certificates' onClick={()=>togglelink()}><span className="fa fa-address-card fa-lg"></span> My Certificates</a>
                    </NavItem>
                    </Nav>
                </Collapse>
            </div>
        </Navbar>
    );
}

export default Header;


