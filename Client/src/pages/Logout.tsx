import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SEO from "../components/SEO";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear auth-related data; keep cart if you want users to log in later and keep items
    localStorage.removeItem("myawala_auth");

    const timer = setTimeout(() => {
      navigate("/");
    }, 1000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#fefaf6] pt-24 pb-16 px-4 flex items-center justify-center">
      <SEO
        title="Logging Out | Greate Awala"
        description="Logging you out of your Greate Awala account."
        keywords="logout, sign out, myawala"
        url="https://myawala.com/logout"
        image="https://myawala.com/bg-1.png"
      />
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Signing you out
        </h1>
        <p className="text-sm text-gray-600">
          You have been logged out of your Greate Awala account. Redirecting to
          the homepage...
        </p>
      </div>
    </div>
  );
};

export default Logout;


