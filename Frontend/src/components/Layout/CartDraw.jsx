
import { IoMdClose } from "react-icons/io";
import Cardcontent from '../Cart/Cardcontent';
import { useNavigate } from 'react-router-dom';

const CartDraw=({Drawopen,toggleCartDraw})=> {
  const navigate = useNavigate();

  const handleCheckout = ()=>{
    toggleCartDraw();
    navigate('/checkout');

  }
   
  return (
    <div className={`fixed top-0 right-0 w-3/4 sm:w-1/4 md:w-1/3 h-full bg-white shadow-lg transform
  transition-transform duration-300 flex flex-col z-50 ${Drawopen?"translate-x-0":"translate-x-full"}`}>
              {/*close button */}
              <div className='flex justify-end p-4'>
                <button onClick={toggleCartDraw}>
                    <IoMdClose className='h-6 w-6 text-gray-600' />
                </button>

              </div>
              {/* cart contents with scorelleable area */}
              <div className='flex-grow p-4 overflow-y-auto'>
                <h1 className='text-1xl font-semibold mb-3'>Your Cart</h1>

                {/* component for cart Contents */}
                <Cardcontent/>


              </div>
              {/* checkout button fixed at the botton */}
              <div className='p-3 bg-white sticky botton-0'>
                <button 
                onClick={handleCheckout}
                className='w-full text-white bg-black py-2 rounded-lg font-semibold hover:bg-gray-800
                 transition'>Checkout</button>
                <p className='text-sm tracking-tighter text-gray-500 mt-2 text-center'>
                    Shipping,taxes and discount codes calculated at checkout.
                </p>

              </div>

    </div>
  )
}

export default CartDraw