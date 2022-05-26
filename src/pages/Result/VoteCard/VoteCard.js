import React from 'react';
import CountUp from 'react-countup';

const VoteCard = (props) => {
    return (
        <div className="col-xs-12 col-lg-3 col-md-6">
            <div className="card shadow-sm mb-4">
                <div className="card-body d-flex justify-content-around">
                    <div>
                        <h4>{props.candidate.name}</h4>
                        <h5><i className="fas fa-angle-double-up me-1 text-success"></i>
                            <CountUp className='text-success fw-bold' end={props.candidate.voteCount} start={0} duration={3} separator=","></CountUp>
                        </h5>
                    </div>
                    <div>
                        <img style={{ width: '100px', height: '100px', borderRadius: '50%' }} src={props.candidate.img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VoteCard;