import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import SingleTeam from './SingleTeam';
import TeamData from '../../jsonData/TeamData.json';

const Team = ({ bgColor }) => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className={`${bgColor ? bgColor : ""} team-style-two-area default-padding-top pb-70 pb-xs-0`}>
            <div className="container">
                <div className="row align-center">
                    <div className="col-xl-6 col-lg-12">
                        <div className="site-heading">
                            <h5 className="sub-title">Team members</h5>
                            <h2 className="title">Our professional <br /> expert team members</h2>
                        </div>
                    </div>
                    {TeamData.slice(0, 5).map(team => (
                        <div
                            className="col-xl-3 col-lg-4 col-md-6 mb-50"
                            data-aos={team.animationClass || 'fade-up'}
                            data-aos-delay={team.animationDelay || '0'}
                            key={team.id}
                        >
                            <SingleTeam team={team} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Team;
