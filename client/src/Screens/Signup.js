import { useContext, useState } from "react";
import Toast from "react-native-toast-message";
import {
	StyleSheet,
	View,
	Image,
	Pressable,
	Text,
	TextInput,
} from "react-native";
import { Colors } from "../utils/Colors";
import { AuthContext } from "../utils/AuthContext";


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

	const { signup } = useContext(AuthContext);

	const toast = (type = "error", text1 = "") => {
		Toast.show({
			type,
			text1,
		});
	};

	const handleSignup = async () => {
		if (password !== confirmPassword) {
			showError("Passwords don't match!");
			return;
		}

		const error = await signup(email, firstName, lastName, password);
		if (error) toast("error", error);
		else toast("success", "Success!");
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
				placeholderTextColor={Colors.placeholderText}
			/>
			<TextInput
				style={styles.input}
				onChangeText={setFirstName}
				value={firstName}
				placeholder="First Name"
				placeholderTextColor={Colors.placeholderText}
			/>
			<TextInput
				style={styles.input}
				onChangeText={setLastName}
				value={lastName}
				placeholder="Last Name"
				placeholderTextColor={Colors.placeholderText}
			/>
			<TextInput
				secureTextEntry
				style={styles.input}
				onChangeText={setPassword}
				value={password}
				placeholder="Password"
				placeholderTextColor={Colors.placeholderText}
			/>
			<TextInput
				secureTextEntry
				style={styles.input}
				onChangeText={setConfirmPassword}
				value={confirmPassword}
				placeholder="Confirm Password"
				placeholderTextColor={Colors.placeholderText}
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
		backgroundColor: Colors.brown,
		justifyContent: "center",
		alignItems: "center",
	},
	input: {
		width: 250,
		color: Colors.text,
		fontSize: 18,
		backgroundColor: Colors.gray,
		borderColor: Colors.border,
		borderWidth: 2,
		marginTop: 15,
		padding: 5,
		paddingLeft: 10,
		borderRadius: 5,
	},
	signup: {
		borderColor: Colors.border,
		borderWidth: 2,
		marginTop: 45,
		padding: 5,
		borderRadius: 5,
	},
	login: {
		borderColor: Colors.border,
		borderWidth: 2,
		marginTop: 15,
		padding: 5,
		borderRadius: 5,
	},
	text: {
		fontSize: 24,
		color: Colors.text,
	},
});
