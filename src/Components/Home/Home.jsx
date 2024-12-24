import React from 'react';
import './Home.css';
import Homebanner from './HomeBanner/Homebanner';
import Summerymodule from './SummeryModule/Summerymodule';
import Aboutmodule from './AboutModule/Aboutmodule';
import Popularmodule from './PopularModule/Popularmodule';
import Teachersmodule from './TeachersModule/Teachersmodule';
import Schoolgallerymodule from './SchoolGalleryModule/Schoolgallerymodule';
import Statusmodule from './StatusModule/Statusmodule';
import Parentsmodule from './ParentsModule/Parentsmodule';
import Partnersmodule from './PartnersModule/Partnersmodule';
import Eventmodule from './EventModule/Eventmodule';
import Newslettermodule from './NewsLetterModule/Newslettermodule';


function Home(){
    return(
        <>
        <Homebanner/>
        <Summerymodule/>
        <Aboutmodule/>
        <Popularmodule/>
        <Teachersmodule/>
        <Schoolgallerymodule/>
        <Statusmodule/>
        <Parentsmodule/>
        <Partnersmodule/>
        <Eventmodule/>
        <Newslettermodule/>
        
        </>
    )
}
export default Home;

