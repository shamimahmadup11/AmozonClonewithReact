import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.user);

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md md:w-1/3 m-10">
      <h2 className="text-2xl font-bold mb-4">User Profile</h2>
      {user && (
        <div>
       <img src={user.photoURL} alt="User" className="w-32 h-32 rounded-full" />
          <p>Name: {user.displayName}</p>
          <p>Email: {user.email}</p>
          <p>Mobile Number:7857894334</p>
        </div>
      )}
    </div>
  );
};

export default Profile;
