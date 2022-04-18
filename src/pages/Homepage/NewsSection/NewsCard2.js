import React from 'react';
import { Link } from 'react-router-dom';

const NewsCard2 = () => {
    return (
        <div className="col-xl-3 col-lg-3 col-md-6" data-aos="fade-up" data-aos-duration="2000">
            <article className="blog-item blog-item-box">
                <div className="blog-item-img">
                    <img className="blog-img" src="https://live-production.wcms.abc-cdn.net.au/f40ae5cfc1b9799b0558ccbf97c79eb2" alt="img" />

                </div>
                <div className="blog-item-content">
                    <h5 className="blog-item-title">
                        <Link to='/news/624c8ff64a395b0e6e75e212'>
                            When is the federal election going to be?
                        </Link>
                    </h5>
                    <p className='card-details'>With the federal budget out of the way, the countdown is on to when Prime Minister Scott Morrison will call the next election.</p>
                    <div className="blog-item-details">
                        <span className="blog-item-date"><i className="fas fa-calendar-week"></i> 20 Aug' 20</span>
                        <span><i className="fas fa-comment-dots"></i> 501</span></div>
                </div>
            </article>
        </div>
    );
};

export default NewsCard2;