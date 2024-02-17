import Header from "./Header";
import { useState } from "react";

const Login = () => {
    const [isSignInForm, setSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setSignInForm(!isSignInForm)
    }

    return (
        <div>
            <Header/>
            <div className="absolute">
                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
                    alt="backgroundImage"
                />
            </div>
            <form className="absolute w-4/12 p-12 my-36 left-0 right-0 mx-auto bg-black text-white bg-opacity-80 rounded-md">
                <h1 className="text-3xl font-bold my-4 roun\">{!isSignInForm ? "Sign Up" : "Sign In"}</h1>
                {!isSignInForm && (<input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-900 rounded-md" />)}
                <input type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-900 rounded-md" />
                <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-900 rounded-md" />
                <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{!isSignInForm ? "Already Have Account? Sign In Now" : "New to Netflix? Sign Up Now"}</p>
                <button className="p-4 my-6 w-full bg-red-700 rounded-md">{!isSignInForm ? "Sign Up" : "Sign In"}</button>
            </form>
        </div>
    )
}

export default Login;