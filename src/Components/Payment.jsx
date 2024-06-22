const Payment = () => {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-8">Payment Method :</h1>
        <div className="flex flex-col md:flex-row justify-center items-center mb-4 gap-10">
          <div className="bg-white shadow-md rounded-md p-6 w-full md:w-1/2 ">
            <h2 className="text-2xl font-bold mb-4">Debit/Credit Card</h2>
            <form>
              <label className="block mb-4">
                <span className="text-gray-700">Card Number</span>
                <input
                  type="text"
                  className="w-full pl-10 text-sm text-gray-700 border border-gray-300 rounded-md py-2 px-4"
                  placeholder="Enter card number"
                />
              </label>
              <label className="block mb-4">
                <span className="text-gray-700">Expiry Date</span>
                <input
                  type="text"
                  className="w-full pl-10 text-sm text-gray-700 border border-gray-300 rounded-md py-2 px-4"
                  placeholder="MM/YY"
                />
              </label>
              <label className="block mb-4">
                <span className="text-gray-700">CVV</span>
                <input
                  type="text"
                  className="w-full pl-10 text-sm text-gray-700 border border-gray-300 rounded-md py-2 px-4"
                  placeholder="Enter CVV"
                />
              </label>
              <button
                className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-md"
                type="submit"
              >
                Pay Now
              </button>
            </form>
          </div>
          <div className="bg-white shadow-md rounded-md p-6 w-full md:w-1/2 ml-4 md:ml-0">
            <h2 className="text-2xl font-bold mb-4">Razorpay</h2>
            <button
              className="bg-green-500 w-56 h-12 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-md"
              type="button"
            >
              Pay with Razorpay
            </button>
          </div>
          <div className="bg-white shadow-md rounded-md p-6 w-full md:w-1/2 ml-4 md:ml-0">
            <h2 className="text-2xl font-bold mb-4">Cash on Delivery</h2>
            <button
              className="bg-green-500 w-44 h-12 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-md"
              type="button"
            >
              Pay on Delivery
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Payment;