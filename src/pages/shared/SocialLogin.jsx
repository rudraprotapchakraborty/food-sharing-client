import { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const { signInWithGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state || '/';

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
                navigate(from);
            })
            .catch(error => {
                console.log(error.message);
            });
    };

    return (
        <div className="w-full mt-4">
            <div className="divider">OR</div>
            <button 
                onClick={handleGoogleSignIn} 
                className="btn w-full mx-auto"
            >
                Sign in with Google
            </button>
        </div>
    );
};

export default SocialLogin;
