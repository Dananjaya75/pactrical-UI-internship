 import './Products.css'
 import New  from './New'
  import Featured from './Featured'
  import Best from './Best'
  import { useState } from 'react'

function FeaturedItem() {
  const [activeTab, setActiveTab] = useState('new')

  return (
    <div className="products-container">
      <h1>Featured Item</h1>
      <p>A perfect blend of creativity and energy communication, happiness and love. Let us arrange a smile for you</p>
      <ul>
        <li onClick={() => setActiveTab('new')}>New</li>
        <li onClick={() => setActiveTab('featured')}>Featured</li>
        <li onClick={() => setActiveTab('best')}>Best sellers</li>
      </ul>
      {activeTab === 'new' && <New />}
      {activeTab === 'featured' && <Featured />}
      {activeTab === 'best' && <Best />}
    </div>
  )
}

export default FeaturedItem