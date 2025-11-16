import { FormEvent, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SEO from "../components/SEO";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Placeholder auth flow – replace with real API call later
    setTimeout(() => {
      localStorage.setItem(
        "myawala_auth",
        JSON.stringify({ email, loggedIn: true })
      );
      setLoading(false);
      navigate("/");
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#fefaf6] pt-24 pb-16 px-4 flex items-center justify-center">
      <SEO
        title="Sign In | Greate Awala"
        description="Sign in to your Greate Awala account to view orders and manage your Amla product purchases."
        keywords="sign in, login, myawala account"
        url="https://myawala.com/signin"
        image="https://myawala.com/bg-1.png"
      />
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2 text-center">
          Sign in to Greate Awala
        </h1>
        <p className="text-sm text-gray-500 mb-8 text-center">
          Access your orders, saved addresses, and faster checkout.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#d89a7e]"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 pr-10 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#d89a7e]"
                placeholder="••••••••"
                minLength={6}
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-gray-500">
            <label className="inline-flex items-center gap-2">
              <input type="checkbox" className="rounded border-gray-300" />
              <span>Keep me signed in</span>
            </label>
            <button
              type="button"
              className="text-[#d89a7e] hover:text-[#c0785c]"
            >
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#d89a7e] hover:bg-[#c0785c] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-2.5 rounded-lg text-sm transition-colors"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <p className="mt-6 text-xs text-gray-500 text-center">
          By signing in, you agree to our{" "}
          <span className="text-[#d89a7e]">Terms</span> and{" "}
          <span className="text-[#d89a7e]">Privacy Policy</span>.
        </p>
      </div>
    </div>
  );
};

export default SignIn;


