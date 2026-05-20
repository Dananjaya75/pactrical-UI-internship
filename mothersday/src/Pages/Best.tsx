 import './Products.css'
 import spring from '../assets/springsnow.jpg'

 import scarlet from '../assets/scarlet.jpg'
 import fox from '../assets/fox.jpg'
function Best(){
    return(
        <div className="products-container">
               
        
                <div className="product-card">
                    <img src={scarlet} alt="" />
                    <h3>Scarlet Sage</h3>
                    <p>Price: $39</p>
                    
                </div>
        
                <div className="product-card">
                    <img src={fox} alt="" />
                    <h3>Foxglow Flower</h3>
                    <p>Price: $79</p>
                    
                </div>
        
                 <div className="product-card">
                    <img src={spring} alt="Spring Snow" />
           
                    <h3>Spring SnowFlake</h3>
                    <p>Price: $19</p>
        
                </div>
      
                
              </div>
    )

}
export default Best