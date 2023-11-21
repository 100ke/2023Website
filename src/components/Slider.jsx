import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef, useState } from 'react';
import { Row, Col } from 'react-bootstrap';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Slider() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            }}
            pagination={{
            clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            onAutoplayTimeLeft={onAutoplayTimeLeft} 
            loop={true}
            className="mySwiper"
        >
                <SwiperSlide>
                    <Row className='sliderWrap flex-column flex-md-row'>
                        <Col><img src="././img/slider1.jpg" alt="" /></Col>
                        <Col>
                            <div className='slider-content'>
                                <h3>삼성D, 게임쇼 G-star서 '최고 화질' QD-OLED 선봬</h3>
                                <br />
                                <p>삼성디스플레이는 16일부터 19일까지 부산 벡스코에서 열리는 '지스타 2023'에서 글로벌 반도체 기업 AMD와 손잡고 QD-OLED를 탑재한 델 테크놀로지스(Dell Technologies, 이하 델)의 '에일리언웨어 34 커브드 QD-OLED 게이밍 모니터' 체험 이벤트를 진행한다고 밝혔다.</p>
                            </div>
                        </Col>
                    </Row>
                </SwiperSlide>
                <SwiperSlide>
                    <Row className='sliderWrap flex-column flex-md-row'>
                        <Col><img src="././img/slider2.jpg" alt="" /></Col>
                        <Col>
                            <div className='slider-content'>
                                <h3>삼성디스플레이 미래 모빌리티 영상, 레드닷 어워드 수상</h3>
                                <br />
                                <p>삼성디스플레이는 미래 모빌리티와 미래 차량용 디스플레이를 스토리 속에 담아낸 'Play Next Mobility' 영상이 '2023 레드닷 디자인 어워드' 브랜드&커뮤니케이션 디자인 부문(광고, 인터렉티브 미디어, 시각디자인 대상)에서 본상(Winner)을 수상했다고 15일 밝혔다.</p>
                            </div>
                        </Col>
                    </Row>
                </SwiperSlide>
                <SwiperSlide>
                    <Row className='sliderWrap flex-column flex-md-row'>
                        <Col><img src="././img/slider3.jpg" alt="" /></Col>
                        <Col>
                            <div className='slider-content'>
                                <h3>짙어지는 가을과 함께 4년 만에 돌아온, 2023 삼성 '나눔위크' 자원봉사대축제!</h3>
                                <br />
                                <p>4년 만에 돌아온, 2023 삼성 나눔위크 자원봉사대축제! 지난 11월 1일부터  2주간, 일곱 빛깔 무지개처럼 다양한 프로그램들로 진행된 삼성디스플레이 나눔위크 현장을 담아 왔습니다.</p>
                            </div>
                        </Col>
                    </Row>
                </SwiperSlide>
            
            <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
                <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
            </div>
        </Swiper>
    )
}

export default Slider;