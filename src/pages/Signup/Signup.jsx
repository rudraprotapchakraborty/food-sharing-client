import Lottie from "lottie-react";
import signupLottieData from "../../assets/signup.json";
import { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import SocialLogin from "../shared/SocialLogin";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeContext } from "../../context/ThemeContext";

const Signup = () => {
    const { createUser } = useContext(AuthContext);
    const { darkMode } = useContext(ThemeContext);
    const [errorMessage, setErrorMessage] = useState("");
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state || "/";

    const handleSignup = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photoURL = e.target.photo.value;
        const password = e.target.password.value;

        // Password validation
        if (!/[A-Z]/.test(password)) {
            setErrorMessage("Password must contain at least one uppercase letter.");
            toast.error("Password must contain at least one uppercase letter.");
            return;
        }
        if (!/[a-z]/.test(password)) {
            setErrorMessage("Password must contain at least one lowercase letter.");
            toast.error("Password must contain at least one lowercase letter.");
            return;
        }
        if (password.length < 6) {
            setErrorMessage("Password must be at least 6 characters long.");
            toast.error("Password must be at least 6 characters long.");
            return;
        }

        setErrorMessage(""); // Clear error if all validations pass

        try {
            const result = await createUser(email, password, name, photoURL);
            toast.success("Sign up successful!");
            navigate(from);
        } catch (error) {
            toast.error("Sign up failed: " + error.message);
        }
    };

    return (
        <div className={`hero min-h-screen px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gray-900' : 'bg-base-200'}`}>
            <div className="hero-content flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
                {/* Animation */}
                <div className="w-full max-w-sm md:max-w-md lg:max-w-lg">
                    <Lottie animationData={signupLottieData} />
                </div>

                {/* Signup Form */}
                <div className={`card w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm p-6 shadow-2xl ${darkMode ? 'bg-gray-800' : 'bg-base-100'}`}>
                    <h1 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center lg:text-left ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                        Sign Up now!
                    </h1>
                    <form onSubmit={handleSignup} className="card-body p-0">
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className={`label-text ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                                    Name
                                </span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                className={`input input-bordered ${darkMode ? 'bg-gray-700 text-white placeholder-white' : 'placeholder-gray-500'}`}
                                required
                            />
                        </div>
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className={`label-text ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                                    Email
                                </span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className={`input input-bordered ${darkMode ? 'bg-gray-700 text-white placeholder-white' : 'placeholder-gray-500'}`}
                                required
                            />
                        </div>
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className={`label-text ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                                    Photo URL
                                </span>
                            </label>
                            <input
                                type="url"
                                name="photo"
                                placeholder="Photo URL"
                                className={`input input-bordered ${darkMode ? 'bg-gray-700 text-white placeholder-white' : 'placeholder-gray-500'}`}
                                required
                            />
                        </div>
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className={`label-text ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                                    Password
                                </span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                className={`input input-bordered ${darkMode ? 'bg-gray-700 text-white placeholder-white' : 'placeholder-gray-500'}`}
                                required
                            />
                        </div>
                        {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
                        <div className="form-control mt-6">
                            <button className="btn border-none w-full" style={{ backgroundColor: darkMode ? '#F97316' : '#FB923C', color: 'white' }}>
                                Sign Up
                            </button>
                        </div>
                        <SocialLogin />
                    </form>
                    <p className={`mt-4 text-center lg:text-left ${darkMode ? 'text-white' : 'text-gray-700'}`}>
                        Already have an account?{" "}
                        <NavLink to="/login">
                            <span className="font-semibold" style={{ color: darkMode ? '#F97316' : '#FB923C' }}>
                                Login.
                            </span>
                        </NavLink>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;