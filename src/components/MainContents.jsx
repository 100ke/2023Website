import { useRef, useState } from 'react';
import { mainData } from '../data';
import { Container ,Row, Col } from 'react-bootstrap';

function MainContents() {
    const [mainNews] = useState(mainData)

    return (
        <Container className='mb-2'>
            <h3>최신 기사</h3>
            {
                mainNews.map(function(item,i) {
                    return <Article product={mainNews[i]} />
                })
            }
        </Container>
    )
}

function Article({product}){
    return(
        <>
        <Row>
            <Col sm={12} md={6} className='mb-2'>
                <img src={`./img/${product.img}`} alt="" />
            </Col>
            <Col sm={12} md={6} className='mb-2'><p>{product.content}</p></Col>
        </Row>
        </>
    )
}

export default MainContents;