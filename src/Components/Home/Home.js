import homePic from '../../img/home.png'
import homeImg from '../../Images/home-img.png'
import homeBlob from '../../Images/home-blob.png'
import '../Home/home.css'

const Home = () => {
    return (
        <section className="home" id="home">
            <div className="home-text">
                <h1>Coffee?</h1>
                <h2>Experience the taste of<br/>freshly brewed coffee.</h2>
                <a href="/" className="btn">Shop now</a>
            </div>

            <div className="home-img">
                <svg className='blob' width="390" height="406" viewBox="0 0 390 406" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M280.861 9.04308C314.952 23.8188 341.791 52.6906 359.437 85.3729C376.219 116.455 373.466 152.862 377.46 187.954C381.593 224.276 399.534 262.803 383.361 295.592C367.193 328.37 326.651 339.288 294.357 356.431C265.281 371.867 235.809 383.998 203.639 390.998C167.528 398.854 128.787 414.801 95.0151 399.803C61.1993 384.786 45.3163 346.265 28.6069 313.269C13.4777 283.393 6.38624 251.229 2.91243 217.925C-0.63003 183.963 -2.90861 149.669 8.17335 117.369C19.9862 82.9393 37.978 48.8399 67.9961 28.2289C98.0001 7.62772 136.412 7.6924 172.668 4.42462C209.242 1.12811 247.17 -5.55907 280.861 9.04308Z" fill="#FCCB06" />
                </svg>


                <img className='home-image' src={homeImg} alt=''/>
            </div>
        </section>
    );
}
 
export default Home;