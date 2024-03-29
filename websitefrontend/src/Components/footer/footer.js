import React from 'react'
import './footer.css'

function Footer() {

    return (
        <>

        <div className="pageTop-horizontal-Line-Footer-topmargin"></div>
        <div className="pageTop-horizontal-Line-Footer"></div>
        <div className="footer-main-container-wrapper">
            <p className="footer-head-para"> Follow me on</p>
            <div className="follow-Up-Social-Links">
                <ul className="followup-Links-UL">
                    <li><a href="https://www.facebook.com/profile.php?id=100069794556607" target='_blank' rel="noreferrer" className="follow-Hyperlink"><i className="fab fa-facebook-square"/></a></li>
                    <li><a href="https://api.whatsapp.com/qr/XZMXDXJDMSVLL1" target='_blank' rel="noreferrer" className="follow-Hyperlink1"><i className="fab fa-whatsapp-square"/></a></li>
                    <li><a href="https://www.instagram.com/deepak_kumar_arya__/ " target='_blank' rel="noreferrer" className="follow-Hyperlink2"><i className="fab fa-instagram-square"/></a></li>
                    <li><a href="https://www.linkedin.com/in/deepak-kumar-6ab59116b/"  target='_blank' rel="noreferrer" className="follow-Hyperlink3"><i className="fab fa-linkedin"/></a></li>
                    <li><a href="https://www.twitter.com/" className="follow-Hyperlink4"><i className="fab fa-twitter-square" /></a></li>
                    <li><a href="mailto: deepakkumararya1812@gmail.com" className="follow-Hyperlink5"><i className="fab fa-google-plus-square"/></a></li>
                </ul>
            </div>
            <div className="footer-name-heading"><a href="/"> @ Deepak Kumar</a></div>

            <div className="pageMid-horizontal-Line-Footer"></div>
{
/* <div className="footer-Reserved-rights-and-design">
    <p className="reserve-Rights"> Deepak Kumar <i className="far fa-copyright"></i> All rights are Reserved 2021 </p>
    <p className="Designed-and-mainted">  Website Desgined & Maintained By: The StartUp Designers</p>
    <p className="contactusat-footer"><i className="fas fa-phone-alt"></i><a href="tel:+9184330214414">+918433024414,</a>  <a href="tel:+919368736361">+919368736361</a> </p>
    <p className="emailusat-footer"><i className="far fa-envelope"></i><a href="mailto:officialcharanjeetsinghsidhu@gmail.com">officialcharanjeetsinghsidhu@gmail.com</a> </p>
</div> */
}
        </div>
        </>
    )
}

export default Footer;
