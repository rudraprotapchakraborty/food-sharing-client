import Lottie from "lottie-react";
import loginLottieData from "../../assets/login.json";
import AuthContext from "../../context/AuthContext/AuthContext";
import { useContext } from "react";
import SocialLogin from "../shared/SocialLogin";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify"; // Import toast
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS
import { ThemeContext } from "../../context/ThemeContext";

const Login = () => {
    const { signInUser } = useContext(AuthContext);
    const { darkMode } = useContext(ThemeContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state || '/';

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInUser(email, password)
            .then((result) => {
                toast.success("Login successful!");
                navigate(from);
            })
            .catch((error) => {
                if (error.message.includes("user-not-found")) {
                    toast.error("No user found with this email.");
                } else if (error.message.includes("wrong-password")) {
                    toast.error("Incorrect password. Please try again.");
                } else {
                    toast.error("Login failed. Please check your credentials.");
                }
            });
    };

    return (
        <div className={`hero ${darkMode ? 'bg-gray-900' : 'bg-base-200'} min-h-screen px-4 sm:px-6 lg:px-8`}>
            <div className="hero-content flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
                {/* Lottie Animation */}
                <div className="w-full max-w-sm md:max-w-md lg:max-w-lg">
                    <Lottie animationData={loginLottieData}></Lottie>
                </div>

                {/* Login Form */}
                <div className={`card ${darkMode ? 'bg-gray-800' : 'bg-base-100'} w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm p-6 shadow-2xl`}>
                    <h1 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center lg:text-left ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        Login now!
                    </h1>
                    <form onSubmit={handleLogin} className="card-body p-0">
                        <div className="form-control mb-4">
                            <label className={`label ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                <span className={`label-text ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                                    Email
                                </span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                className={`input input-bordered ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'}`}
                                required
                            />
                        </div>
                        <div className="form-control mb-6">
                            <label className={`label ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                <span className={`label-text ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                                    Password
                                </span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                className={`input input-bordered ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'}`}
                                required
                            />
                        </div>
                        <div className="form-control">
                            <button className={`btn border-none ${darkMode ? 'bg-orange-600' : 'bg-orange-400'} text-white w-full`}>
                                Login
                            </button>
                        </div>
                        <SocialLogin />
                    </form>
                    <p className={`mt-4 text-center lg:text-left ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        Don’t have an account?{" "}
                        <NavLink to="/signup">
                            <span className={`text-orange-600 font-semibold`}>Sign Up.</span>
                        </NavLink>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
