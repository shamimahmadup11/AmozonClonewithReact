import FeatureData from "../Data/FeatureData";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Body = () => {
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
              className="w-full h-40 object-cover"
            />
            <div className="p-3">
              <h1 className="text-base font-semibold mb-1">{data.title}</h1>
              <div className="flex justify-between items-center mb-1">
                <div className="text-xs text-gray-500 line-through">
                  {data.prevPrice}
                </div>
                <div className="text-sm font-bold text-yellow-500">
                  {data.newPrice}
                </div>
              </div>
              <h6 className="text-xs text-gray-400 mb-2">{data.category}</h6>
              <div className="flex justify-center">
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
