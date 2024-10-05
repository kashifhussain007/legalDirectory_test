import React, { Fragment } from 'react';
import Image from 'next/image';
import AttorneyReviewImg from '../../../../public/assets/HomePage/atternoyReview.png';
import reviewFrame from '../../../../public/assets/HomePage/reviewFrame.png';
import ItenarayInfoImg  from '../../../../public/assets/HomePage/ittenraryInfo .png';
import infoCheck from '../../../../public/assets/HomePage/info_check.png';
import saveShield from '../../../../public/assets/HomePage/info_shield.png';

const AtternyReviews = () => {
  return (
    <Fragment>
        <div className="atternyReview_main atternyReview_clone">
      <div className="row box_shadow">
        <div className="col-md-1 d-flex align-self-center"><Image src={reviewFrame} alt="reviewFrame" /></div>
        <div className="col-md-7">
                <h3 className='attornyReviewHeading'>Unbiased Attorney Reviews</h3>
                <p>Get Honest, Unbiased Reviews of Attorneys to Help You Make Informed Decisions with Confidence.</p>
        </div>
        <div className="col-md-4 d-flex align-self-center"><Image src={AttorneyReviewImg} alt="AttornyImage" /></div>
      </div>
    </div>

    <div className="atternyInfo_main atternyInfo_clone">
      <div className="row box_shadow">
        <div className="col-md-1"><Image src={saveShield} alt="reviewFrame" /></div>
        <div className="col-md-6">
               <div>
                    <h3 className='attornyReviewHeading'>Authentic Attorney Information</h3>
                    <p>Thoroughly Verified and Reconfirmed Information to Ensure Accurate and Reliable Details About Attorneys.</p>
               </div>
              <div className='attorny_info_points'>
                <div className='d-flex jsutify-content-start'>
                        <Image src={infoCheck} alt="infoCheck" className='InfoCheck_settings' />
                        <h4 className='bullets_typography'>Precision and Reliability.</h4>
                </div>
                <div className='d-flex jsutify-content-start mt-1'>
                        <Image src={infoCheck} alt="infoCheck"  className='InfoCheck_settings'/>
                        <h4 className='bullets_typography'>Informed Decisions.</h4>
                </div>
                <div className='d-flex jsutify-content-start mt-1'>
                        <Image src={infoCheck} alt="infoCheck" className='InfoCheck_settings' />
                        <h4 className='bullets_typography'>Trust and Assurance</h4>
                </div>
              </div>
               
        </div>
        <div className="col-md-5 d-flex align-self-center"><Image src={ItenarayInfoImg} alt="AttornyIMG" className='img-fluid' /></div>
      </div>
    </div>
    </Fragment>
  );
}

export default AtternyReviews;