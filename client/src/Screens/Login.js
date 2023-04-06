import { useContext, useState } from "react";
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
import Toast from "react-native-toast-message";

export default function Login({ navigation }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [buttonColors, setButtonColors] = useState({
		login: Colors.buttonLight,
		signup: Colors.buttonDark,
	});

	const { login } = useContext(AuthContext);

	const toast = (type = "error", text1 = "") => {
		Toast.show({
			type,
			text1,
		});
	};

	const handleLogin = async () => {
		const error = await login(email, password);
		if (error) toast("error", error);
		else toast("success", "Successful Login!");
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
				secureTextEntry
				style={styles.input}
				onChangeText={setPassword}
				value={password}
				placeholder="Password"
				placeholderTextColor={Colors.placeholderText}
			/>

			<Pressable
				style={{ ...styles.login, backgroundColor: buttonColors.login }}
				onPressIn={() =>
					setButtonColors({
						...buttonColors,
						login: Colors.buttonLightActive,
					})
				}
				onPressOut={() =>
					setButtonColors({
						...buttonColors,
						login: Colors.buttonLight,
					})
				}
				onPress={handleLogin}
			>
				<Text style={styles.text}>Login</Text>
			</Pressable>
			<Pressable
				style={{
					...styles.signup,
					backgroundColor: buttonColors.signup,
				}}
				onPressIn={() =>
					setButtonColors({
						...buttonColors,
						signup: Colors.buttonDarkActive,
					})
				}
				onPressOut={() =>
					setButtonColors({
						...buttonColors,
						signup: Colors.buttonDark,
					})
				}
				onPress={() => navigation.navigate("Signup")}
			>
				<Text style={styles.text}>New Friend</Text>
			</Pressable>
		</View>
	);
}

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
	login: {
		borderColor: Colors.border,
		borderWidth: 2,
		marginTop: 60,
		padding: 5,
		borderRadius: 5,
	},
	signup: {
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
