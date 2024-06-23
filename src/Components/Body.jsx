import { useState } from 'react';
import FeatureData from "../Data/FeatureData";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const Body = () => {
  const carts= useSelector((carts)=>carts)
  console.log(carts)
  const [quantities, setQuantities] = useState(
    FeatureData.reduce((acc, _, index) => {
      acc[index] = 0;
      return acc;
    }, {})
  );
  const dispatch = useDispatch();

  const addTocart = (id) => {

    const data = FeatureData.find((item, index) => index === id);
    console.log(data.id);
    const ExistingElement=carts.cart.find((cartItem)=>cartItem.id===data.id);
    console.log(carts.cart.id)
    if(!ExistingElement){
      dispatch({ type: "ADD_TO_CART", payload: data });
    }
    
  };
 


  const increment = (index) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [index]: prevQuantities[index] + 1,
    }));
  };

  const decrement = (index) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [index]: prevQuantities[index] > 0 ? prevQuantities[index] - 1 : 0,
    }));
  };

  return (
    <div className="mt-10 mb-10 mx-4 z-0">
      <h1 className="text-3xl font-bold text-center mb-8">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {FeatureData.map((data, id) => (
          <div
            key={id}
            className="relative bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={data.img}
              alt={data.title}
              className="w-full h-36 sm:h-48 object-cover"
            />
            <div className="p-3">
              <h1 className="text-base sm:text-lg font-semibold mb-1">{data.title}</h1>
              <div className="flex justify-between items-center mb-1">
                <div className="text-xs sm:text-sm text-gray-500 line-through">
                  {data.prevPrice}
                </div>
                <div className="text-sm sm:text-lg font-bold text-yellow-500">
                  {data.newPrice}
                </div>
              </div>
              <h6 className="text-xs text-gray-400 mb-2">{data.category}</h6>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <button
                    onClick={() => decrement(id)}
                    className="bg-yellow-400 text-gray-700 rounded-l-md px-2 py-1"
                  >
                    <RemoveIcon style={{ fontSize: 20 }} />
                  </button>
                  <div className="bg-gray-200 text-gray-700 px-4 py-1">
                    {quantities[id]}
                  </div>
                  <button
                    onClick={() => increment(id)}
                    className="bg-yellow-400 text-gray-700 rounded-r-md px-2 py-1"
                  >
                    <AddIcon style={{ fontSize: 20 }} />
                  </button>
                </div>
                <AddShoppingCartIcon
                  aria-label="add to cart"
                  className="text-gray-700 cursor-pointer"
                  style={{ fontSize: 20 }}
                  onClick={() => addTocart(id)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;