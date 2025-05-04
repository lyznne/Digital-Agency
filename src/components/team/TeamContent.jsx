import React from 'react';
import TeamData from '../../jsonData/TeamData.json'
import SingleTeam from './SingleTeam';

const TeamContent = () => {
    return (
        <>
            <div className="team-style-one-area team-style-one-page default-padding-top pb-70 pb-xs-0 bg-gray">
                <div className="container">
                    <div className="row">
                        {TeamData.map(team =>
                            <div className="col-xl-4 col-md-6 mb-30" key={team.id}>
                                <SingleTeam team={team} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default TeamContent;
