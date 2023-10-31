import React, { createContext, useEffect, useState } from "react";
import Loading from "../Screens/Loading";
import * as SecureStore from "expo-secure-store";

export const AuthContext = createContext({});

/*
User: {
    id: string,
    token: string
}
*/

function validUser(userData) {
	return (
		userData &&
		typeof userData.id === "string" &&
		typeof userData.token === "string"
	);
}

async function saveUser(userData) {
	if (validUser(userData)) {
		await SecureStore.setItemAsync("id", userData.id);
		await SecureStore.setItemAsync("token", userData.token);
	}
}

async function getUser() {
	const id = await SecureStore.getItemAsync("id");
	const token = await SecureStore.getItemAsync("token");
	if (!id || !token) return null;
	return {
		id,
		token,
	};
}

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

			if (res.status === 200) {
				const data = await res.json();
				const userData = { token: data.token, id: data.id };
				setUser(userData);
				await saveUser(userData);
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

			if (res.status === 201) return "";
			else if (data.message) return data.message;
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

			if (res.status === 200) {
				setUser(null);
				await saveUser({ id: "", token: "" });
				return "";
			}
		} catch (err) {
			console.error(err);
		}
		return "Logout failed!";
	};

	const tokenIsValid = async (testToken) => {
		if (!testToken) return false;

		try {
			const res = await fetch(
				`https://carewithbearmax.com/api/users/me`,
				{
					method: "GET",
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json",
						Authorization: "Bearer " + testToken,
					},
				}
			);
			console.log("Token check returned status " + res.status);
			return res.status === 200;
		} catch (err) {
			console.error(err);
		}
		return false;
	};

	useEffect(() => {
		async function test() {
			const userData = await getUser();
			console.log("Retrieved: ", userData);

			if (userData) {
				const tokenStillValid = await tokenIsValid(userData.token);
				if (tokenStillValid) setUser(userData);
			}

			setLoading(false);
		}
		test();
	}, []);

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
