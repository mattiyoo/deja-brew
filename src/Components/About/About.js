import aboutImg from '../../img/about.png'
import aboutPic from '../../Images/about-us-img.png'
import '../About/about.css'

const About = () => {
    return (
        <section className="about" id='about'>
            <div className="about-img">
                <svg className='about-blob' width="466" height="430" viewBox="0 0 516 480" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M346.375 43.6958C409.524 69.7145 491.036 85.63 511.928 150.746C532.547 215.011 469.724 271.294 438.609 331.171C411.163 383.987 399.601 453.92 343.766 474.351C288.401 494.609 231.168 456.182 180.809 425.502C138.811 399.916 113.849 360.003 87.668 318.331C51.4456 260.678 -12.8912 207.739 2.27316 141.334C18.3004 71.1501 89.9762 25.0106 159.132 5.38774C222.848 -12.6915 285.13 18.462 346.375 43.6958Z" fill="#FEEEE7" />
                </svg>
                
                <img src={aboutPic} alt="" />
            </div>

            <div className="about-text">
                <span>About Us</span>
                <h2>Brewing memories<br/>one cup at a time.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ratione incidunt itaque quaerat aliquid! Aliquid repudiandae maxime ipsa saepe facere eligendi minus perferendis impedit ipsum.</p>
                <a href="/" className="btn">Learn More</a>
            </div>
        </section>
    );
}
 
export default About;