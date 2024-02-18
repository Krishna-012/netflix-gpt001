import { checkValidateData } from "../utils/validate";
import Header from "./Header";
import { useState, useRef } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BACKGROUND_IMG, USER_AVATAR } from "../utils/constants";

const Login = () => {
    const [isSignInForm, setSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const dispatch = useDispatch();

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const toggleSignInForm = () => {
        setSignInForm(!isSignInForm)
    };

    const handleButtonOnClick = () => {
        const message = checkValidateData(email.current.value, password.current.value);
        setErrorMessage(message);
        if(message) return;
        if(!isSignInForm) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: name.current.value, photoURL: USER_AVATAR
                  }).then(() => {
                    const {uid, email, displayName, photoURL} = auth.currentUser;
                    dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}))
                  }).catch((error) => {
                    setErrorMessage(error.message)
                  });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + "-" + errorMessage);
            });
        } else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + "-" + errorMessage);
            });
        }

    }

    return (
        <div>
            <Header/>
            <div className="absolute">
                <img src={BACKGROUND_IMG} alt="backgroundImage"/>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="absolute w-4/12 p-10 my-36 left-0 right-0 mx-auto bg-black text-white bg-opacity-80 rounded-md">
                <h1 className="text-3xl font-bold my-4 roun\">{!isSignInForm ? "Sign Up" : "Sign In"}</h1>
                {!isSignInForm && (<input ref={name} type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-900 rounded-md" />)}
                <input ref={email} type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-900 rounded-md" />
                <input ref={password} type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-900 rounded-md" />
                <p className="py-2 text-red-600 font-bold text-lg">{errorMessage}</p>
                <button className="p-4 my-4 w-full bg-red-700 rounded-md" onClick={handleButtonOnClick}>{!isSignInForm ? "Sign Up" : "Sign In"}</button>
                <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{!isSignInForm ? "Already Have Account? Sign In Now" : "New to Netflix? Sign Up Now"}</p>
            </form>
        </div>
    )
}

export default Login;