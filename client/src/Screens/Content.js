import { useState, useEffect, useContext, useReducer } from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	Pressable,
	Vibration,
	ScrollView,
} from "react-native";
import Toast from "react-native-toast-message";
import Animated, { FadeInLeft } from "react-native-reanimated";
import { io } from "socket.io-client";

import { Colors } from "../utils/Colors";
import { AuthContext } from "../utils/AuthContext";

export default function Content({ navigation }) {
	const [gameActive, setGameActive] = useState(false);
	const [socket, setSocket] = useState(null);
	const [msgHistory, updateMsgHistory] = useReducer((oldHistory, data) => {
		Vibration.vibrate(1001);
		return [toMsgObj(data.newMsg), ...oldHistory];
	}, []);

	const [buttonColors, setButtonColors] = useState({
		calibrate: Colors.buttonLight,
		play: Colors.buttonDark,
		help: Colors.buttonDark,
		engage: Colors.buttonLight,
	});

	const { logout, user } = useContext(AuthContext);

	function toMsgObj(msg) {
		return { msg, key: new Date().getTime() };
	}

	const toast = (type = "error", text1 = "") => {
		Toast.show({
			type,
			text1,
		});
	};

	useEffect(() => {
		updateMsgHistory({ newMsg: "Hello from Bearmax!" });

		const URL = "https://carewithbearmax.com";

		console.log("Attempting socket connection to " + URL);
		const newSocket = io(URL, {
			query: {
				userID: user.id,
			},
		});

		newSocket.on("connect", () => {
			console.log("Successfully connected to the server.");
			setSocket(newSocket);

			newSocket.on("speak", (newMsg) => {
				console.log("Received speech: " + newMsg);
				updateMsgHistory({ newMsg });
			});
		});

		newSocket.on("disconnect", () => console.log("Socket disconnected"));

		return () => {
			console.log("Disconnecting socket");
			newSocket.close();
		};
	}, [navigation]);

	const emotionGame = () => {
		if (!socket) return;
		if (gameActive) socket.emit("emotionGame", "stop", user.id);
		else socket.emit("emotionGame", "start", user.id);
		setGameActive(!gameActive);
	};

	const calibrate = () => {
		if (!socket) return;
		updateMsgHistory({ newMsg: "Recalibrating!" });
		socket.emit("recalibrate");
	};

	const handleLogout = async () => {
		const error = await logout();
		if (error) toast("error", error);
		else toast("success", "Logged Out!");
	};

	return (
		<View style={styles.container}>
			<Image
				style={styles.logo}
				source={require("../../assets/face.png")}
			/>

			<View style={styles.container2}>
				<Pressable
					style={{
						...styles.button,
						backgroundColor: buttonColors.calibrate,
					}}
					onPress={calibrate}
					onPressIn={() =>
						setButtonColors({
							...buttonColors,
							calibrate: Colors.buttonLightActive,
						})
					}
					onPressOut={() =>
						setButtonColors({
							...buttonColors,
							calibrate: Colors.buttonLight,
						})
					}
				>
					<Text style={styles.text}>Calibrate</Text>
				</Pressable>

				<Pressable
					style={{
						...styles.button,
						backgroundColor: buttonColors.play,
					}}
					onPress={emotionGame}
					onPressIn={() =>
						setButtonColors({
							...buttonColors,
							play: Colors.buttonDarkActive,
						})
					}
					onPressOut={() =>
						setButtonColors({
							...buttonColors,
							play: Colors.buttonDark,
						})
					}
				>
					<Text style={styles.text}>
						{gameActive ? "Stop Game" : "Play!"}
					</Text>
				</Pressable>
			</View>

			<View style={styles.container2}>
				<Pressable
					style={{
						...styles.button,
						backgroundColor: buttonColors.help,
					}}
					onPressIn={() =>
						setButtonColors({
							...buttonColors,
							help: Colors.buttonDarkActive,
						})
					}
					onPressOut={() =>
						setButtonColors({
							...buttonColors,
							help: Colors.buttonDark,
						})
					}
					onPress={() => {
						// TODO
						console.log("Not yet implemented!");
					}}
				>
					<Text style={styles.text}>Engage</Text>
				</Pressable>
				<Pressable
					style={{
						...styles.button,
						backgroundColor: buttonColors.engage,
					}}
					onPressIn={() =>
						setButtonColors({
							...buttonColors,
							engage: Colors.buttonLightActive,
						})
					}
					onPressOut={() =>
						setButtonColors({
							...buttonColors,
							engage: Colors.buttonLight,
						})
					}
					onPress={handleLogout}
				>
					<Text style={styles.text}>Log Out</Text>
				</Pressable>
			</View>

			<View style={{ height: 250, width: "90%" }}>
				<ScrollView
					style={styles.msgHistory}
					contentContainerStyle={{
						flexGrow: 1,
						paddingVertical: 5,
					}}
				>
					{msgHistory.map((msgObj, i) => {
						return (
							<Animated.View
								key={msgObj.key}
								entering={FadeInLeft.duration(500)}
							>
								<Text
									style={{
										...styles.msg,
										color:
											i === 0
												? Colors.text
												: Colors.oldText,
									}}
									key={msgObj.key}
								>
									{msgObj.msg}
								</Text>
							</Animated.View>
						);
					})}
				</ScrollView>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: Colors.brown,
		height: "100%",
		width: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "column",
	},
	container2: {
		width: "90%",
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
	},
	logo: {
		width: 200,
		height: 200,
	},
	button: {
		width: "48%",
		height: 90,
		borderRadius: 4,
		elevation: 3,
		marginHorizontal: 2.5,
		marginBottom: 5,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		fontSize: 20,
		lineHeight: 21,
		fontWeight: "bold",
		letterSpacing: 0.25,
		textAlign: "center",
		color: Colors.text,
	},
	msgHistory: {
		backgroundColor: Colors.brownAccent,
		width: "100%",
		height: "100%",
		marginTop: 40,
		borderRadius: 4,
	},
	msg: {
		fontSize: 16,
		lineHeight: 21,
		fontWeight: "bold",
		letterSpacing: 0.25,
		marginVertical: 15,
		textAlign: "center",
	},
});
