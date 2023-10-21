import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";

const Login = () => {
    const { loading, user, signInUser } = useContext(AuthContext);
    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        signInUser(email, password)
            .then(result => {
                const user = result.user;
                Swal.fire({
                    title: 'Success',
                    text: 'User logged in successfully!',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                });
                const formData = e.target;
                formData.reset();
            })
            .catch(error => {
                Swal.fire({
                    title: 'Error',
                    text: error.message,
                    icon: 'error',
                    confirmButtonText: 'Ok'
                });
            })
    }
    return (
        <div>
            {
                loading ?
                    <div className="flex justify-center items-center h-[85vh] gap-3">
                        <p className="text-2xl">Loading</p>
                        <span className="loading loading-spinner loading-lg"></span>
                    </div>
                    :
                    user ?
                        <div className="flex flex-col justify-center items-center h-[85vh] space-y-4">
                            <p className="text-xl">User Already Logged In!</p>
                            <Link to={'/'}><button className="btn">Go back to Home</button></Link>
                        </div>
                        :
                        <div className="max-w-md mx-auto shadow-md rounded-md py-4 my-8">
                            <h1 className="text-4xl font-bold text-center">Login Now!</h1>
                            <form onSubmit={handleLogin} className="card-body">
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
                                    <button className="btn btn-outline">Login</button>
                                </div>
                                <p className="text-center">Don't have an account?<Link className="text-blue ml-2" to={'/register'}>Register</Link></p>
                            </form>
                        </div>
            }
        </div>
    );
};

export default Login;