import {bannerImage} from './Assets'
import './Banner.css'
function Banner(){
    return(
        <div className="banner">
            <h1>Make Your Mom Smile</h1>
            <p>Find the perfect gift for your mom on Mother's Day. Shop our collection of flowers, plants, and gifts to show your love and appreciation.</p>
            <img src={bannerImage} alt="Banner" className="banner-image" />
           
        </div>
    )
}
export default Banner