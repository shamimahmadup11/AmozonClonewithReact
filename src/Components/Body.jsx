// import { useState } from 'react';
// import FeatureData from "../Data/FeatureData";
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import RemoveIcon from '@mui/icons-material/Remove';
// import AddIcon from '@mui/icons-material/Add';

// const Body = () => {
//   const [quantities, setQuantities] = useState(
//     FeatureData.reduce((acc, _, index) => {
//       acc[index] = 0;
//       return acc;
//     }, {})
//   );

//   const increment = (index) => {
//     setQuantities((prevQuantities) => ({
//       ...prevQuantities,
//       [index]: prevQuantities[index] + 1,
//     }));
//   };

//   const decrement = (index) => {
//     setQuantities((prevQuantities) => ({
//       ...prevQuantities,
//       [index]: prevQuantities[index] > 0 ? prevQuantities[index] - 1 : 0,
//     }));
//   };

//   return (
//     <div className="mt-10 mb-10 mx-4">
//       <h1 className="text-3xl font-bold text-center mb-8">Shoes</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         {FeatureData.map((data, index) => (
//           <div
//             key={index}
//             className="relative bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
//           >
//             <img
//               src={data.img}
//               alt={data.title}
//               className="w-full h-36 sm:h-48 object-cover"
//             />
//             <div className="p-3">
//               <h1 className="text-base sm:text-lg font-semibold mb-1">{data.title}</h1>
//               <div className="flex justify-between items-center mb-1">
//                 <div className="text-xs sm:text-sm text-gray-500 line-through">
//                   {data.prevPrice}
//                 </div>
//                 <div className="text-sm sm:text-lg font-bold text-yellow-500">
//                   {data.newPrice}
//                 </div>
//               </div>
//               <h6 className="text-xs text-gray-400 mb-2">{data.category}</h6>
//               <div className="flex items-center justify-center mt-2">
//                 <button
//                   onClick={() => decrement(index)}
//                   className="bg-gray-300 text-gray-700 rounded-l-md px-2 py-1 hover:bg-gray-400"
//                 >
//                   <RemoveIcon style={{ fontSize: 20 }} />
//                 </button>
//                 <div className="bg-gray-200 text-gray-700 px-4 py-1">
//                   {quantities[index]}
//                 </div>
//                 <button
//                   onClick={() => increment(index)}
//                   className="bg-gray-300 text-gray-700 rounded-r-md px-2 py-1 hover:bg-gray-400"
//                 >
//                   <AddIcon style={{ fontSize: 20 }} />
//                 </button>
//               </div>
//               <div className="flex justify-center mt-2">
//                 <AddShoppingCartIcon
//                   aria-label="add to cart"
//                   className="text-gray-700 cursor-pointer"
//                   style={{ fontSize: 20 }}
//                 />
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Body;


import { useState } from 'react';
import FeatureData from "../Data/FeatureData";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const Body = () => {
  const [quantities, setQuantities] = useState(
    FeatureData.reduce((acc, _, index) => {
      acc[index] = 0;
      return acc;
    }, {})
  );

  const increment = (index) => {
    setQuantities((prevQuantities) => ({
     ...prevQuantities,
      [index]: prevQuantities[index] + 1,
    }));
  };

  const decrement = (index) => {
    setQuantities((prevQuantities) => ({
     ...prevQuantities,
      [index]: prevQuantities[index] > 0? prevQuantities[index] - 1 : 0,
    }));
  };

  return (
    <div className="mt-10 mb-10 mx-4">
      <h1 className="text-3xl font-bold text-center mb-8">Shoes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {FeatureData.map((data, index) => (
          <div
            key={index}
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
                    onClick={() => decrement(index)}
                    className="bg-yellow-400 text-gray-700 rounded-l-md px-2 py-1"
                  >
                    <RemoveIcon style={{ fontSize: 20 }} />
                  </button>
                  <div className="bg-gray-200 text-gray-700 px-4 py-1">
                    {quantities[index]}
                  </div>
                  <button
                    onClick={() => increment(index)}
                    className="bg-yellow-400 text-gray-700 rounded-r-md px-2 py-1"
                  >
                    <AddIcon style={{ fontSize: 20 }} />
                  </button>
                </div>
                
                <AddShoppingCartIcon
                  aria-label="add to cart"
                  className="text-gray-700 cursor-pointer"
                  style={{ fontSize: 20 }}
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
