import {} from 'react'

import Image1 from '../../../assets/Image/catg_men.jpg'
import Image2 from '../../../assets/Image/catg_bag.jpg'
import Image3 from '../../../assets/Image/catg_shoes.jpg'
const ImageContainer = () => {
  return (
    <>
<div className="hover-container">
    <div className="hover-element">
      <span className="hover-text">Hover Me</span>
      <div className="image-overlay">
        <img src={Image1} alt="Image 1"/>
        <img src={Image2} alt="Image 2"/>
        <img src={Image3}  alt="Image 3"/>
      </div>
    </div>
  </div>
    </>
  )
}

export default ImageContainer


