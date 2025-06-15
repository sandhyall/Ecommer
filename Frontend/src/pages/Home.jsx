import React from 'react'
import Hero from '../components/Layout/Hero'
import Gendercollectionsection from '../components/Product/Gendercollectionsection'
import NewArrival from '../components/Product/NewArrival'
import ProductDetails from '../components/Product/ProductDetails'
import ProducrGrid from '../components/Product/ProducrGrid'
import FeratureCollection from '../components/Product/FeratureCollection'
import FeatureSection from '../components/Product/FeatureSection'

const placeholderproducts=[
    {
      _id: "1",
      name: "Product 1",
      price: 120,
      images: [{ url: "https://picsum.photos/500/500?random=1",  }],
    },
    {
      _id: "2",
      name: "Product 2",
      price: 85,
      images: [{ url: "https://picsum.photos/500/500?random=2",  }],
    },
    {
      _id: "3",
      name: "Product 3",
      price: 99,
      images: [{ url: "https://picsum.photos/500/500?random=3",  }],
    },
    {
      _id: "4",
      name: "Product 4",
      price: 150,
      images: [{ url: "https://picsum.photos/500/500?random=4",  }],
    },
    {
      _id: "5",
      name: "Product 5",
      price: 45,
      images: [{ url: "https://picsum.photos/500/500?random=5",  }],
    },
    {
      _id: "6",
      name: "Product 6",
      price: 60,
      images: [{ url: "https://picsum.photos/500/500?random=6",  }],
    },
    {
      _id: "7",
      name: "Product 7",
      price: 110,
      images: [{ url: "https://picsum.photos/500/500?random=7",   }],
    },
    {
      _id: "8",
      name: "Product 8",
      price: 95,
      images: [{ url: "https://picsum.photos/500/500?random=8",  }],
    },

]

const Home = () => {
  return (
    <div>
     <Hero/>
     <Gendercollectionsection/>
     <NewArrival/>

     {/* best seller section */}
     <h2 className='text-2xl text-center font-bold mb-4'>
        Best Seller
     </h2>
     <ProductDetails/>
     <div className="container mx-auto">
        <h2 className='text-2xl text-center font-bold mb-4'>
            Top Waer's for women
        </h2>
        <ProducrGrid products={placeholderproducts}/>
     </div>
     <FeratureCollection/>
     <FeatureSection/>
    </div>
  )
}

export default Home