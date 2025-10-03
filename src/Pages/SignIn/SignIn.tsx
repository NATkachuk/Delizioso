import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Link } from "react-router-dom"
import "./SignIn.scss"
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

function SignIn() {
   const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: yupResolver(schema),
    })
    const onSubmit = (data: FormData) => console.log(data)
  return (
   <section className="section1-signIn">
      <div className="section1-signIn__wrapper">
        <div className="section1-signIn__textbox">
          <h1 className="section1-signIn__textbox-title">Sign In</h1>
          <p className="section1-signIn__textbox-text">Don't have an account? <Link to="/signup" className="section1-signUp__textbox-link">Sign Up</Link></p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="section1-signIn__form">
          <input {...register("email")} className="section1-signIn__form-input" placeholder="Email Address" />
          <p className="section1-signIn__form-error">{errors.email?.message}</p>
          <input {...register("password")} className="section1-signIn__form-input" placeholder="Password" />
          <p className="section1-signIn__form-error">{errors.password?.message}</p>
          <button type="submit" className="section1-signIn__form-btn">Log in</button> 
        </form>
      </div>
    </section>
  )
}

export default SignIn