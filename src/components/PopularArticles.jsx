import { useRef, useState } from 'react';
import { popArticleData } from '../data';
import { Container ,Row, Col, Card, CardBody } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

function PopularArticles() {
    const [popNews] = useState(popArticleData)

    return (
        <Container className='mb-5'>
            <h3 className='mb-3 text-center'>인기 기사</h3>
            <Swiper
                slidesPerView={3}
                spaceBetween={10}
                navigation={true}
                breakpoints={{
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                }
                }}
                modules={[Navigation]}
                className="popSlider"
            >
                {
                    popNews.map(function(item,i) {
                        return <SwiperSlide>
                            <PopArticle product={popNews[i]} />
                        </SwiperSlide>
                    })
                }
            </Swiper>
        </Container>
    )
}

function PopArticle({product}){
    return(
        <>
        <Card>
            <Card.Img variant='top' src={`./img/${product.img}`}/>
            <Card.Body>
                <div className='txt-area'>
                    <Card.Title className='p-title'>{product.title}</Card.Title>
                    <Card.Text className='p-content'>{product.content}</Card.Text>
                </div>
            </Card.Body>
        </Card>
        </>
    )
}

export default PopularArticles;