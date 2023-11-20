import { useRef, useState } from 'react';
import { mainData } from '../data';
import { Container ,Row, Col } from 'react-bootstrap';
import { MdNavigateNext } from "react-icons/md";

function MainContents() {
    const [mainNews] = useState(mainData)

    return (
        <Container className='d-flex flex-column flex-lg-row'>
            <div className='sec01 col-lg-8'>
                <h3 className='mb-3 text-center'>최신 기사</h3>
                {
                    mainNews.map(function(item,i) {
                        return <Article product={mainNews[i]} />
                    })
                }
            </div>
            <div className='sec02 col-lg-4'>
                <h3 className='mb-3 text-center'>YouTube 핫클립</h3>
                <Row>
                    <Col md={6} className='YouTubeBox'>
                        <img src="./img/youtubeImg.png" alt="" />
                        <p>[우리 애가 떴어요🏢] EP.1 귀엽고 야무지고 다 해~🥺 3살 꼬꼬마의 삼성디스플레이 탐방기</p>
                    </Col>
                    <Col md={6} className='bannerBox'>
                        <div className='banner1'>
                            <a href="">
                                <div className='banner_inner'>
                                    <p className='tag_text'>D라이브러리</p>
                                    <p className='sub_text'>디스플레이 기술을 알기 쉽게 설명한</p>
                                    <p className='title_text'>디스플레이 톺아보기 <MdNavigateNext /></p>
                                </div>
                                <div className="icon_art"><img src="./img/banner_1_icon.png" alt="" /></div>
                            </a>
                        </div>
                        <div className='banner2'>
                            <a href="">
                                <div className='banner_inner'>
                                    <p className='tag_text'>D라이브러리</p>
                                    <p className='sub_text'>디스플레이를 이해하는 중요한 방법!</p>
                                    <p className='title_text'>디스플레이 용어알기 <MdNavigateNext /></p>
                                </div>
                                <div className="icon_art"><img src="./img/banner_2_icon.png" alt="" /></div>
                            </a>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

function Article({product}){
    return(
        <>
        <Row>
            <Col md={6} className='mb-2 artImg'>
                <img src={`./img/${product.img}`} alt="" />
                <p>{product.content}</p>
            </Col>
        </Row>
        </>
    )
}

export default MainContents;