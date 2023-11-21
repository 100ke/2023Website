import { useRef, useState } from 'react';
import { mainData } from '../data';
import { Container ,Row, Col } from 'react-bootstrap';
import { MdNavigateNext } from "react-icons/md";

function MainContents() {
    const [mainNews] = useState(mainData)

    return (
        <Container className='d-flex flex-column flex-lg-row'>
            <Row>
                <Col lg={8} className='sec01'>
                    <h3 className='mb-3 text-center fw-bold'>최신 기사</h3>
                    <Row>
                        {
                            mainNews.map(function(item,i) {
                                return <Article product={mainNews[i]} />
                            })
                        }
                    </Row>
                </Col>
                <Col lg={4} className='sec02'>
                    <h3 className='mb-3 text-center fw-bold'>YouTube 핫클립</h3>
                    <Row>
                        <Col md={6} lg={12} className='YouTubeBox'>
                            <img src="./img/youtubeImg.png" alt="" />
                            <p className='ytb-p'>[우리 애가 떴어요🏢] EP.1 귀엽고 야무지고 다 해~🥺 3살 꼬꼬마의 삼성디스플레이 탐방기</p>
                        </Col>
                        <Col md={6} lg={12} className='bannerBox'>
                            <Container>
                                <Row>
                                    <Col xs={12} className='banner1'>
                                        <a href="">
                                            <div className='banner_inner'>
                                                <p className='tag_text'>D라이브러리</p>
                                                <p className='sub_text'>디스플레이 기술을 알기 쉽게 설명한</p>
                                                <p className='title_text'>디스플레이 톺아보기<MdNavigateNext /></p>
                                            </div>
                                            <div className="icon_art"><img src="./img/banner_1_icon.png" alt="" /></div>
                                        </a>
                                    </Col>
                                    <Col xs={12}  className='banner2'>
                                        <a href="">
                                            <div className='banner_inner'>
                                                <p className='tag_text'>D라이브러리</p>
                                                <p className='sub_text'>디스플레이를 이해하는 중요한 방법!</p>
                                                <p className='title_text'>디스플레이 용어알기<MdNavigateNext /></p>
                                            </div>
                                            <div className="icon_art"><img src="./img/banner_2_icon.png" alt="" /></div>
                                        </a>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

function Article({product}){
    return(
        <>
            <Col md={6} className='mb-2 artImg'>
                <img src={`./img/${product.img}`} alt="" />
                <p className='art-p'>{product.content}</p>
            </Col>
        </>
    )
}

export default MainContents;