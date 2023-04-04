import * as SecureStore from "expo-secure-store";
import React, { createContext, useEffect, useState } from "react";
import Loading from "../Screens/Loading";

export const AuthContext = createContext({});

/*
User: {
    id: string,
    token: string
}
*/

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const loginFunction = async (username, password) => {
		try {
			// TODO: Get user through login
			setUser(user);
		} catch (error) {
			console.error("Login failed:", error);
		}
	};

	const signupFunction = async (username, firstName, lastName, password) => {
		// TODO: Sign up user and setUser/setLoading
	};

	const logoutFunction = async () => {
		try {
			setUser(null);
			await auth().signOut();
		} catch (error) {
			console.error("Signout failed:", error);
		}
	};

	useEffect(() => {
		// TODO: Try to grab user from SecureStore
		setLoading(false);
	});

	if (loading) return <Loading />;

	return (
		<AuthContext.Provider
			value={{
				user,
				login: loginFunction,
				logout: logoutFunction,
				signup: signupFunction,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
