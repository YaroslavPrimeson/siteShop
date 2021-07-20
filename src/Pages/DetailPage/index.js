import React from 'react';
import Lines from "../../components/Lines";
import Navigation from "../../components/Navigation";
import ContactBlock from "../../components/ContactBlock";
import Footer from "../../components/Footer";
import Rekl from "../../components/Rekl";
import ModalCard from '../../components/ModalCard'
import VideoPlayer from "../../components/Video";

const Index = ({location}) => {

    return (
        <>
            <Lines/>
            <Navigation/>
            <ModalCard stars/>
            <Rekl padding/>
            <VideoPlayer/>
            <ContactBlock/>
            <Footer/>
        </>
    );
};

export default Index;