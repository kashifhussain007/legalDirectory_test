import Image from "next/image";
import logo from '../../../public/assets/logo/logo.png';
// import logo from '../../assets/logo/logo.png';
import wifi from '../../../public/assets/social_icon/Wifi.png';
import twitter from '../../../public/assets/social_icon/Twitter.png';
import youtube from '../../../public/assets/social_icon/Youtube.png';
import linkden from '../../../public/assets/social_icon/Linkedin.png';
import At from '../../../public/assets/social_icon/At.png';
import facebook from '../../../public/assets/social_icon/Facebook.png';
const Footer = () => {
  return (
          <div className='footer_box'>
          <div className='footer_content'>
              <div className='text-center'>
                <Image src={logo} alt="Logo" className="logo_styling mx-auto" />
                <ul >
                    <li>Features</li>
                    <li>About</li>
                    <li>Testimonials</li>
                    <li>Contact</li>
                    <li>Download</li>
                </ul>
                <ul>
                    <li><Image src={wifi} alt="wifi"/></li>
                    <li><Image src={twitter} alt="twitter"/></li>
                    <li><Image src={youtube} alt="youtube"/></li>
                    <li><Image src={linkden} alt="linkden"/></li>
                    <li><Image src={At} alt="At" /></li>
                    <li><Image src={facebook} alt="facebook"/></li>
                </ul>
                <p className='copyWrite_msg'>© Copyright 2023 Brownie Link Services</p>
              </div>
          </div>
        
      </div>
  );
};

export default Footer;
