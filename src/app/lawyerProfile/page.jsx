
"use client"
import React,{useState} from "react";
import Image from "next/image";
import Lawimage1 from '../../../public/assets/LawyersList/1.png';
import StarIcon from '@mui/icons-material/Star';
import VideocamIcon from '@mui/icons-material/Videocam';
import EmailIcon from '@mui/icons-material/Email';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import LanguageIcon from '@mui/icons-material/Language';

import degree from '../../../public/assets/laywerProfile/degree.png';
import chess from '../../../public/assets/laywerProfile/chess.png';
import job from '../../../public/assets/laywerProfile/job.png';
import Announcement from '../../../public/assets/HomePage/sound_icon.png';


import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
const lawyerProfile = () =>{
    const [value, setValue] =useState(4);
    return (
      <div className="lawerProfile_main mx-5">
        <section className="main-section mt-5">
          <div className="container">
            <div className="card border-0 shadow">
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-4">
                    <Image
                      src={Lawimage1}
                      className="img-fluid rounded "
                      alt="..."
                    />
                  </div>
                  <div className="col-lg-5">
                    <div className="info">
                      <div className="d-flex justify-content-start align-items-center">
                        <h2>Salman Ahmed</h2>
                        <p className="mb-0 ms-2">
                          <span className="lawyerList_star">
                            <StarIcon />
                          </span>
                          4.2(67)
                        </p>
                      </div>
                      <p className="info_subHeading">
                        Serving all of New York City as
                        <strong>Criminal Defense</strong> Lawyer
                      </p>
                    </div>
                    <div className="info-p lawyerProfile_p mt-4">
                      <p className=" d-flex justify-content-start my-3">
                        <Image src={degree} alt="..." className="me-3 mx-1" />
                        <strong>32 Years of Experience</strong>
                      </p>
                      <p className=" d-flex justify-content-start my-3">
                        <Image src={job} alt="..." className="me-3 mx-1" />
                        <strong>J. Frences Attorney Office </strong>
                      </p>
                      <p className=" d-flex justify-content-start my-3">
                        <Image src={chess} alt="..." className="me-3 mx-2" />
                        <strong className="ms-2">
                          LLB - Cornell University
                        </strong>
                      </p>
                    </div>
                    <div className="mt-5">
                      <button
                        type="button"
                        className="btn btn-success consultant_btn "
                      >
                        FREE CONSULTATION
                      </button>
                      <span className="free-cont">
                        {" "}
                        <VideocamIcon /> VIRTUAL CONSULTATION
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-3 ">
                    <div className="button-container buttons-sec profile_contact">
                      <button className="email-btn align-self-center">
                        <span className="icon">
                          <EmailIcon className="email_icon " />
                        </span>{" "}
                        Email Lawyer
                      </button>
                      <button className="align-self-center phoneForward">
                        <span className="icon">
                          <PhoneForwardedIcon className="phoneForward_icon" />
                        </span>{" "}
                        342 232 4564
                      </button>
                      <button className="website-btn align-self-center">
                        <span className="icon">
                          <LanguageIcon className="email_icon " />
                        </span>{" "}
                        Visit Website
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <ul className="nav-menu py-2">
                  <li>
                    <a href="#" className="active">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#legal-case">Legal Cases</a>
                  </li>
                  <li>
                    <a href="#cost">Cost</a>
                  </li>
                  <li>
                    <a href="#resume">Resume</a>
                  </li>
                  <li>
                    <a href="#location">Location</a>
                  </li>
                  <li>
                    <a href="#office">Office Hours</a>
                  </li>
                  <li>
                    <a href="#review">Reviews</a>
                  </li>
                  <li>
                    <a href="#Contributor">Contributors</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="practice-areas py-4">
          <div className="container">
            <h2>About</h2>
            <p className="my-2">Total number of Practice Areas: 3</p>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="area-box">
                  <h5 className="">Litigation</h5>
                  <span className="percentage align-self-center">54%</span>
                </div>
              </div>
              <div className="col-md-4">
                <div className="area-box">
                  <h5>Medical Negligence</h5>
                  <span className="percentage">21%</span>
                </div>
              </div>
              <div className="col-md-4">
                <div className="area-box">
                  <h5>Personal Injury</h5>
                  <span className="percentage">36%</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="">
            <div className="profile-section">
              <h2 className="section-title">Litigation - 54%</h2>
              <p className="profile-text">
                Welcome to [Lawyer's Name]'s professional profile. With a strong
                commitment to providing exceptional legal services, [Lawyer's
                Name] has built a reputation for delivering results-driven
                solutions tailored to each client's unique needs. Specializing
                in [Practice Areas], [Lawyer's Name] brings years of experience,
                deep legal knowledge, and a compassionate approach to every
                case.
              </p>
              <div className="mt-4 ">
                <span className="stats-box">20 years, 1000 cases</span>
              </div>
            </div>

            <div className="profile-section">
              <h2 className="section-title">Medical Negligence - 21%</h2>
              <p className="profile-text">
                Welcome to [Lawyer's Name]'s professional profile. With a strong
                commitment to providing exceptional legal services, [Lawyer's
                Name] has built a reputation for delivering results-driven
                solutions tailored to each client's unique needs. Specializing
                in [Practice Areas], [Lawyer's Name] brings years of experience,
                deep legal knowledge, and a compassionate approach to every
                case.
              </p>
              <div className="mt-4 ">
                {" "}
                <span className="stats-box">12 years, 401 cases</span>
              </div>
            </div>

            <div className="profile-section">
              <h2 className="section-title">Personal Injury - 36%</h2>
              <p className="profile-text">
                Welcome to [Lawyer 's Name]'s professional profile. With a
                strong commitment to providing exceptional legal services,
                [Lawyer's Name] has built a reputation for delivering
                results-driven solutions tailored to each client's unique needs.
                Specializing in [Practice Areas], [Lawyer's Name] brings years
                of experience, deep legal knowledge, and a compassionate
                approach to every case.
              </p>
              <div className="mt-4 ">
                {" "}
                <span className="stats-box"> 15 years, 800 cases</span>
              </div>

              <p className="mt-5 profile-text">
                Welcome to [Lawyer's Name]'s professional profile. With a strong
                commitment to providing exceptional legal services, [Lawyer's
                Name] has built a reputation for delivering results-driven
                solutions tailored to each client's unique needs. Specializing
                in [Practice Areas], [Lawyer's Name] brings years of experience,
                deep legal knowledge, and a compassionate approach to every
                case.{" "}
              </p>
              <p>
                Whether you're facing a complex legal challenge or simply need
                expert advice, [Lawyer's Name] is here to guide you through the
                process with clarity and confidence. Dedicated to upholding the
                highest ethical standards, [Lawyer's Name] is your trusted
                partner in navigating the legal landscape.
              </p>
              <p>
                Explore this profile to learn more about [Lawyer's Name]'s
                background, areas of expertise, and the successful outcomes
                achieved for clients. Ready to discuss your case? Get in touch
                today to schedule a consultation.
              </p>
            </div>
          </div>
        </section>
        <section className="legal-case" id="legal-case">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 mb-3">
                <h2>Sample of Legal Cases</h2>
              </div>
              <div className="col-lg-6">
                <div>
                  <h3>Child cruelty - case dismissed</h3>
                  <p className="mb-3">Case dismissed</p>
                  <h3>Restraining order - case won</h3>

                  <p className="mb-3">Trial won - restraining order lifted</p>
                  <h3>Violation - alternate settlement</h3>
                  <p className="mb-3">Alternate - settled</p>
                  <p className="cases">view all legal cases</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div>
                  <h3>Child cruelty - case dismissed</h3>
                  <p className="mb-3">Case dismissed</p>
                  <h3>Restraining order - case won</h3>
                  <p className="mb-3">Trial won - restraining order lifted</p>
                  <h3>Violation - alternate settlement</h3>
                  <p className="mb-3">Alternate - settled</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="cost" id="cost">
          <div className="container">
            <div className="mt-4">
              <h2>Cost</h2>
            </div>
            <div className="row">
            
            <div className="col-lg-6">
                <div className="card my-5 border-0 shadow">
                  <div className="card-body py-2">
                    <div className="row justify-content-sm-between">
                      <div className="col-sm-8 mb-2 mb-sm-0">
                        <div className="form-check ps-1">
                          <div className="d-flex align-items-center">
                            <div>
                              <Image src={Announcement} alt="" className="me-2" />
                            </div>
                            <div className="content">
                              <h5> Rates</h5>
                              <p className="mb-0"> Hourly RateF</p>
                            </div>
                          </div>
                          <div></div>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="rate  price_color">Rs4200 - Rs6000</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card my-5 border-0 shadow">
                  <div className="card-body py-2">
                    <div className="row justify-content-sm-between">
                      <div className="col-lg-12 mb-2 mb-sm-0">
                        <div className="form-check ps-1">
                          <div className="d-flex align-items-center">
                            <div>
                              <Image src={Announcement} alt="" className="me-2" />
                            </div>
                            <div className="content">
                              <h5> Payment Methods</h5>
                              <p className="mb-0"> Cash, Credit card, Check</p>
                            </div>
                          </div>
                          <div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="resume" id="resume">
            <div>
                <div>
                    <h2 className="mb-3">Resume</h2>
                    <div className="card shadow  border-0 resume-card mx-2">
                        <div className="card-body text-center resume_bg ">
                            <div className="view-resume"><a href="#">Click Here to
                                    See Resume</a></div>
                          </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="resume-detial">
                                <h3>Work Experience</h3>
                                <div>
                                    <h5 className="mt-3">Lawyer</h5>
                                    <p className="mb-1">Denevinc and Assosiates</p>
                                    <p>2012 - 2016</p>
                                </div>
                                <div>
                                    <h5 className="mt-5">Legal Assistant</h5>
                                    <p className="mb-1">City Center</p>
                                    <p>2006 - 2007</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="resume-detial">
                                <h3>Education</h3>
                                <div>
                                    <h5 className="mt-3">Temple University - James
                                        Law School</h5>
                                    <p className="mb-1">LLB - Bachelors of Law</p>
                                    <p>2012</p>
                                </div>
                                <div>
                                    <h5 className="mt-5">Princeton University</h5>
                                    <p className="mb-1">BA - Bachelors of Art</p>
                                    <p>2009</p>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-6">
                            <div className="resume-detial">
                                <h3>Honors and Rewards</h3>
                                <div>
                                    <h5 className="mt-3">Rising Star</h5>
                                    <p className="mb-1">New Jersey Super Lawyer</p>
                                    <p>2012</p>
                                </div>
                                <div>
                                    <h5 className="mt-5">Rising Star</h5>
                                    <p className="mb-1">New Jersey Super Lawyer</p>
                                    <p>2012</p>
                                </div>
                                <div>
                                    <h5 className="mt-5">Rising Star</h5>
                                    <p className="mb-1">New Jersey Super Lawyer</p>
                                    <p>2012</p>
                                </div>
                                <p className="hns">view all honors and rewards</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="resume-detial">
                                <h3>Associations</h3>
                                <div>
                                    <h5 className="mt-3">Rising Star</h5>
                                    <p className="mb-1">New Jersey Super Lawyer</p>
                                    <p>2012</p>
                                </div>
                                <div>
                                    <h5 className="mt-5">Rising Star</h5>
                                    <p className="mb-1">New Jersey Super Lawyer</p>
                                    <p>2012</p>
                                </div>
                                <div>
                                    <h5 className="mt-5">Rising Star</h5>
                                    <p className="mb-1">New Jersey Super Lawyer</p>
                                    <p>2012</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="resume-detial">
                                <h3>Publications</h3>
                                <div>
                                    <h5 className="mt-3">Rising Star</h5>
                                    <p className="mb-1">New Jersey Super Lawyer</p>
                                    <p>2012</p>
                                </div>
                                <div>
                                    <h5 className="mt-5">Rising Star</h5>
                                    <p className="mb-1">New Jersey Super Lawyer</p>
                                    <p>2012</p>
                                </div>
                                <div>
                                    <h5 className="mt-5">Rising Star</h5>
                                    <p className="mb-1">New Jersey Super Lawyer</p>
                                    <p>2012</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="resume-detial">

                                <h5 className="rising">Rising Star</h5>
                                <p className="mb-1">New Jersey Super Lawyer</p>
                                <p>2012</p>
                                <div className="mt-5">
                                    <h5>Rising Star</h5>
                                    <p className="mb-1">New Jersey Super Lawyer</p>
                                    <p>2012</p>
                                </div>
                                <div className="mt-5">
                                    <h5>Rising Star</h5>
                                    <p className="mb-1">New Jersey Super Lawyer</p>
                                    <p>2012</p>

                                </div>
                                <p className="hns"> <a href>view all
                                        publications</a></p>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="adntional">Additional Information</div>
                        </div>
                        <div className="col-lg-6">
                            <div className="resume-detial">
                                <h3>Speaking Engagements</h3>
                                <div>
                                    <h5 className="mt-3">Rising Star</h5>
                                    <p className="mb-1">New Jersey Super Lawyer</p>
                                    <p>2012</p>
                                </div>
                                <div>
                                    <h5 className="mt-5">Rising Star</h5>
                                    <p className="mb-1">New Jersey Super Lawyer</p>
                                    <p>2012</p>
                                </div>
                                <div>
                                    <h5 className="mt-5">Rising Star</h5>
                                    <p className="mb-1">New Jersey Super Lawyer</p>
                                    <p>2012</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="resume-detial">
                                <h3>Certificates</h3>
                                <div>
                                    <h5 className="mt-3">Rising Star</h5>
                                    <p className="mb-1">New Jersey Super Lawyer</p>
                                    <p>2012</p>
                                </div>
                                <div>
                                    <h5 className="mt-5">Rising Star</h5>
                                    <p className="mb-1">New Jersey Super Lawyer</p>
                                    <p>2012</p>
                                </div>
                                <div>
                                    <h5 className="mt-5">Rising Star</h5>
                                    <p className="mb-1">New Jersey Super Lawyer</p>
                                    <p>2012</p>
                                </div>
                                <p className="hns"> <a href>view all
                                        certificates</a></p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </section>

        <section className="location" id="location">
            <div className="container">
                <h2 className="mb-3">Location</h2>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="map">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53231.02692208374!2d73.86672171070704!3d33.5029594041116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e02171882731c7%3A0xf604d472f02768d3!2sKotli!5e0!3m2!1sen!2s!4v1727778725633!5m2!1sen!2s"
                                    width="550"
                                    height="450"
                                    style={{
                                        borderRadius: '30px',
                                        }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div
                            className="d-flex justify-content-start align-items-top mt-5">
                            <div>
                                <i className="fa-solid fa-phone-volume"></i>
                            </div>
                            <div className="ms-3">
                                <h5>J. Attorney Office</h5>
                                <p className="mb-2">+874 8383 9834</p>
                                <p className="mb-2">+874 8383 9834</p>
                                <p className="mb-2">+874 8383 9834</p>

                            </div>

                        </div>
                        <div
                            className="d-flex justify-content-start align-items-top mt-5">
                            <div>
                                <i className="fa-solid fa-location-dot"></i>
                            </div>
                            <div className="ms-3">
                                <h5>Address</h5>
                                <p className="mb-2">130 Fort Lee Road</p>
                                <p className="mb-2">Leonia, NJ, 07605</p>
                            </div>
                        </div>
                        <div
                            className="d-flex justify-content-start align-items-center mt-3 buttons-sec">

                            <button className="phone-btn">
                                <span className="icon"><i
                                        className="fa-solid fa-envelope"></i></span> Message
                                Directly
                            </button>
                            <button className="email-btn ms-3">
                                <span className="icon"><i
                                        className="fa-solid fa-location-arrow"></i></span>
                                Get Directions
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="offic_hours mt-5" id="office">
            <div>
                <h2 className="mt-2 mb-4">Office Hours</h2>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card shadow border-0 officeHour_card">
                            <div className="card-body ps-4">
                                <h4 className="mb-3">Monday to Thursday</h4>
                                <p>9AM - 5PM</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card  border-0 shadow officeHour_card" >
                            <div className="card-body ps-4">
                                <h4 className="mb-3">Friday</h4>
                                <p>9AM - 2PM</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card border-0 shadow officeHour_card">
                            <div className="card-body ps-4">
                                <h4 className="mb-3">Saturday - Sunday</h4>
                                <p>on call</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

        <section className="reviews" id="review">
            <div className="mt-5">
                <div className="d-flex  justify-content-start align-items-center">
                    <h2 className="mb-2">Reviews</h2>
                    <p className="mb-0 ms-2"> <span>&#11088;</span> 4.2(67)</p>
                </div>
                <p className="mb-0">Here are the authentic reviews of this
                    lawyer.</p>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="mt-3 mx-2">
                            <h5>1. Legal Knowledge</h5>
                            <div >
                                <Box 
                                // sx={{ width: 500 }}
                                >
                                    <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
                                </Box>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div>
                                        <Rating
                                        name="simple-controlled"
                                        value={value}
                                        onChange={(event, newValue) => {
                                            setValue(newValue);
                                        }}
                                        // sx={{
                                        //     '& .MuiRating-iconFilled': {
                                        //     color: 'gold', 
                                        //     },
                                        //     '& .MuiRating-iconHover': {
                                        //     color: 'lightgoldenrodyellow', 
                                        //     },
                                        // }}
                                        />
                                </div>
                                <div>4.0/5.0</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="mt-3 mx-2">
                            <h5>2. Professionalism</h5>
                            <div >
                                <Box 
                                // sx={{ width: 500 }}
                                >
                                    <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
                                </Box>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div>
                                        <Rating
                                        name="simple-controlled"
                                        value={value}
                                        onChange={(event, newValue) => {
                                            setValue(newValue);
                                        }}
                                        />
                                </div>
                                <div>4.0/5.0</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="mt-3 mx-2">
                            <h5>3. Outcome Satisfaction</h5>
                            <div >
                                <Box 
                                // sx={{ width: 500 }}
                                >
                                    <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
                                </Box>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div>
                                        <Rating
                                        name="simple-controlled"
                                        value={value}
                                        onChange={(event, newValue) => {
                                            setValue(newValue);
                                        }}
                                        />
                                </div>
                                <div>4.0/5.0</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="mt-3 mx-2">
                            <h5>4. Overall Experience</h5>
                            <div >
                                <Box 
                                // sx={{ width: 500 }}
                                >
                                    <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
                                </Box>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div>
                                        <Rating
                                        name="simple-controlled"
                                        value={value}
                                        onChange={(event, newValue) => {
                                            setValue(newValue);
                                        }}
                                        />
                                </div>
                                <div>4.0/5.0</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </div>
    );
}

export default lawyerProfile;