import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Helmet } from "react-helmet";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { user, registerUser, setLoading } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    if (!/^(?=.*?[A-Z])/.test(password)) {
      toast("Your password should at least have one Uppercase letter");
      return;
    } else if (!/^(?=.*?[a-z])/.test(password)) {
      toast("Your password should at least have one lowercase letter");
      return;
    } else if (password.length < 6) {
      toast("Your password should have minimum 6 characters");
      return;
    }

    registerUser(email, password)
      .then((result) => {
        toast("User Registration Successful");
        updateProfile(result.user, {
          photoURL: photo,
        });
      })
      .catch(() => {
        toast("User Registration Failed");
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
          Please Register
        </h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold text-pink-600">Name</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered"
            name="name"
            required
          />
        </div>
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
            <span className="label-text font-bold text-pink-600">
              Photo URL
            </span>
          </label>
          <input
            type="text"
            placeholder="Photo URL"
            className="input input-bordered"
            name="photo"
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
          <button className="btn text-pink-600 bg-pink-100">Register</button>
        </div>
        <p className="flex gap-1 justify-center mt-4">
          {"Already have an account? Please"}
          <Link className="text-pink-600 font-bold" to="/register">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
