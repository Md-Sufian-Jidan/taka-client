import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import auth from "../Firebase/Firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import useAxiosPublic from "../Hooks/useAxiosPublic";


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState(null);
    const axiosPublic = useAxiosPublic()

    // creating user with email and password 
    const createUser = (email, password) => {
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
    // after creating a user by email and password update it's name and photo url
    const updateUserProfile = (name, phone) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            phoneNumber: phone,
        });
    };

    // sign in user with email and password
    const signInUser = (email, password) => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    };

    // login user by google
    const logout = () => {
        setIsLoading(true);
        return signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log(currentUser);
            // get the token and set in the local storage
            if (currentUser) {
                const userEmail = { email: currentUser?.email };
                axiosPublic.post('/jwt', userEmail)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token);
                            setIsLoading(false);
                        }
                    })
            }
            else {
                // console.log('current user ', currentUser);
                localStorage.removeItem('access-token');
                setIsLoading(false);
            }
        });
        return () => {
            return unsubscribe();
        }
    }, [axiosPublic]);

    const userInfo = { isLoading, user, setUser, createUser, updateUserProfile, signInUser, logout };
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};