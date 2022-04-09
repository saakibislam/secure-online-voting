import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import CandidateCard from './CandidateCard/CandidateCard';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Vote.css";


const Vote = () => {
    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/candidates')
            .then(res => res.json())
            .then(data => setCandidates(data));
    }, [])



    return (
        <Container className='mt-3'>
            <h2>Vote Now</h2>
            <Swiper
                data-aos="fade-up"
                data-aos-duration="3000"
                spaceBetween={15}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                }}
                pagination={true}
                navigation={true}
                modules={[Navigation, EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {
                    candidates?.map(candidate => <SwiperSlide
                        key={candidate._id}>
                        <CandidateCard
                            candidate={candidate}
                        >
                        </CandidateCard>
                    </SwiperSlide>)
                }
            </Swiper>
        </Container >
    );
};

export default Vote;