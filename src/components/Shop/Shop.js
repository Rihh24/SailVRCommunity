import React, { useState } from 'react';
import "./Shop.css"
import set_1 from "../Assets/set1.jpg"
import set_2 from "../Assets/set2.jpg"
import chest_1 from "../Assets/chest1.jpg"
import chest_2 from "../Assets/chest2.jpg"
import chest_3 from "../Assets/chest3.jpg"
import jackets from "../Assets/jackets.jpg"
import hats from "../Assets/hats.jpg"
import shoulders from "../Assets/shoulders.jpg"
import beards from "../Assets/beards.jpg"
import eyepatch from "../Assets/eyepatch.jpg"
import masks from "../Assets/masks.jpg"
import pistols from "../Assets/pistols.jpg"
import gloves from "../Assets/gloves.jpg"
import legs from "../Assets/legs.jpg"
import boots from "../Assets/boots.jpg"
import belts from "../Assets/belts.jpg"



const Shop = () => {
  const [enlargedSrc, setEnlargedSrc] = useState(null);

  const handleImageClick = (src) => {
    setEnlargedSrc(src);
  };

  const handleCloseEnlarged = () => {
    setEnlargedSrc(null);
  };


  return (
    
    <div className='shop-container'>
      {enlargedSrc && (
        <div className="enlarged-image" onClick={handleCloseEnlarged}>
          <img src={enlargedSrc} alt="Enlarged" />
        </div>
      )}
      <div className="shop-item" onClick={() => handleImageClick(set_1)}>
        <img src={set_1} />
        <p className='item-name'>Test</p>
        <p className='star-coins'>$3000</p>
      </div>
      <div className="shop-item" onClick={() => handleImageClick(set_2)}>
        <img src={set_2} />
        <p className='item-name'>Test</p>
        <p className='star-coins'>$2000</p>
      </div>
      <div className="shop-item" onClick={() => handleImageClick(chest_1)}>
        <img src={chest_1} />
        <p className='item-name'>Test</p>
        <p className='star-coins'>$ Test</p>
      </div>
      <div className="shop-item" onClick={() => handleImageClick(chest_1)}>
        <img src={chest_2} />
        <p className='item-name'>Test</p>
        <p className='star-coins'>$ Test</p>
      </div>
      <div className="shop-item" onClick={() => handleImageClick(chest_3)}>
        <img src={chest_3} />
        <p className='item-name'>Test</p>
        <p className='star-coins'>$ Test</p>
      </div>
      <div className="shop-item" onClick={() => handleImageClick(jackets)}>
        <img src={jackets} />
        <p className='item-name'>Test</p>
        <p className='star-coins'>$ Test</p>
      </div>
      <div className="shop-item" onClick={() => handleImageClick(hats)}>
        <img src={hats} />
        <p className='item-name'>Test</p>
        <p className='star-coins'>$ Test</p>
      </div>
      <div className="shop-item" onClick={() => handleImageClick(shoulders)}>
        <img src={shoulders} />
        <p className='item-name'>Test</p>
        <p className='star-coins'>$ Test</p>
      </div>
      <div className="shop-item" onClick={() => handleImageClick(beards)}>
        <img src={beards} />
        <p className='item-name'>Test</p>
        <p className='star-coins'>$ Test</p>
      </div>
      <div className="shop-item" onClick={() => handleImageClick(eyepatch)}>
        <img src={eyepatch} />
        <p className='item-name'>Test</p>
        <p className='star-coins'>$ Test</p>
      </div>
      <div className="shop-item" onClick={() => handleImageClick(masks)}>
        <img src={masks} />
        <p className='item-name'>Test</p>
        <p className='star-coins'>$ Test</p>
      </div>
      <div className="shop-item" onClick={() => handleImageClick(pistols)}>
        <img src={pistols} />
        <p className='item-name'>Test</p>
        <p className='star-coins'>$ Test</p>
      </div>
      <div className="shop-item" onClick={() => handleImageClick(gloves)}>
        <img src={gloves} />
        <p className='item-name'>Test</p>
        <p className='star-coins'>$ Test</p>
      </div>
      <div className="shop-item" onClick={() => handleImageClick(legs)}>
        <img src={legs} />
        <p className='item-name'>Test</p>
        <p className='star-coins'>$ Test</p>
      </div>
      <div className="shop-item" onClick={() => handleImageClick(boots)}>
        <img src={boots} />
        <p className='item-name'>Test</p>
        <p className='star-coins'>$ Test</p>
      </div>
      <div className="shop-item" onClick={() => handleImageClick(belts)}>
        <img src={belts} />
        <p className='item-name'>Test</p>
        <p className='star-coins'>$ Test</p>
      </div>
    </div>
  )
}

export default Shop