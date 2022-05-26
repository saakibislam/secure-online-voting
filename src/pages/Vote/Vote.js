import React, { useEffect, useState } from 'react';
import { Container, Alert } from 'react-bootstrap';
import CandidateCard from './CandidateCard/CandidateCard';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Vote.css";
import useAuth from '../../hooks/useAuth';


const Vote = () => {
    const [candidates, setCandidates] = useState([]);
    const [user, setUser] = useState();
    const { getUser } = useAuth();


    useEffect(() => {
        setUser(getUser())
        fetch('http://localhost:5000/candidates')
            .then(async res => await res.json())
            .then(async data => {
                const newData = await data.filter(cd => cd.approved === true)
                setCandidates(newData);
            })
            .catch((error) => console.error(error))

    }, [candidates])

    return (
        <Container className='my-3'>
            <h2>Vote Now</h2>

            {/* Alert Box  */}
            {user?.voted && <Alert className='w-50 mx-auto' variant='success'>You have voted successfully.</Alert>}

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