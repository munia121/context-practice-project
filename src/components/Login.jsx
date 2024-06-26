import { useContext } from "react";
import { bookContext } from "./ContextComponent";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const {loginForm, googleLogin,setUser} = useContext(bookContext)
    const navigate = useNavigate()

    const handleLoginSubmit = (e) => {
        e.preventDefault()
       
        const email = e.target.email.value;
        const password = e.target.password.value

        console.log('register', email, password)

        // login
        loginForm(email, password)
        .then(result=>{
            console.log(result.user)
            e.target.reset()
            navigate('/')
        })
        .catch(error =>{
            console.log(error)
        })
    }


    const handleGoogle = () =>{
        googleLogin()
        .then(result=>setUser(result.user))
        .then(error=>console.log(error))
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLoginSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p onClick={handleGoogle} className="text-sky-600 underline">Google</p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;