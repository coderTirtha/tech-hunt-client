import { useContext } from "react";
import { Link, useNavigation } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
    const { loading, user, createUser } = useContext(AuthContext);
    const navigation = useNavigation();
    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');
        createUser(email, password)
            .then(result => {
                const user = result.user;
                const newUser = {name: name, uid: user.uid, email: email, items: []}
                fetch('http://localhost:3000/users', {
                    method: 'POST',
                    headers: {
                        'content-type' : 'application/json'
                    },
                    body: JSON.stringify(newUser)
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                })
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
            }
        </div>
    );
};

export default Register;