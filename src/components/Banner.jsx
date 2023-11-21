import { Container, Row, Col } from 'react-bootstrap';

function Banner() {
    return(
        <Container>
            <Row>
                <Col>
                    <div className="banWrap mb-5 d-flex">
                        <div className="img_wrap mb-3"><img src="./img/letter.png" alt="" /></div>
                        <div className='text_box'>
                            <h3 className='fw-bold'>삼성디스플레이 뉴스룸 구독</h3>
                            <p>미래를 여는 새로운 창, 디스플레이 산업의 기술과 이슈, 세상과 함께하는 다양한 소식을 삼성디스플레이가 전해 드립니다.</p>
                        </div>
                        <button>구독 신청하기</button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Banner;