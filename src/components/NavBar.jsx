import { Button, Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { IoMdMail } from "react-icons/io";
import { FaFacebookF, FaYoutube, FaSearch } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { SlGlobe } from "react-icons/sl";

function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" className="">
            <Container>
                <Navbar.Brand href="#home"><img src="./img/logo.png" alt="" /></Navbar.Brand>
                <div className='d-flex gap-2'>
                    <div className='search d-block d-lg-none'>
                        <a href="" className='searchBtn'>
                            <div className='searchIcon'><FaSearch /></div>
                        </a>
                    </div>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                </div>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="navMenu fw-bold ms-auto">
                        <Nav.Link href="#home">제품기술</Nav.Link>
                        <Nav.Link href="#!">인사이트</Nav.Link>
                        <Nav.Link href="#!">ESG</Nav.Link>
                        <Nav.Link href="#!">기업</Nav.Link>
                        <Nav.Link href="#!">프레스센터</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse id="basic-navbar-nav">
                    <div className='d-flex ms-auto justify-content-center'>
                        <Nav className="">
                            <div className='d-flex gap-2'>
                                <Nav.Link href="#!"><IoMdMail /></Nav.Link>
                                <Nav.Link href="#!"><FaFacebookF /></Nav.Link>
                                <Nav.Link href="#!"><FaYoutube /></Nav.Link>
                                <Nav.Link href="#!"><AiFillInstagram /></Nav.Link>
                                <Nav.Link href="#!"><SlGlobe /></Nav.Link>
                            </div>
                        </Nav>
                        <div className='search d-none d-lg-block'>
                            <a href="" className='searchBtn'>
                                <div className='searchIcon'><FaSearch /></div>
                            </a>
                        </div>
                    </div>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    )
}

export default NavBar;