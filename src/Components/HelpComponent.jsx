/* eslint-disable react/no-unescaped-entities */

const HelpComponent = () => {
  return (
    <div className="max-w-md mx-auto p-4 md:p-6 lg:p-8">
      <h2 className="text-2xl font-bold mb-4">Help Center</h2>
      <p className="text-lg mb-6">Welcome to our help center! Here, you'll find answers to frequently asked questions, guides to get you started with our platform, and ways to get in touch with us.</p>

      <h3 className="text-xl font-bold mb-2">Contact Us</h3>
      <p className="text-lg mb-4">Have a question or concern? Reach out to us at:</p>
      <ul className="list-none mb-6">
        <li className="mb-2">
          <span className="text-gray-600">Email:</span>
          <a href="mailto:support@example.com" className="text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out">support@example.com</a>
        </li>
        <li className="mb-2">
          <span className="text-gray-600">Toll-free Number:</span>
          <a href="tel:+1-800-123-4567" className="text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out">+1-800-123-4567</a>
        </li>
      </ul>

      <h3 className="text-xl font-bold mb-2">Getting Started</h3>
      <p className="text-lg mb-4">New to our platform? Follow these steps to get started:</p>
      <ol className="list-decimal mb-6">
        <li className="mb-2">Create an account by clicking on the "Sign Up" button.</li>
        <li className="mb-2">Verify your email address by clicking on the link sent to your inbox.</li>
        <li className="mb-2">Log in to your account and start exploring our features.</li>
      </ol>

      <h3 className="text-xl font-bold mb-2">FAQs</h3>
      <p className="text-lg mb-4">Frequently asked questions:</p>
      <ul className="list-none mb-6">
        <li className="mb-2">
          <a href="#" className="text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out">What is the refund policy?</a>
        </li>
        <li className="mb-2">
          <a href="#" className="text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out">How do I reset my password?</a>
        </li>
        <li className="mb-2">
          <a href="#" className="text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out">What are the system requirements?</a>
        </li>
      </ul>

      <h3 className="text-xl font-bold mb-2">Additional Resources</h3>
      <p className="text-lg mb-4">Need more help? Check out our:</p>
      <ul className="list-none mb-6">
        <li className="mb-2">
          <a href="#" className="text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out">Knowledge Base</a>
        </li>
        <li className="mb-2">
          <a href="#" className="text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out">Community Forum</a>
        </li>
        <li className="mb-2">
          <a href="#" className="text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out">Video Tutorials</a>
        </li>
      </ul>
    </div>
  );
};

export default HelpComponent;