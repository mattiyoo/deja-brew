import '../Footer/footer.css'

const Footer = () => {
    return (
        <section className="contact" id="contact">
        <div className="footer">
            <div className="main">
                <div className="col">
                    <h4>Menu Links</h4>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Menu</a></li>
                        <li><a href="/">Service</a></li>
                        <li><a href="/">Contact</a></li>
                    </ul>
                </div>

                <div className="col">
                    <h4>Our Service</h4>
                    <ul>
                        <li><a href="/">Web Design</a></li>
                        <li><a href="/">Web Development</a></li>
                        <li><a href="/">Marketing</a></li>
                        <li><a href="/">Product Management</a></li>
                        <li><a href="/">Graphic Design</a></li>
                    </ul>
                </div>

                <div className="col">
                    <h4>Information</h4>
                    <ul>
                        <li><a href="/">About Us</a></li>
                        <li><a href="/">Deliver Information</a></li>
                        <li><a href="/">Privacy Policy</a></li>
                        <li><a href="/">Terms & Conditions</a></li>
                    </ul>
                </div>

                <div className="col">
                    <h4>Contact Us</h4>
                    <div className="social">
                        <a href="/"><i className='bx bxl-facebook' ></i></a>
                        <a href="/"><i className='bx bxl-instagram' ></i></a>
                        <a href="/"><i className='bx bxl-twitter' ></i></a>
                    </div>
                </div>

            </div>
        </div>
    </section>
    );
}
 
export default Footer;