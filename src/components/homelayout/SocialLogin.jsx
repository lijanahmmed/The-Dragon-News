import React, { useContext } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const SocialLogin = () => {
  const { user, setUser, signInWithGoogle, signInWithGithub, setLoading } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogleSignin = () => {
    signInWithGoogle()
      .then((res) => {
        setLoading(false);
        setUser(res.user);
        navigate(`${location.state ? location.state : "/"}`);
        toast.success("Login successful");
      })
      .catch((e) => {
        console.log(e);
        toast.error(e.message);
      });
  };

  const handleGithubSignin = () => {
    signInWithGithub()
      .then((res) => {
        setLoading(false);
        setUser(res.user);
        navigate(`${location.state ? location.state : "/"}`);
        toast.success("Login successful");
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  return (
    <div>
      {user ? (
        ""
      ) : (
        <div>
          <h2 className="font-bold mb-5">Login With</h2>
          <div className="space-y-3">
            <button
              onClick={handleGoogleSignin}
              className="btn btn-secondary btn-outline w-full"
            >
              <FcGoogle size={24} /> Login with Google
            </button>
            <button
              onClick={handleGithubSignin}
              className="btn btn-outline btn-primary w-full"
            >
              <FaGithub size={24} /> Login with Github
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SocialLogin;
