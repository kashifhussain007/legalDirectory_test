import Link from "next/link";
// import React from "react";
import dropdown from '../../../public/assets/icon/dropDown_icon.png';
import Image from 'next/image';
const Header = () => {
  return (
    <div className="header_box inner_stroke">
      <div className="header_content_box">
        <div className="d-flex justify-content-between">
          <div>
            <span className="logo_design logo_left_part">Logo</span>
            <span className="logo_design logo_right_part">Here</span>
          </div>
          <div className="menu_list align-self-center">
            <ul>
              <li className="active_menu_clr">
                <Link href="/" passHref>
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" passHref className="no_link_style">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#" passHref>
                  Events
                </Link>
              </li>
              <li>
                <Link href="#" passHref>
                  Jobs
                  {/* <Image 
                                     src={dropdown} 
                                     alt="dropdown" 
                                     width={20}  
                                    className='dropdown_positioning'
                                  /> */}
                </Link>
              </li>
              <li>
                <Link href="#" passHref>
                  Blogs
                  {/* <Image 
                                        src={dropdown} 
                                        alt="dropdown" 
                                        width={20} 
                                        className='dropdown_positioning'
                                        /> */}
                </Link>
              </li>
              <li>
                <Link href="#" passHref>
                  Why Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="auth_details align-self-center">
            <ul>
              <li className="login_typo">
                {" "}
                <Link href="/auth/login" passHref>
                  Login
                </Link>
              </li>
              <li className="auth_seprator">|</li>
              <li className="signup_typo">
                <button className="signup_btn">
                  {" "}
                  <Link href="/auth/signup" passHref>
                    Sign Up
                  </Link>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
