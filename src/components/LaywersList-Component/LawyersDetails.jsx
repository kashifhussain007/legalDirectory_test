import Image from "next/image";
import StarIcon from '@mui/icons-material/Star';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import VideocamIcon from '@mui/icons-material/Videocam';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import Lawimage1 from '../../../public/assets/LawyersList/1.png';
import Lawimage2 from '../../../public/assets/LawyersList/2.png';
import Lawimage3 from '../../../public/assets/LawyersList/3.png';
import Lawimage4 from '../../../public/assets/LawyersList/4.jpeg';

const lawyersDetails = () =>{
    return(
     <div>
        <section className="main-section mt-5">
            <div className="container">
                <div className="my-3"> 
                    <p className="defesnse"> New York has <span className="lawyerList_span">238 Criminal Defense</span> Lawyers</p>
                </div>
                <div className="card border-0 shadow">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-lg-4">
                                <Image src={Lawimage1}
                                    className="img-fluid rounded imgset" alt="..."/>
                            </div>
                            <div className="col-lg-5">
                                <div className="info">
                                    <div
                                        className="d-flex justify-content-start align-items-center">
                                        <h2>Salman Ahmed</h2>
                                        <p className="mb-0 ms-2"> <span className="lawyerList_star"><StarIcon/></span> 4.2(67)</p>
                                    </div>
                                    <p className="info_subHeading">Serving all of New York City as <strong>Criminal Defense</strong> Lawyer</p>
                                </div>
                                <div className="info-p mt-4">
                                    <p className="my-3"><i className="me-3 fa-solid fa-briefcase mx-1"></i> <strong>32 Years of Experience</strong></p>
                                    <div  className="d-flex  justify-content-start align-items-start">
                                        <div className="me-3 mx-1 ">
                                        <LocalOfferIcon className="rotate_tag"/>
                                           {/* <i  className="me-2 fa-solid fa-graduation-cap mx-1"></i> */}
                                        </div>
                                        <p className="lawyer_disc"> Experienced, competent and
                                            aggressive
                                            litigation
                                            attorney defending and prosecuting
                                            cases for
                                            clients. Good track record of
                                            success.</p>
                                    </div>

                                </div>
                                <div className="mt-5">
                                    <button type="button" className="btn btn-success consultant_btn ">FREE CONSULTATION</button> 
                                    <span className="free-cont"> <VideocamIcon/> VIRTUAL CONSULTATION</span>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="text-end saved">
                                  <i className="fa-solid fa-bookmark"></i> Saved
                                </div>
                                <div className=" button-container buttons-sec">
                                    <button className="phone-btn">
                                        <span > <PhoneForwardedIcon className="phoneIcon"/> </span>
                                        342 232 4564
                                    </button>
                                </div>
                                <div className="details mt-5">
                                    <h5 className="pt-2">
                                        <i className="fa-solid fa-gavel"></i>
                                        Practice Areas:
                                    </h5>
                                    <p>Medical Malpractice,
                                        Nursing Home, Personal
                                        Injury and Products Liability</p>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        <section className="main-section mt-5">
            <div className="container">
                <div className="card border-0 shadow">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-lg-4 ">
                                <Image src={Lawimage2}
                                    className=" rounded imgset" alt="..."/>
                            </div>
                            <div className="col-lg-5">
                                <div className="info">
                                    <div
                                        className="d-flex justify-content-start align-items-center">
                                        <h2>Salman Ahmed</h2>
                                        <p className="mb-0 ms-2"> <span className="lawyerList_star"><StarIcon/></span> 4.2(67)</p>
                                    </div>
                                    <p className="info_subHeading">Serving all of New York City as <strong>Criminal Defense</strong> Lawyer</p>
                                </div>
                                <div className="info-p mt-4">
                                    <p className="my-3"><i className="me-3 fa-solid fa-briefcase mx-1"></i> <strong>32 Years of Experience</strong></p>
                                    <div  className="d-flex  justify-content-start align-items-start">
                                        <div className="me-3 mx-1 ">
                                        <LocalOfferIcon className="rotate_tag"/>
                                           {/* <i  className="me-2 fa-solid fa-graduation-cap mx-1"></i> */}
                                        </div>
                                        <p className="lawyer_disc"> Experienced, competent and
                                            aggressive
                                            litigation
                                            attorney defending and prosecuting
                                            cases for
                                            clients. Good track record of
                                            success.</p>
                                    </div>

                                </div>
                                <div className="mt-5">
                                    <button type="button" className="btn btn-success consultant_btn ">FREE CONSULTATION</button> 
                                    <span className="free-cont"> <VideocamIcon/> VIRTUAL CONSULTATION</span>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="text-end saved">
                                  <i className="fa-solid fa-bookmark"></i> Saved
                                </div>
                                <div className=" button-container buttons-sec">
                                    <button className="phone-btn">
                                        <span className=""> <PhoneForwardedIcon className="phoneIcon"/> </span>
                                        342 232 4564
                                    </button>
                                </div>
                                <div className="details mt-5">
                                    <h5 className="pt-2">
                                        <i className="fa-solid fa-gavel"></i>
                                        Practice Areas:
                                    </h5>
                                    <p>Medical Malpractice,
                                        Nursing Home, Personal
                                        Injury and Products Liability</p>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        <section className="main-section mt-5">
            <div className="container">
                {/* <div className="my-3"> 
                    <p className="defesnse"> New York has <span className="lawyerList_span">238 Criminal Defense</span> Lawyers</p>
                </div> */}
                <div className="card border-0 shadow">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-lg-4 ">
                                <Image src={Lawimage3}
                                    className=" rounded imgset" alt="..." />
                            </div>
                            <div className="col-lg-5">
                                <div className="info">
                                    <div
                                        className="d-flex justify-content-start align-items-center">
                                        <h2>Salman Ahmed</h2>
                                        <p className="mb-0 ms-2"> <span className="lawyerList_star"><StarIcon/></span> 4.2(67)</p>
                                    </div>
                                    <p className="info_subHeading">Serving all of New York City as <strong>Criminal Defense</strong> Lawyer</p>
                                </div>
                                <div className="info-p mt-4">
                                    <p className="my-3"><i className="me-3 fa-solid fa-briefcase mx-1"></i> <strong>32 Years of Experience</strong></p>
                                    <div  className="d-flex  justify-content-start align-items-start">
                                        <div className="me-3 mx-1 ">
                                        <LocalOfferIcon className="rotate_tag"/>
                                           {/* <i  className="me-2 fa-solid fa-graduation-cap mx-1"></i> */}
                                        </div>
                                        <p className="lawyer_disc"> Experienced, competent and
                                            aggressive
                                            litigation
                                            attorney defending and prosecuting
                                            cases for
                                            clients. Good track record of
                                            success.</p>
                                    </div>

                                </div>
                                <div className="mt-5">
                                    <button type="button" className="btn btn-success consultant_btn ">FREE CONSULTATION</button> 
                                    <span className="free-cont"> <VideocamIcon/> VIRTUAL CONSULTATION</span>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="text-end saved">
                                  <i className="fa-solid fa-bookmark"></i> Saved
                                </div>
                                <div className=" button-container buttons-sec">
                                    <button className="phone-btn">
                                        <span className=""> <PhoneForwardedIcon className="phoneIcon"/> </span>
                                        342 232 4564
                                    </button>
                                </div>
                                <div className="details mt-5">
                                    <h5 className="pt-2">
                                        <i className="fa-solid fa-gavel"></i>
                                        Practice Areas:
                                    </h5>
                                    <p>Medical Malpractice,
                                        Nursing Home, Personal
                                        Injury and Products Liability</p>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        <section className="main-section mt-5">
            <div className="container">
                {/* <div className="my-3"> 
                    <p className="defesnse"> New York has <span className="lawyerList_span">238 Criminal Defense</span> Lawyers</p>
                </div> */}
                <div className="card border-0 shadow">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-lg-4 ">
                                <Image src={Lawimage4} className="rounded imgset" alt="..."/>
                            </div>
                            <div className="col-lg-5">
                                <div className="info">
                                    <div
                                        className="d-flex justify-content-start align-items-center">
                                        <h2>Salman Ahmed</h2>
                                        <p className="mb-0 ms-2"> <span className="lawyerList_star"><StarIcon/></span> 4.2(67)</p>
                                    </div>
                                    <p className="info_subHeading">Serving all of New York City as <strong>Criminal Defense</strong> Lawyer</p>
                                </div>
                                <div className="info-p mt-4">
                                    <p className="my-3"><i className="me-3 fa-solid fa-briefcase mx-1"></i> <strong>32 Years of Experience</strong></p>
                                    <div  className="d-flex  justify-content-start align-items-start">
                                        <div className="me-3 mx-1 ">
                                        <LocalOfferIcon className="rotate_tag"/>
                                           {/* <i  className="me-2 fa-solid fa-graduation-cap mx-1"></i> */}
                                        </div>
                                        <p className="lawyer_disc"> Experienced, competent and
                                            aggressive
                                            litigation
                                            attorney defending and prosecuting
                                            cases for
                                            clients. Good track record of
                                            success.</p>
                                    </div>

                                </div>
                                <div className="mt-5">
                                    <button type="button" className="btn btn-success consultant_btn ">FREE CONSULTATION</button> 
                                    <span className="free-cont"> <VideocamIcon/> VIRTUAL CONSULTATION</span>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="text-end saved">
                                  <i className="fa-solid fa-bookmark"></i> Saved
                                </div>
                                <div className=" button-container buttons-sec">
                                    <button className="phone-btn">
                                        <span className=""> <PhoneForwardedIcon className="phoneIcon"/> </span>
                                        342 232 4564
                                    </button>
                                </div>
                                <div className="details mt-5">
                                    <h5 className="pt-2">
                                        <i className="fa-solid fa-gavel"></i>
                                        Practice Areas:
                                    </h5>
                                    <p>Medical Malpractice,
                                        Nursing Home, Personal
                                        Injury and Products Liability</p>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

     </div>
    )
}

export default lawyersDetails;