

const NotFound = () => (
  <div className="flex items-center justify-center h-screen bg-gray-100">
      <img
        className="w-16 h-16 fixed top-8 left-0 rounded-full border-4 border-blue-600 shadow-lg z-50"
        src="/images/images (1).jpeg"
        alt="Logo"
      />
    <div className="text-center">
      <h1 className="text-5xl font-bold text-red-600 mb-4">404</h1>
      <p className="text-xl text-gray-700">Page Not Found</p>
      <a href="/" className="mt-4 text-blue-500 underline">Go Back Home</a>
    </div>
  </div>
);
export default NotFound;
