import React from 'react';
import { Link } from 'react-router-dom';

const NewsCard4 = () => {
    return (
        <div className="col-xl-3 col-lg-3 col-md-6" data-aos="fade-left" data-aos-duration="3000">
            <article className="blog-item blog-item-box">
                <div className="blog-item-img">
                    <img className="blog-img" src="https://www.fec.gov/static/img/social/fec-help.png" alt="img" />

                </div>
                <div className="blog-item-content">
                    <h5 className="blog-item-title">
                        <Link to='/news/624c90036c74d4efb3cb6eb8'>
                            48-Hour Notices for candidate committees
                        </Link>
                    </h5>
                    <p className='card-details'>As primary season heats up, authorized committees are reminded to file 48-hour Notices for all contributions of $1,000 or</p>
                    <div className="blog-item-details">
                        <span className="blog-item-date"><i className="fas fa-calendar-week"></i> 20 Aug' 20</span>
                        <span><i className="fas fa-comment-dots"></i> 501</span></div>
                </div>
            </article>
        </div>
    );
};

export default NewsCard4;