import React from 'react';
import { Link } from 'react-router-dom';

const NewsCard3 = () => {
    return (
        <div className="col-xl-3 col-lg-3 col-md-6" data-aos="fade-up" data-aos-duration="2000">
            <article className="blog-item blog-item-box">
                <div className="blog-item-img">
                    <img className="blog-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXqd68i9nLCwc0zyAsonFWApNEtMFgDTKi0g" alt="img" />

                </div>
                <div className="blog-item-content">
                    <h5 className="blog-item-title">
                        <Link to='/news/624c8ffdda43b727966bf7ab'>
                            FEC approves three Notices of Disposition on petitions
                        </Link>
                    </h5>
                    <p className='card-details'>WASHINGTON – At its open meeting today, the Federal Election Commission approved three Notices of Disposition in connection</p>
                    <div className="blog-item-details">
                        <span className="blog-item-date"><i className="fas fa-calendar-week"></i> 20 Aug' 20</span>
                        <span><i className="fas fa-comment-dots"></i> 501</span></div>
                </div>
            </article>
        </div>
    );
};

export default NewsCard3;