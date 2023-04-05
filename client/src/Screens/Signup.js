import { useState } from "react";
import {
	StyleSheet,
	View,
	Image,
	Pressable,
	Text,
	TextInput,
} from "react-native";
import { Colors } from "../utils/Colors";

const PLACEHOLDER_COLOR = "#a6bdb3";

export default function Signup({ navigation }) {
	const [email, setEmail] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [buttonColors, setButtonColors] = useState({
		signup: Colors.buttonLight,
		login: Colors.buttonDark,
	});

	const handleSignup = () => {
		if (password !== confirmPassword) {
			// TODO: Replace with error text
			console.error("Passwords don't match!");
			return;
		}

		const URL_BASE = "https://carewithbearmax.com";

		fetch(`${URL_BASE}/api/register`, {
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
		})
			.then((res) => {
				console.log(res);
				return res.json();
			})
			.then((data) => {
				console.log(data);
				// TODO: Set user in AuthContext
			})
			.catch((err) => console.error(err));
	};

	return (
		<View style={styles.container}>
			<Image
				style={{ width: 150, height: 150 }}
				source={require("../../assets/face.png")}
			/>
			<TextInput
				style={styles.input}
				onChangeText={setEmail}
				value={email}
				placeholder="Email"
				placeholderTextColor={PLACEHOLDER_COLOR}
			/>
			<TextInput
				style={styles.input}
				onChangeText={setFirstName}
				value={firstName}
				placeholder="First Name"
				placeholderTextColor={PLACEHOLDER_COLOR}
			/>
			<TextInput
				style={styles.input}
				onChangeText={setLastName}
				value={lastName}
				placeholder="Last Name"
				placeholderTextColor={PLACEHOLDER_COLOR}
			/>
			<TextInput
				secureTextEntry
				style={styles.input}
				onChangeText={setPassword}
				value={password}
				placeholder="Password"
				placeholderTextColor={PLACEHOLDER_COLOR}
			/>
			<TextInput
				secureTextEntry
				style={styles.input}
				onChangeText={setConfirmPassword}
				value={confirmPassword}
				placeholder="Confirm Password"
				placeholderTextColor={PLACEHOLDER_COLOR}
			/>
			<Pressable
				style={{
					...styles.signup,
					backgroundColor: buttonColors.signup,
				}}
				onPressIn={() =>
					setButtonColors({
						...buttonColors,
						signup: Colors.buttonLightActive,
					})
				}
				onPressOut={() =>
					setButtonColors({
						...buttonColors,
						signup: Colors.buttonLight,
					})
				}
				onPress={handleSignup}
			>
				<Text style={styles.text}>Create Account</Text>
			</Pressable>
			<Pressable
				style={{ ...styles.login, backgroundColor: buttonColors.login }}
				onPressIn={() =>
					setButtonColors({
						...buttonColors,
						login: Colors.buttonDarkActive,
					})
				}
				onPressOut={() =>
					setButtonColors({
						...buttonColors,
						login: Colors.buttonDark,
					})
				}
				onPress={() => navigation.navigate("Login")}
			>
				<Text style={styles.text}>Returning Friend</Text>
			</Pressable>
		</View>
	);
}

// light: #58B09C
// dark: #386150
// gray: #6C6F7D

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#856A5d",
		justifyContent: "center",
		alignItems: "center",
	},
	input: {
		width: 250,
		color: "#FFFFFF",
		fontSize: 18,
		backgroundColor: "#6C6F7D",
		borderColor: "#000000",
		borderWidth: 2,
		marginTop: 15,
		padding: 5,
		paddingLeft: 10,
		borderRadius: 5,
	},
	signup: {
		backgroundColor: "#58B09C",
		borderColor: "#000000",
		borderWidth: 2,
		marginTop: 45,
		padding: 5,
		borderRadius: 5,
	},
	login: {
		backgroundColor: "#386150",
		borderColor: "#000000",
		borderWidth: 2,
		marginTop: 15,
		padding: 5,
		borderRadius: 5,
	},
	text: {
		fontSize: 24,
		color: "#FFFFFF",
	},
});
