import { Link } from "react-router-dom";

const Register = () => {
    const handleRegister = e => {
        e.preventDefault();
    }
    return (
        <div className="max-w-md mx-auto shadow-md rounded-md py-4 my-8">
            <h1 className="text-4xl font-bold text-center">Register Now!</h1>
            <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-outline">Register</button>
                </div>
                <p className="text-center">Already have an account?<Link className="text-blue ml-2" to={'/login'}>Login</Link></p>
            </form>
        </div>
    );
};

export default Register;