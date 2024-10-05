import React from "react";
import Image from 'next/image';
import askQuestion from '../../../../public/assets/HomePage/askQuestion.png'
import freeConsultation from '../../../../public/assets/HomePage/freeConsultaion.png'
import legalEvents from '../../../../public/assets/HomePage/legalEvents.png'
import legalArticles from '../../../../public/assets/HomePage/legalArticles.png'
import EastIcon from "@mui/icons-material/East";
const ServicesList = () => {
  return (
   <div className="services_main">
         <div className="row ">
      <div className=" col-lg-3 col-md-3 ">
        <div className="askQuestion_block">
          <Image src={askQuestion} alt="askQuestion" />
          <div className="services_shadow_effect">
            <p className="services_heading">Ask a Question</p>
            <p className="services_content">
              Get expert legal advice tailored to your needs
            </p>
            <div className="read_more_btn d-flex justify-content-start align-self-center">
              Read More <EastIcon className="readMore_icon" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-3">
        <div className="askQuestion_block">
          <Image src={freeConsultation} alt="askQuestion" />
          <div className="services_shadow_effect">
            <p className="services_heading">Free Consultation</p>
            <p className="services_content">
              Get personalized legal advice at no cost
            </p>
            <div className="read_more_btn d-flex justify-content-start align-self-center">
              Read More <EastIcon className="readMore_icon" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-3">
        <div className="askQuestion_block">
          <Image src={legalEvents} alt="askQuestion" />
          <div className="services_shadow_effect">
            <p className="services_heading">Legal Events</p>
            <p className="services_content">
              Stay informed about upcoming legal seminars and conferences
            </p>
            <div className="read_more_btn d-flex justify-content-start align-self-center">
              Read More <EastIcon className="readMore_icon" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-3">
        <div className="askQuestion_block">
          <Image src={legalArticles} alt="askQuestion" />
          <div className="services_shadow_effect">
            <p className="services_heading">Legal Articles</p>
            <p className="services_content">
             Expert Insights and In-Depth Analysis on Legal Matters
            </p>
            <div className="read_more_btn d-flex justify-content-start align-self-center">
              Read More <EastIcon className="readMore_icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default ServicesList;
