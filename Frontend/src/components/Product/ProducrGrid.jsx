import { Link } from "react-router-dom";

const ProducrGrid = ({ products }) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3'>
      {products.map((product, index) => (
        <Link key={index} to={`/product/${product._id}`} className='block'>
          <div className="bg-white p-3 rounded-lg">
            <div className="w-full h-90 mb-2">
              <img
                src={product.images[0].url}
                alt={product.images[0].altText || product.name}
                className='w-full h-full object-cover rounded-lg'
              />
            </div>
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600 tracking-tighter">${product.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProducrGrid;
