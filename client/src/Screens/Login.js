import { StyleSheet, View, Image } from "react-native";

export default function Login({ navigation }) {
	return (
		<View style={styles.container}>
			<Image
				style={{ width: 150, height: 150 }}
				source={require("../../assets/face.png")}
			/>
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
});
