import { useContext, useState } from "react";
import { bookContext } from "./ContextComponent";


const Register = () => {

    const { createRegister } = useContext(bookContext)
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const [emailError, setEmailError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        const confirmPassword = e.target.confirmPassword.value;
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value

        console.log('register', name, email, password, confirmPassword)
        
        if(!/@gmail\.com$/.test(email)){
            setEmailError('Email must end with @gmail.com')
            return
        }


        if (password.length < 6) {
            setError('Password must be 6 character');
            return;
        }

        if (password !== confirmPassword) {
            setError("password didn't match")
            return;
        }


        setSuccess('')
        setEmailError('')
        setError('')
        // register
        createRegister(email, password)
            .then(result => {
                console.log(result.user)
                setSuccess('Register Successfully')
                e.target.reset();
            })
            .catch(error => {
                console.log(error)
            })


    }

    return (
        <div className="hero mt-20 p-10 bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>

                </div>
                <div className="lg:min-w-[800px] w-full mt-10   shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />

                            {
                                emailError && <p className="text-red-600">{emailError }</p>
                            }
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">confirm Password</span>
                            </label>
                            <input type="password" name='confirmPassword' placeholder="confirm password" className="input input-bordered" />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        {
                            success && <p className="text-green-700 font-bold">{success}</p>
                        }
                        {
                            error && <p className="text-red-600">{error}</p>
                        }
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;