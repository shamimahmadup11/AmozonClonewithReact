import { useSelector } from 'react-redux';

const CartComponents = () => {
  const carts = useSelector((state) => state.cart);

  return (
    <div className=" max-w-md mx-auto p-4 pt-6 pb-8 bg-white rounded shadow-md">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      {carts.length === 0 ? (
        <p className="text-lg text-gray-600 mb-4">Your cart is empty.</p>
      ) : (
        <ul className="list-none mb-4">
          {carts.map((item, index) => (
            <li key={index} className="flex items-center py-4 border-b border-gray-200">
              <img src={item.img} alt={item.title} className="w-20 h-20 mr-4 rounded" />
              <div className="flex-1">
                <h2 className="text-lg font-bold mb-2">{item.title}</h2>
                <p className=" text-sm text-gray-600 mb-2">{item.reviews}</p>
                <p className="text-lg font-bold mb-2">
                  <span className="text-sm text-gray-600 line-through mr-2">{item.prevPrice}</span>
                  <span className=" text-lg font-bold">{item.newPrice}</span>
                </p>
              </div>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => console.log(`Remove item ${item.id}`)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      {carts.length > 0 && (
        <div className="p-4 bg-gray-100 rounded">
          <h2 className="text-lg font-bold mb-2">Total: ${carts.reduce((acc, item) => acc + parseFloat(item.newPrice), 0).toFixed(2)}</h2>
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Checkout</button>
        </div>
      )}
    </div>
  );
};

export default CartComponents;