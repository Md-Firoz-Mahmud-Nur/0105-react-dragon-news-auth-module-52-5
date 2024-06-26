import { Link,  useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  console.log("location in the login page", location);
  const navigate =useNavigate()

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
    signIn(email, password)
      .then(
        (result) => console.log(result.user),
        navigate(location?.state ? location.state : "/"),
      )
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <Navbar></Navbar>
      <form
        onSubmit={handleLogin}
        className="card-body mx-auto md:w-3/4 lg:w-1/2"
      >
        <h2 className="text-center text-3xl">Please Login</h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <a href="#" className="link-hover link label-text-alt">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className="text-center">
        Do not have an account? Please{" "}
        <Link to="/register" className="btn-link">
          register
        </Link>
      </p>
    </div>
  );
};

export default Login;
