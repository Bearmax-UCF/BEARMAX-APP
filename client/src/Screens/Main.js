import { StyleSheet, View, Image, Pressable, Text } from "react-native";

export default function Main({ navigation }) {
	return (
		<View style={styles.container}>
			<Image
				style={{ width: 150, height: 150 }}
				source={require("../../assets/face.png")}
			/>
			<Pressable
				style={styles.button}
				onPress={() => navigation.navigate("Login")}
			>
				<Text style={styles.text}>Returning Friend</Text>
			</Pressable>
			<Pressable
				style={styles.button}
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
		backgroundColor: "#856A5d",
		justifyContent: "center",
		alignItems: "center",
	},
	button: {
		backgroundColor: "#6C6F7D",
		borderColor: "#000000",
		borderWidth: 2,
		marginTop: 60,
		padding: 5,
		borderRadius: 10,
	},
	text: {
		color: "#000000",
		fontSize: 24,
	},
});
