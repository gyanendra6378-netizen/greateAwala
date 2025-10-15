import { useNavigate } from "react-router-dom";

const Error404 = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fefcfa] px-4">
      <div className="text-center border border-gray-200 rounded-md p-8 max-w-lg shadow-sm bg-white">
        <h1 className="text-6xl font-semibold text-[#b5765b]">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mt-4">Page not found</h2>
        <p className="text-gray-600 mt-3">
          The page you are looking for no longer exists. <br />
          Perhaps you can return back to the site’s homepage and see if you can find what you are
          looking for.
        </p>

        <button
          onClick={() => navigate("/")}
          className="mt-6 bg-[#b5765b] hover:bg-[#a56650] text-white px-6 py-2 rounded-md text-sm tracking-wide uppercase"
        >
          Back Home
        </button>
      </div>
    </div>
  );
};

export default Error404;
