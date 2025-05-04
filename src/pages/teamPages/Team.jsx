import React from 'react';
import HeaderV5 from '../../components/header/HeaderV5';
import BreadCrumb from '../../components/breadCrumb/BreadCrumb';
import Footer from '../../components/footer/Footer';
import TeamContent from '../../components/team/TeamContent';

const Team = () => {
    return (
        <>
            <HeaderV5 />
            <BreadCrumb breadCrumb="team" title1="Professional team members" />
            <TeamContent />
            <Footer />
        </>
    );
};

export default Team;
