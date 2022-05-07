import React from 'react';
import './PhotoSection.css';

const PhotoSection = () => {
    return (
        <section className="masonary-gallery-sec my-3">
            <div className="container-fluid no-padding">
                <div className="row magnific-gallery">
                    <div className="col-lg-6" data-aos="fade-right" data-aos-duration="2000">
                        <div className="full-height masonary-box p-relative">
                            <div className="masonary-text transform-center">
                                <div className="masonary-text-wrapper">
                                    <div className="icon-box">
                                        <img style={{ borderRadius: '50%' }} src="https://media.gettyimages.com/photos/parliament-house-of-bangladesh-picture-id1073652472?s=2048x2048" className="image-fit" alt="img" />
                                    </div>
                                    <div className="text-box">
                                        <h3 className="text-custom-white">
                                            Stay up-todate, Follow us on our Instagram &amp; Facebook page for daily updates
                                        </h3>
                                        <a href="#" className="text-custom-white fs-14"><i className="fab fa-instagram mr-2"></i> @Political</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6" data-aos="fade-left" data-aos-duration="2000">
                        <div className="video-box full-height">
                            <div className="video_wrapper video_wrapper_full js-videoWrapper">
                                <iframe className="videoIframe js-videoIframe" src="https://media.istockphoto.com/photos/bara-gumbad-at-lodi-garden-picture-id870352486?b=1&k=20&m=870352486&s=170667a&w=0&h=Do7yzxsEo8jN-CyvFqAcZuCx69VvilQ_F8W0Y2O2XJk=" data-src="https://media.istockphoto.com/photos/bara-gumbad-at-lodi-garden-picture-id870352486?b=1&k=20&m=870352486&s=170667a&w=0&h=Do7yzxsEo8jN-CyvFqAcZuCx69VvilQ_F8W0Y2O2XJk=" title='demo video'></iframe>
                                <div className="videoPoster js-videoPoster">
                                    <img src="https://media.istockphoto.com/photos/bara-gumbad-at-lodi-garden-picture-id870352486?b=1&k=20&m=870352486&s=170667a&w=0&h=Do7yzxsEo8jN-CyvFqAcZuCx69VvilQ_F8W0Y2O2XJk=" className="image-fit" alt="#" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-0">
                        <div className="col-lg-2 col-md-4 col-sm-6" data-aos="fade-up">
                            <div className="masonary-item p-relative">
                                <a href="https://cdn.pixabay.com/photo/2020/01/06/00/17/boat-4744319__340.jpg" className="popup">
                                    <img src="https://cdn.pixabay.com/photo/2020/01/06/00/17/boat-4744319__340.jpg" className="image-fit" alt="img" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-8 col-sm-6" data-aos="fade-up">
                            <div className="masonary-item p-relative">
                                <a href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjH_pLieGLHOpNRpeziy1Dfiqquy3StTEPRQ" className="popup">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjH_pLieGLHOpNRpeziy1Dfiqquy3StTEPRQ" className="image-fit" alt="img" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6" data-aos="fade-up">
                            <div className="masonary-item p-relative">
                                <a href="https://cdn.pixabay.com/photo/2019/03/28/18/01/national-martys-4087688__340.jpg" className="popup">
                                    <img src="https://cdn.pixabay.com/photo/2019/03/28/18/01/national-martys-4087688__340.jpg" className="image-fit" alt="img" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-8 col-sm-6" data-aos="fade-up">
                            <div className="masonary-item p-relative">
                                <a href="https://media.istockphoto.com/photos/chittagong-port-picture-id1060321394?k=20&m=1060321394&s=612x612&w=0&h=0oAgKpnCSu7ebInUwhJsqJE0wH9TD5yt2cqoIuJEtu8=" className="popup">
                                    <img src="https://media.istockphoto.com/photos/chittagong-port-picture-id1060321394?k=20&m=1060321394&s=612x612&w=0&h=0oAgKpnCSu7ebInUwhJsqJE0wH9TD5yt2cqoIuJEtu8=" className="image-fit" alt="img" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PhotoSection;