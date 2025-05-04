import React from 'react';
import HeaderV5 from '../../components/header/HeaderV5';
import BreadCrumb from '../../components/breadCrumb/BreadCrumb';
import TeamDetailsContent from '../../components/team/TeamDetailsContent';
import Footer from '../../components/footer/Footer';
import { useParams } from 'react-router-dom';
import TeamData from '../../jsonData/TeamData.json'

const TeamDetails = () => {

    const { id } = useParams()
    const data = TeamData.filter(team => team.id === parseInt(id))[0]

    return (
        <>
            <HeaderV5 />
            <BreadCrumb breadCrumb="team-details" title1="Team Details" bottomSpace="pb-0" />
            <TeamDetailsContent teamInfo={data} />
            <Footer />
        </>
    );
};

export default TeamDetails;
