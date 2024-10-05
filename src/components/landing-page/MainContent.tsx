import Link from "next/link";
import { Fragment } from "react";
import Image from "next/image";
import gps from '../../../public/assets/HomePage/gps.png';
import user from '../../../public/assets/HomePage/user.png';
import manOnIndex from '../../../public/assets/HomePage/manOnSearch.png';

import ServicesList from '../landing-page/landingPage-subComponents/ServicesList';
import OurMoto from '../landing-page/landingPage-subComponents/OurMoto';
import AtternyReviews from '../landing-page/landingPage-subComponents/AtternyReviews';
import WhyChooseUS from '../landing-page/landingPage-subComponents/WhyChooseUS';
import FindingLawyers from '../landing-page/landingPage-subComponents/FindingLawyers';
import Blogs from '../landing-page/landingPage-subComponents/Blogs';
import Subscription from '../landing-page/landingPage-subComponents/Subscription';

const HomePage: React.FC = () => {
  return (
    <Fragment>  
      <div className='searchEngine_main bg-white'>
         <div className='row'>
                <div className='col-md-8'>
                    <div className='search_container'>
                           <p className='searchEngine_heading'>
                            Find the  <span>Right</span> <br/>
                            <span>Lawyer</span> for you
                           </p>
                    </div>
                    <div className='searchEngine_inputs d-flex justify-content-start'>
                       <div className='location_container'>
                            <input type="text"  placeholder='Location' className='locaton_input'/>
                            <Image src={gps} alt="gps-Image"  className='gps_settings'/>
                       </div>
                       <div className='location_container'>
                            <input type="text"  placeholder='Name/Person' className='locaton_input'/>
                            <Image src={user} alt="gps-Image"  className='user_settings'/>
                       </div>
                       <div className='search_btn_settings'>
                            <button className='btn btn-primary btn_typography'> Search</button>
                       </div>                       
                    </div>
                </div>
                <div className='col-md-4'>
                        <Image src={manOnIndex} alt="manOnSearchPage" />
                </div>
            </div>
    </div>
    <div>
      <ServicesList/>
    </div>
    <div>
      <OurMoto/>
    </div>
    <div>
      <AtternyReviews/>
    </div>
    <div>
      <WhyChooseUS/>
    </div>
    <div>
      <FindingLawyers/>
    </div>
    <div>
      <Blogs/>
    </div>
    <div>
      <Subscription/>
    </div>
    </Fragment>
  );
};

export default HomePage;
