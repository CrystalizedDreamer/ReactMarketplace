import React from 'react'
import { useState } from 'react'
import './App.css'
import bananaImg from './assets/Images/Bananas.png'
import tomatoImg from './assets/Images/HylianTomato.png'
import fangImg from './assets/Images/BokoblinFang.png'
import hinoxHornImg from './assets/Images/HinoxHorn.jpg'
import fairyImg from './assets/Images/FairyImage.jpg'
import halberdImg from './assets/Images/RoyalHalberd.png'
import zoraSwordImg from './assets/Images/ZoraSword.webp'
import royalGuardShieldImg from './assets/Images/RoyalGuardShield.jpg'
import stealthArmorImg from './assets/Images/StealthSet.webp'
import championsTunicImg from './assets/Images/ChampionsTunic.png'



function ProductCard({ product, color }) {
  return (
    <div className="product-card" style={{ backgroundColor: color }}>
      <img src={product.image} alt={product.name} className="productImage" />
      <h2>{product.name}</h2>
      <p>Price: {product.price} Rupees</p>
      <p>{product.description}</p>
      <button className="buy-button">Buy Now</button>
    </div>
  )
}

function AppParentComponent() {
  const [Products, setProducts] = useState([
    {id: 1,
    name: 'Mighty Bananas', 
    price: 50, 
    description: 'A delicious fruit that boosts your strength.',
    image: bananaImg},

    {id: 2, 
    name: 'Hylian Tomatoes', 
    price: 15, 
    description: 'A staple vegetable in Hyrule.',
    image: tomatoImg,
  },
    {id: 3, 
    name: 'Bokoblin fang', 
    price: 300, 
    description: 'A sharp fang from a Bokoblin, useful for crafting.',
    image: fangImg
  },
    {id: 4, 
    name: 'Hinox Horn', 
    price: 400, 
    description: 'A sturdy horn from a Hinox, prized by collectors.',
    image: hinoxHornImg,
  },
    {id: 5, 
    name: 'Fairy in a Bottle', 
    price: 500, 
    description: 'A magical fairy that can revive you when you fall in battle.',
    image: fairyImg
  },
    {id: 6, 
    name: 'Royal Halberd', 
    price: 600, 
    description: 'A powerful weapon fit for a hero.',
    image: halberdImg,
  },
    {id: 7, 
    name: 'Zora Sword', 
    price: 700,  
    description: 'A sword crafted by the Zora, known for its agility.',
    image: zoraSwordImg,
  },
    {id: 8, 
    name: 'Royal Guard Shield', 
    price: 800, 
    description: 'This shield was forged using ancient Sheikah technology.',
    image: royalGuardShieldImg,
  },
    {id: 9, 
    name: 'Sheikah Stealth Armor', 
    price: 900, 
    description: 'Armor that enhances stealth capabilities.',
    image: stealthArmorImg,
  },
    {id: 10, 
    name: 'Champion\'s Tunic', 
    price: 1000, 
    description: 'A tunic worn by the champions of Hyrule, providing great defense.', 
    image: championsTunicImg
  },
  ])

  const colors = [
    "#e0218a8a", "#0047AB8a", "#FF57338a", "#33FF578a", "#FFC3008a",
    "#8E44AD8a", "#3498DB8a", "#2ECC718a", "#F1C40F8a", "#E67E229a"
  ]
  function ProductList({ products }) {
    return (
      <div className="product-list">
        {products.map((product, idx) => (
          <ProductCard key={product.id} product={product} color={colors[idx % colors.length]} />
        ))}
      </div>
    )
  }

return (
    <div>
      <h1>The Wara Bazaar</h1>
      <ProductList products={Products} />
    </div>
  )
}



export default AppParentComponent
