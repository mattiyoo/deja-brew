import s1 from '../../img/s1.png'
import s2 from '../../img/s2.png'
import s3 from '../../img/s3.png'
import order from '../../Images/cart-gif.gif'
import ship from '../../Images/shipping-gif.gif'
import delivered from '../../Images/delivered-gif.gif'
import '../Service/service.css'

const Service = () => {
    return (
        <section className="services" id="services">
        <div className="heading">
            <span>Services</span>
            <h2>Providing the best quality.</h2>
        </div>

        <div className="service-container">
            <div className="s-box">
                <img src={order} alt="" />
                <h3>Order</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quos consequatur molestiae earum assumenda unde?</p>
            </div>

            <div className="s-box">
                <img src={ship} alt="" />
                <h3>Shipping</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quos consequatur molestiae earum assumenda unde?</p>
            </div>

            <div className="s-box">
                <img src={delivered} alt="" />
                <h3>Delivered</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quos consequatur molestiae earum assumenda unde?</p>
            </div>
        </div>

    </section>
    );
}
 
export default Service;