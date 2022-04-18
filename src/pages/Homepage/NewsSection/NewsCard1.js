import React from 'react';
import { Link } from 'react-router-dom';

const NewsCard1 = () => {
    return (
        <div className="col-xl-3 col-lg-3 col-md-6" data-aos="fade-right" data-aos-duration="3000">
            <article className="blog-item blog-item-box">
                <div className="blog-item-img">
                    <img className="blog-img" src="https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/PEVI2OB37YI6ZPLP3I3W6RZQJY.jpg" alt="img" />

                </div>
                <div className="blog-item-content">
                    <h5 className="blog-item-title">
                        <Link to='/news/624c8fdd763d163aa1840cf8'>
                            Foreign nationals can finance ballot initiatives
                        </Link>
                    </h5>
                    <p className='card-details'>The Federal Election Commission has affirmed in a not-yet-public decision that foreign nationals can finance efforts</p>
                    <div className="blog-item-details">
                        <span className="blog-item-date"><i className="fas fa-calendar-week"></i> 20 Aug' 20</span>
                        <span><i className="fas fa-comment-dots"></i> 501</span></div>
                </div>
            </article>
        </div>
    );
};

export default NewsCard1;