import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Helmet } from "react-helmet";

const Login = () => {
  const { user, logInUser, googleUser, githubUser, setLoading } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    logInUser(email, password)
      .then(() => {
        toast("User Login Successful");

        // Navigate after login
        navigate(location.state ? location.state : "/");
      })
      .catch(() => {
        toast("User Login Failed");
        setLoading(false);
      });

    form.reset();
  };

  const handleGithubUser = () => {
    githubUser()
      .then(() => {
        toast("Login with Github account successful");

        // Navigate after login
        navigate(location.state ? location.state : "/");
      })
      .catch(() => toast("User Login Failed"));
  };

  const handleGoogleUser = () => {
    googleUser()
      .then(() => {
        toast("Login with Google account successful");

        // Navigate after login
        navigate(location.state ? location.state : "/");
      })
      .catch(() => {
        user && toast("User Login Failed");
      });
  };

  return (
    <div className="hero py-4 md:py-4 lg:py-0 lg:min-h-screen bg-pink-50">
      <Helmet>
        <title>Fabric Fusion | Login</title>
      </Helmet>
      <ToastContainer></ToastContainer>
      <form onSubmit={handleSubmit}>
        <h2 className="text-4xl font-bold animate__animated animate__bounce text-pink-600 text-center">
          Please Login
        </h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold text-pink-600">Email</span>
          </label>
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered"
            name="email"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold text-pink-600">Password</span>
          </label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn text-pink-600 bg-pink-100">Login</button>
        </div>
        <button
          onClick={handleGoogleUser}
          className="btn w-full mt-4 text-pink-600 bg-pink-100"
        >
          <FaGoogle /> Login with Google
        </button>
        <button
          className="btn w-full mt-4 text-pink-600 bg-pink-100"
          onClick={handleGithubUser}
        >
          <FaGithub /> Login with GitHub
        </button>
        <p className="flex gap-1 justify-center mt-4">
          {"Don't have an account? Please"}
          <Link className="text-pink-600 font-bold" to="/register">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
