import { useContext, useState } from "react";
import { bookContext } from "./ContextComponent";


const Register = () => {

    const { createRegister } = useContext(bookContext)
    const [users, setUser] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value

        console.log('register', name, email, password)

        setUser('')
        // register
        createRegister(email, password)
            .then(result => {
                console.log(result.user)
                setUser('success')
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
                <div className="card mt-10 shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        {
                            users && <p className="text-green-700">{users}</p>
                        }
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;