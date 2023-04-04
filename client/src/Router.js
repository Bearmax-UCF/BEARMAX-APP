import { NavigationContainer } from "@react-navigation/native";
import { useContext } from "react";
import { AuthContext } from "./utils/AuthContext";
import Main from "./Screens/Main";
import Login from "./Screens/Login";
import Signup from "./Screens/Signup";
import Content from "./Screens/Content";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export const Router = () => {
	const { user } = useContext(AuthContext);

	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
					animation: "slide_from_right",
				}}
			>
				{!user ? (
					<>
						<Stack.Screen name="Main" component={Main} />
						<Stack.Screen name="Login" component={Login} />
						<Stack.Screen name="Signup" component={Signup} />
					</>
				) : (
					<Stack.Screen name="Content" component={Content} />
				)}
			</Stack.Navigator>
		</NavigationContainer>
	);
};
