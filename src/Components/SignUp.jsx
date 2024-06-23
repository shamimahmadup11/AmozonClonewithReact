/* eslint-disable react/no-unescaped-entities */

import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
  } from "firebase/auth";
  import app from "../Authentication/Auth";
  import { useEffect } from "react";
  import { useDispatch } from "react-redux";
  import { setUser, clearUser } from "../Redux/Store"; // Import both actions
  
  const SignUp = () => {
    const dispatch = useDispatch();
  
    useEffect(() => {
      const auth = getAuth(app);
      if (auth.currentUser) {
        console.log(auth.currentUser);
        dispatch(
          setUser({
            displayName: auth.currentUser.displayName,
            email: auth.currentUser.email,
            photoURL: auth.currentUser.photoURL,
          })
        );
      }
    }, [dispatch]);
  
    const LoginWithGoogle = async () => {
      try {
        const auth = getAuth(app);
        const googleProvider = new GoogleAuthProvider();
        const response = await signInWithPopup(auth, googleProvider);
  
        // Dispatch action to store user data in Redux state
        dispatch(
          setUser({
            displayName: response.user.displayName,
            email: response.user.email,
            photoURL: response.user.photoURL,
          })
        );
  
        console.log(response);
      } catch (e) {
        console.log(e);
      }
    };
  
    const Signout = async () => {
      try {
        const auth = getAuth(app);
        await signOut(auth);
        dispatch(clearUser());
        console.log("User signed out");
      } catch (e) {
        console.log(e);
      }
    };
  
    const LogUserData = async () => {
      const auth = getAuth(app);
      if (auth.currentUser) {
        console.log("User Data: ", {
          displayName: auth.currentUser.displayName,
          email: auth.currentUser.email,
          photoURL: auth.currentUser.photoURL,
        });
      }
    };
  
    return (
      <div className="flex justify-center items-center min-h-screen px-4 py-10 sm:py-20">
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md w-full max-w-sm sm:max-w-md lg:max-w-lg">
          <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
            Sign In
          </button>
          <div className="mt-4 text-center">Or continue with Google:</div>
          <button
            className="mt-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            onClick={LoginWithGoogle}
          >
            Sign in with Google
          </button>
          <p className="mt-4 text-sm text-center">
            Don't have an account?{" "}
            <a className="text-blue-500 hover:text-blue-700" href="#">
              Sign Up
            </a>
          </p>
          <div className="mt-4 text-center">
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              onClick={Signout}
            >
              Sign Out
            </button>
          </div>
          <div className="mt-4 text-center">
            <button
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              onClick={LogUserData}
            >
              Log User Data
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default SignUp;
  