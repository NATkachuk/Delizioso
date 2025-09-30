import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Link } from "react-router-dom"
import "./SignUp.scss"
const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string(). min(8).max(20).required(),
    confirmPassword: yup.string().oneOf([yup.ref("password")]).required(),
  })
  .required()

interface FormData {
  email: string
  password: string
  confirmPassword: string
}
function SignUp() {
    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const onSubmit = (data: FormData) => console.log(data)

  return (
    <section className="section1-signUp">
      <div className="section1-signUp__wrapper">
        <div className="section1-signUp__textbox">
          <h1 className="section1-signUp__textbox-title">Sign Up</h1>
          <p className="section1-signUp__textbox-text">Don't have an account? <Link to="/signin" className="section1-signUp__textbox-link">Log in</Link></p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="section1-signUp__form">
          <input {...register("email")} className="section1-signUp__form-input" placeholder="Email Address" />
          <p className="error">{errors.email?.message}</p>
          <input {...register("password")} className="section1-signUp__form-input" placeholder="Password" />
          <p className="error">{errors.password?.message}</p>
          <input {...register("confirmPassword")} className="section1-signUp__form-input" placeholder="Confirm Password"/>
          <p className="error">{errors.confirmPassword?.message}</p>
          <button type="submit" className="section1-signUp__form-btn">Log in</button> 
        </form>
      </div>
    </section>
  )
}

export default SignUp