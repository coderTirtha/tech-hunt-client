import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { BiUserCircle } from 'react-icons/bi';
import Swal from "sweetalert2";

const Profile = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const handleSignOut = () => {
        Swal.fire({
            title: 'Are you sure to sign out?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Log Out'
        }).then((result) => {
            if (result.isConfirmed) {
                signOutUser()
                .then(() => {
                    Swal.fire(
                        'Success!',
                        'Your have successfully logged out!',
                        'success'
                    );
                })
            }
        })
    }
    return (
        <div className="max-w-md mx-auto shadow-md rounded-md p-4">
            <div className="flex justify-center">
                {
                    user?.photoURL ?
                        <img src={user?.photoURL} alt="" /> :
                        <BiUserCircle className="text-7xl" />
                }
            </div>
            <h1 className="text-2xl font-semibold text-center">{user?.displayName ? user?.displayName : "Anonymous"}</h1>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="text" name="email" value={user?.email} className="input input-bordered text-gray-500" readOnly />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">UID</span>
                </label>
                <input type="text" name="email" value={user?.uid} className="input input-bordered text-gray-500" readOnly />
            </div>
            <div className="flex justify-end">
                <button onClick={handleSignOut} className="mt-4 btn btn-outline btn-error">Sign Out</button>
            </div>
        </div>
    );
};

export default Profile;