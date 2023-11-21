import { Container, Navbar, Nav, NavDropdown, Form, Button } from 'react-bootstrap';
import { IoMdMail } from "react-icons/io";
import { FaFacebookF, FaYoutube, FaSearch } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { SlGlobe } from "react-icons/sl";
import { useState } from 'react';

function NavBar() {

    return (
        <Navbar collapseOnSelect expand="lg">
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
                    <Nav className="navMenu fw-bold ms-auto gap-2">
                        <div className='d-flex'>
                            <Nav.Link href="" className='col-md-auto'>제품기술</Nav.Link>
                            <NavDropdown title="" className='col text-end d-lg-none d-block'>
                                <NavDropdown.Item href="">D테크</NavDropdown.Item>
                                <NavDropdown.Item href="">D라이브러리</NavDropdown.Item>
                            </NavDropdown>
                        </div>
                        <div className='d-flex'>
                            <Nav.Link href="" className='col-md-auto'>인사이트</Nav.Link>
                            <NavDropdown title="" className='col text-end d-lg-none d-block'>
                                <NavDropdown.Item href="">인사이드 마켓</NavDropdown.Item>
                                <NavDropdown.Item href="">테크 트렌드</NavDropdown.Item>
                            </NavDropdown>
                        </div>
                        <div className='d-flex'>
                            <Nav.Link href="" className='col-md-auto'>ESG</Nav.Link>
                            <NavDropdown title="" className='col text-end d-lg-none d-block'>
                                <NavDropdown.Item href="">피플&컬처</NavDropdown.Item>
                                <NavDropdown.Item href="">지속가능경영</NavDropdown.Item>
                                <NavDropdown.Item href="">지속가능경영 보고서</NavDropdown.Item>
                            </NavDropdown>
                        </div>
                        <div className='d-flex'>
                            <Nav.Link href="" className='col-md-auto'>기업</Nav.Link>
                            <NavDropdown title="" className='col text-end d-lg-none d-block'>
                                <NavDropdown.Item href="">회사소개</NavDropdown.Item>
                                <NavDropdown.Item href="">채용정보</NavDropdown.Item>
                            </NavDropdown>
                        </div>
                        <div className='d-flex'>
                            <Nav.Link href="" className='col-md-auto'>프레스센터</Nav.Link>
                            <NavDropdown title="" className='col text-end d-lg-none d-block'>
                                <NavDropdown.Item href="">보도자료</NavDropdown.Item>
                                <NavDropdown.Item href="">알려드립니다</NavDropdown.Item>
                                <NavDropdown.Item href="">갤러리</NavDropdown.Item>
                                <NavDropdown.Item href="">뉴스레터</NavDropdown.Item>
                            </NavDropdown>
                        </div>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse id="basic-navbar-nav">
                    <div className='d-flex ms-auto justify-content-center gap-3'>
                        <Nav className="">
                            <div className='d-flex gap-2'>
                                <Nav.Link href="#!"><IoMdMail /></Nav.Link>
                                <Nav.Link href="http://www.facebook.com/samsungDisplay"><FaFacebookF /></Nav.Link>
                                <Nav.Link href="http://www.youtube.com/user/SamsungDisplayMedia/"><FaYoutube /></Nav.Link>
                                <Nav.Link href="https://www.instagram.com/samsungdisplay_official/"><AiFillInstagram /></Nav.Link>
                                <Nav.Link href="http://global.samsungdisplay.com/"><SlGlobe /></Nav.Link>
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