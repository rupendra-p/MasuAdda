import React from 'react';
import "./Footer.css"


const Footer = () => {
    return (
        <footer>
            <div className="leftFooter">
                <h2 className="des">About Us</h2>
                <p>Masu Adda is an reputed company established in 2021 to fulfill it's user demand to provide every kind of non-veg item
                    as per the its user request. By using this website user can easily order every kind of non-veg item by sitting at their home
                    without any effort.

                </p>
            </div>
            <div className="midFooter">
                <h1>MasuAdda</h1>
                <p>Best quality meat item is our first priority</p>
                <p>Copyright 2021 &copy; MasuAdda</p>
            </div>
            <div className="rightFooter">
                <h4 className='contact'>Contact Us</h4>
                <p> <i class="fa fa-phone">01-12345678, 9876543210</i></p>
                <p> <i class="fa fa-home"> Dillibazar, Kathmandu</i></p>
                <p> <i class="fa fa-envelope"> masuadda2021@gmail.com</i></p>
                
                
            </div>
        </footer>
    )
}

export default Footer
