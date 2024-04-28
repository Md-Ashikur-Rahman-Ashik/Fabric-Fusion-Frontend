import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <Helmet>
        <title>Fabric Fusion | Error</title>
      </Helmet>
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="max-w-lg p-8 bg-pink-50 rounded-lg shadow-xl text-center">
          <h2 className="text-4xl font-bold text-pink-600 mb-4">Oops!!</h2>
          <p className="text-lg text-gray-700 mb-6">
            We apologize for the inconvenience. We are working
            tirelessly to resolve the issue and get things back on track.
          </p>
          <Link to="/" className="flex justify-center space-x-4">
            <button className="bg-pink-600 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Return to Homepage
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
