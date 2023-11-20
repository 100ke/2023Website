import { Container } from 'react-bootstrap';
import { IoIosArrowUp, IoMdHome } from "react-icons/io";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { SlGlobe } from "react-icons/sl";

function Footer() {
    return(
        <Container className='footer_wrap d-lg-flex'>
            <div className="ft_left">
                <div className="logo_menu d-lg-flex gap-5">
                    <div className="ft_logo">
                        <a href="https://www.samsungdisplay.com/"><img src="./img/footerLogo.png" alt="" /></a>
                    </div>
                    <div className="ft_menu">
                        <a href="">개인정보처리방침</a>
                        <a href="">운영정책</a>
                        <a href="">뉴스룸 구독</a>
                    </div>
                </div>
                <div className="info">
                    <p>본사 : 17113 경기도 용인시 기흥구 삼성로1</p>
                    <p>대표번호 : 031-5181-1114</p>
                    <p>Copyright © 2022 SAMSUNG DISPLAY Co.,Ltd. All Rights Reserved.</p>
                </div>
            </div>
            <div className="ft_right ms-auto">
                <div className="socail_link d-flex gap-2">
                    <a href="http://www.samsungdisplay.com/">
                        <div className="linkWrap"><IoMdHome /></div>
                    </a>
                    <a href="http://www.facebook.com/samsungDisplay">
                        <div className="linkWrap"><FaFacebookF /></div>
                    </a>
                    <a href="http://www.youtube.com/user/SamsungDisplayMedia/">
                        <div className="linkWrap"><FaYoutube /></div>
                    </a>
                    <a href="https://www.instagram.com/samsungdisplay_official/">
                        <div className="linkWrap"><RiInstagramFill /></div>
                    </a>
                    <a href="http://global.samsungdisplay.com/">
                        <div className="linkWrap"><SlGlobe /></div>
                    </a>
                </div>
            </div>
            <div className="top_btn">
                <a href="#">
                    <div className='btnBox'><IoIosArrowUp /></div>
                </a>
            </div>
        </Container>
    )
}

export default Footer;