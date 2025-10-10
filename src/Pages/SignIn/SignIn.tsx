import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./SignIn.scss";

// Define the schema for the sign-in form
const schema = yup
  .object({
    email: yup.string().email("Invalid email address").required("Email is required"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(20, "Password must not exceed 20 characters")
      .required("Password is required"),
  })
  .required();

// Define the form data interface
interface FormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      // Replace with your actual authentication logic (e.g., API call)
      // Example: const response = await authService.login(data);
      // if (response.success) {
      console.log("Sign-in data:", data); // Log data for debugging
      login(); // Set isAuthenticated to true
      navigate("/home"); // Navigate to main page
      // }
    } catch (error) {
      console.error("Sign-in failed:", error);
      // Optionally, display error to user
    }
  };

  return (
    <section className="section1-signIn">
      <div className="section1-signIn__wrapper">
        <div className="section1-signIn__textbox">
          <h1 className="section1-signIn__textbox-title">Sign In</h1>
          <p className="section1-signIn__textbox-text">
            Don't have an account?{" "}
            <Link to="/signup" className="section1-signIn__textbox-link">
              Sign Up
            </Link>
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="section1-signIn__form">
          <input
            {...register("email")}
            className="section1-signIn__form-input"
            placeholder="Email Address"
            type="email"
          />
          {errors.email && <p className="section1-signIn__form-error">{errors.email.message}</p>}
          <input
            {...register("password")}
            className="section1-signIn__form-input"
            placeholder="Password"
            type="password"
          />
          {errors.password && (
            <p className="section1-signIn__form-error">{errors.password.message}</p>
          )}
          <button type="submit" className="section1-signIn__form-btn">
            Log in
          </button>
        </form>
      </div>
    </section>
  );
};

export default SignIn;