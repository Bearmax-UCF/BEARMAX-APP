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

	const loginFunction = async (email, password) => {
		try {
			const res = await fetch(
				`https://carewithbearmax.com/api/auth/login`,
				{
					method: "POST",
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ email, password }),
				}
			);
			console.log(res.status);
			const data = await res.json();
			console.log(data);

			if (res.status === 200) {
				setUser({ token: data.token, id: data.id });
				return "";
			}
		} catch (err) {
			console.error(err);
		}
		return "Invalid email or password!";
	};

	const signupFunction = async (email, firstName, lastName, password) => {
		try {
			const res = await fetch(
				`https://carewithbearmax.com/api/auth/register`,
				{
					method: "POST",
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						email,
						firstName,
						lastName,
						password,
					}),
				}
			);
			console.log(res.status);
			const data = await res.json();
			console.log(data);

			if (res.status === 201) {
				// TODO: Chain login
				return "";
			} else if (data.message) {
				return data.message;
			}
		} catch (err) {
			console.error(err);
		}
		return "Signup failed!";
	};

	const logoutFunction = async () => {
		if (!user) return "User not logged in!";

		try {
			const res = await fetch(
				`https://carewithbearmax.com/api/auth/logout`,
				{
					method: "GET",
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json",
						Authorization: "Bearer " + user.token,
					},
				}
			);
			console.log(res.status);
			const data = await res.json();
			console.log(data);

			if (res.status === 200) {
				setUser(null);
				return "";
			}
		} catch (err) {
			console.error(err);
		}
		return "Logout failed!";
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
