import React from 'react';
import './resume.css';
import collegelogo from '../../Images/gehulogo.png'
import schoollogo from '../../Images/Kendriya-Vidyalaya-Sangathana-removebg-preview.png'

function Resumepage() {
    return (
        <div className="main-container-Wrapper-Resume-Page" id="main-container-Wrapper-Resume-Page">
            <p className="Resume-page-heading-Para">Resume </p>
            <div className="horizontal-Line-Resume"></div>
            <p className="Resume-page-Quote-Para">Education </p>

            <div className="education-timeline-maincontainer">
                <div className="education-timeline-childcontainer">
                    <ul>
                        <li>
                            <div className="education-details-wrapper-child">
                                <div className="insitution-Details-logo-Div">
                                    <a href="https://www.gehu.ac.in/" target='_blank' rel="noreferrer">
                                    <img src={collegelogo} alt="Logo Not found" /></a>
                                </div>
                                <div className="details-div-wrapper">
                                    <p className="education-year-para-head">2018-2021</p>
                                    <p className="education-degree-para">GRADUATION <span>Bachelor of Computer Applications [BCA]</span></p>
                                    <p className="education-school-para">Graphic Era Hill University</p>
                                    <p className="education-detail-para">I have completed my graduation from GEHU, Bhimtal. With a good SGPA score</p>
                                </div>
                            </div>
                            <div className="details-div-wrapper-end-horizontalline"></div>
                        </li>

                        <li>
                            <div className="education-details-wrapper-child">
                                <div className="insitution-Details-logo-Div">
                                    <a href="https://haldwanicantt.kvs.ac.in/" target='_blank' rel="noreferrer">
                                    <img src={schoollogo} alt="Logo Not found" /></a>
                                </div>
                                <div className="details-div-wrapper">
                                    <p className="education-year-para-head">2017-2018</p>
                                    <p className="education-degree-para">INTERMEDIATE</p>
                                    <p className="education-school-para">Kendriya Vidyalaya Sangathan</p>
                                    <p className="education-detail-para">I have completed my Intermediate from Haldwani, with a good percentile.</p>
                                </div>

                            </div>
                            <div className="details-div-wrapper-end-horizontalline"></div>
                        </li>

                        <li>
                            <div className="education-details-wrapper-child">
                                <div className="insitution-Details-logo-Div">
                                    <a href="https://haldwanicantt.kvs.ac.in/" target='_blank' rel="noreferrer">
                                    <img src={schoollogo} alt="Logo Not found" /></a>
                                </div>
                                <div className="details-div-wrapper">
                                    <p className="education-year-para-head">2015-2016</p>
                                    <p className="education-degree-para">HIGHSCHOOL</p>
                                    <p className="education-school-para">Kendriya Vidyalaya Sangathan</p>
                                    <p className="education-detail-para">I have completed my Intermediate from Haldwani, with a good percentile.</p>
                                </div>
                            </div>

                        </li>
                    </ul>

                </div>
            </div>





            <div className="pageEnd-horizontal-Line-Resume"></div>
        </div>
    )
}

export default Resumepage;
