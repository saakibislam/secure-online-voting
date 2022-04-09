import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import PhotoCard from './PhotoCard/PhotoCard';

const PhotoGallery = () => {
    const [photos, setPhotos] = useState([])

    useEffect(() => {
        let isMounted = true;
        fetch('http://localhost:5000/photos')
            .then(res => res.json())
            .then(data => {
                if (isMounted) {
                    setPhotos(data)
                }
            })
        return () => { isMounted = false };
    }, [])

    return (
        <Container className='mt-3'>
            <h2>Recent Election Images</h2>
            <Container>
                <Row xs={1} md={2} lg={4} className='g-3'>
                    {
                        photos?.map(photo => <PhotoCard
                            photo={photo}
                            key={photo._id}
                        ></PhotoCard>)
                    }
                </Row>
            </Container>
        </Container>
    );
};

export default PhotoGallery;