import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
    const {createUser} = useContext(AuthContext);
    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');
        createUser(email, password)
        .then(result => {
            const user = result.user;
            Swal.fire({
                title: "Success",
                text: "User profile created successfully!",
                icon: 'success',
                confirmButtonText: 'Ok'
            });
            const formData = e.target;
            formData.reset();
        })
        .catch(error => {
            Swal.fire({
                title: "Error",
                text: error.message,
                icon: 'error',
                confirmButtonText: 'Ok'
            });
        })
    }
    return (
        <div className="max-w-md mx-auto shadow-md rounded-md py-4 my-8">
            <h1 className="text-4xl font-bold text-center">Register Now!</h1>
            <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                </div>
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