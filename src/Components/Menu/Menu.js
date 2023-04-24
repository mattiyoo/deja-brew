import food1 from '../../Images/coffee-3.png'
import food2 from '../../Images/coffee-2.png'
import food3 from '../../Images/coffee-1.png'

import '../Menu/menu.css'

const Menu = () => {
    return (
        <section className="menu" id="menu">
        <div className="heading">
            <span>Best Seller Coffee's</span>
            <h2>Coffee that's roasted to perfection.</h2>
        </div>

        <div className="menu-container">
            <div className="box">
                <div className="box-img" >
                    <img src={food1} alt='' />
                </div>
                <div className="box-text">
                <h2>Coffee Smoothie</h2>
                <h3>Coffee smoothie with <br/>whipped cream refreshment<br/>beverage.</h3>
                </div>
            </div>

            <div className="box">
                <div className="box-img">
                    <img src={food2} alt='' />
                </div>
                <h2>Mocha Frappe</h2>
                <h3>Made with the smooth<br/>espresso, creamy milk, and<br/>sweet chocolate.</h3>
            </div>

            <div className="box">
                <div className="box-img">
                    <img src={food3} alt='' />
                </div>
                <h2>Hot Choco with Cream</h2>
                <h3>Made with rich, velvety cocoa<br/>and topped with a generous<br/>dollop of whipped cream.</h3>
            </div>
        </div>

    </section>
    );
}
 
export default Menu;