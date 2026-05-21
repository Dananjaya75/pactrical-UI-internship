
 import './Expert.css'
import girl1 from '../assets/girl1.jpg'
import girl2 from '../assets/girl2.jpg'
import girl3 from '../assets/girl3.jpg'
import girl4 from '../assets/girl4.jpg'

function expert() {
  return (
    <div>
      <h1 className='text-3xl font-bold text-center mt-10'>Flowers Experts</h1>
      <p className='text-center mt-5 text-lg'>Our team of flower experts is dedicated to providing you with the best floral arrangements and advice for all occasions. With years of experience in the industry, our experts have a deep understanding of different flower varieties, their meanings, and how to create stunning bouquets that will impress your loved ones.</p>

      <div>
        <img src={girl1} alt="" className='exp1' />
        <img src={girl2} alt="" className='exp1'/>
        <img src={girl3} alt="" className='exp1'/>
        <img src={girl4} alt="" className='exp1'/>
      </div>
    </div>
  )
}

export default expert