import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import PhotoCard from './PhotoCard/PhotoCard';

const PhotoGallery = () => {
    const [photos, setPhotos] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/photos')
            .then(res => res.json())
            .then(data => setPhotos(data))
    }, [])

    return (
        <Container>
            <h1>Recent Election Images</h1>
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