import Lottie from "lottie-react";
import signupLottieData from "../../assets/signup.json";
import { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import SocialLogin from "../shared/SocialLogin";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
    const { createUser } = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState("");
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state || '/';

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
        <div className="hero bg-base-200 min-h-screen px-4 sm:px-6 lg:px-8">
            <div className="hero-content flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
                {/* Animation */}
                <div className="w-full max-w-sm md:max-w-md lg:max-w-lg">
                    <Lottie animationData={signupLottieData} />
                </div>

                {/* Signup Form */}
                <div className="card bg-base-100 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm p-6 shadow-2xl">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center lg:text-left">
                        Sign Up now!
                    </h1>
                    <form onSubmit={handleSignup} className="card-body p-0">
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input
                                type="url"
                                name="photo"
                                placeholder="Photo URL"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
                        <div className="form-control mt-6">
                            <button className="btn bg-orange-400 text-white w-full">Sign Up</button>
                        </div>
                        <SocialLogin />
                    </form>
                    <p className="mt-4 text-center lg:text-left">
                        Already have an account?{" "}
                        <NavLink to="/login">
                            <span className="text-orange-600 font-semibold">Login.</span>
                        </NavLink>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
