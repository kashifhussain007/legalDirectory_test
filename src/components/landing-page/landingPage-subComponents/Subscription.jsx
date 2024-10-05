import Image from 'next/image';
import subsBtn from '../../../../public/assets/HomePage/subs_btn.png';
import crimeImg from '../../../../public/assets/HomePage/crime_img2.png';
const Subscription = () => {
  return (
    <div className="subscription_main">
      <div className="subscription_box subscrip_allignment">
        <div className="row">
          <div className="offset-md-2 col-md-6 ">
            <h3>Don’t miss a thing!</h3>
            <p>
              Subscribe Now for the Latest Updates, Insights, and Exclusive
              Content Delivered to Your Inbox{" "}
            </p>
          </div>
          <div className="col-md-4 align-self-center cursor-pointer">
            <Image src={subsBtn} alt="subsBtn" />
          </div>
        </div>
      </div>
      <div className="row">
          <div className="col-md-6">
            <Image src={crimeImg} alt="crimeImg" className="img-fluid crime_banner" />
          </div>
          <div className='col-md-6 text-center'>
                <h3 className='youtube_heading'>Explore our YouTube Channel</h3>
          </div>
      </div>
    </div>
  );
}

export default Subscription;