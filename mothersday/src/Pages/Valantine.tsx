import './Valantine.css'
import val from '../assets/val.jpg'
function Valantine() {
  return (
    <div className="valentine-container">
    <div>
      <img src={val} alt="Valentine's Day" className="valentine-image" />
    </div>
    <div className="valentine-text">
        <h1>Surprise Your Valantine! Let us arrange a smile For Her. </h1>

        <p>Whrere flowers are our inspirations to create lasting memories whatever the occations inspiration to create lasting memories...</p>

        <ul>
            <li>Hand Picked Just for you.</li>
            <li>Hand picked just for you.</li>
            <li>Hand picked just for.</li>
           
        </ul>
         <button className='shopnow'>More Detail</button>

    </div>
    </div>
  );
}

export default Valantine;