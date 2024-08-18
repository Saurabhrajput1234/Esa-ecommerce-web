import React from 'react'
import "./Footer.css";


function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="footer-icons">
          <div className="footer-text">

          </div>
          <div className="icon">

            <a href="https://github.com/Saurabhrajput1234"><img src="pics/Vector.svg" alt="" /></a>
            <a href="https://www.linkedin.com/in/saurabh-rajput-135587232/"><img src="pics/Vector2.svg" alt="" ></img></a>



          </div> </div>
        <div className="Map">



          <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.1932135273137!2d77.49942917538263!3d28.675673575641074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf30885b1e2a5%3A0x9983675e24c6638b!2sAKGEC%3A%20Ajay%20Kumar%20Garg%20Engineering%20College%2C%20Ghaziabad!5e1!3m2!1sen!2sin!4v1684450478919!5m2!1sen!2sin" width="600" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <div className="footer-bottom">

        <p>&copy; 2023.com</p>

      </div>
    </div>
  )
}

export default Footer
