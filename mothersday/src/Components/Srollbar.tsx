 import './Scrollbar.css'
 import { delivery,online,fresh,artist} from "./Assets.tsx";
 
function Scrollbar() {
  return (
    <div className="scrollbar">
      <div className="scrollbar-thumb">
        <img src={delivery} alt=""  className='icons'/>
        <div>
             <h3>Free Delevery</h3>
              <p>Free Shipping around the world</p>

        </div>
      
      </div> 

      <div className="scrollbar-thumb">
        <img src={online} alt=""  className='icons'/>
        <div>
             <h3>Online Order</h3>
              <p>Don't worry you can order Online by our Site</p>

        </div>
      
      </div> 

      <div className="scrollbar-thumb">
        <img src={fresh} alt=""  className='icons'/>
        <div>
             <h3>Freshness</h3>
              <p>you have freshness flowers every single order</p>

        </div>
      
      </div> 

      <div className="scrollbar-thumb">
        <img src={artist} alt=""  className='icons'/>
        <div>
             <h3>Made by Artist </h3>
              <p>World for all made by artists orders over now </p>

        </div>  
      </div> 
    </div>
  );
}

export default Scrollbar;