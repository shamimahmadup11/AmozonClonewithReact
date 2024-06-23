import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const CartComponents = () => {
  const carts = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  const [quantities, setQuantities] = useState(
    carts.reduce((acc, item) => {
      acc[item.id] = 1; // Initializing quantity to 1 for each item
      return acc;
    }, {})
  );

  const increment = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: prevQuantities[id] + 1,
    }));
  };

  const decrement = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: prevQuantities[id] > 1 ? prevQuantities[id] - 1 : 1,
    }));
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-gray-100">
      <div className="w-full max-w-5xl p-4 pt-6 pb-8 bg-white rounded shadow-md flex-grow mt-10 mb-10">
        <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
        {carts.length === 0 ? (
          <p className="text-lg text-gray-600 mb-4">Your cart is empty.</p>
        ) : (
          <ul className="list-none mb-4">
            {carts.map((item, index) => (
              <li key={index} className="flex flex-col md:flex-row items-center py-4 border-b border-gray-200">
                <img src={item.img} alt={item.title} className="w-20 h-20 mr-4 rounded mb-4 md:mb-0" />
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-lg font-bold mb-2">{item.title}</h2>
                  <p className="text-sm text-gray-600 mb-2">{item.reviews}</p>
                  <p className="text-lg font-bold mb-2">
                    <span className="text-sm text-gray-600 line-through mr-2">{item.prevPrice}</span>
                    <span className="text-lg font-bold">{item.newPrice}</span>
                  </p>
                  <div className="flex items-center justify-center md:justify-start">
                    <button
                      onClick={() => decrement(item.id)}
                      className="bg-yellow-400 text-gray-700 rounded-l-md px-2 py-1"
                    >
                      <RemoveIcon style={{ fontSize: 20 }} />
                    </button>
                    <div className="bg-gray-200 text-gray-700 px-4 py-1">
                      {quantities[item.id]}
                    </div>
                    <button
                      onClick={() => increment(item.id)}
                      className="bg-yellow-400 text-gray-700 rounded-r-md px-2 py-1"
                    >
                      <AddIcon style={{ fontSize: 20 }} />
                    </button>
                  </div>
                </div>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4" onClick={() => removeCart(item.id)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
        {carts.length > 0 && (
          <div className="p-4 bg-gray-100 rounded">
            <h2 className="text-lg font-bold mb-2">Total: ${carts.reduce((acc, item) => acc + parseFloat(item.newPrice) * quantities[item.id], 0).toFixed(2)}</h2>
            <Link to='/payment'>
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Order</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartComponents;
