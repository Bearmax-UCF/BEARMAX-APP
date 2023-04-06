import { BaseToast, ErrorToast } from "react-native-toast-message";

export const toastConfig = {
	success: (props) => (
		<BaseToast
			{...props}
			style={{ borderLeftColor: "green" }}
			contentContainerStyle={{
				paddingHorizontal: 15,
			}}
			text1Style={{
				fontSize: 20,
				fontWeight: "normal",
				textAlign: "center",
			}}
		/>
	),
	error: (props) => (
		<ErrorToast
			{...props}
			contentContainerStyle={{
				paddingHorizontal: 15,
			}}
			text1Style={{
				fontSize: 20,
				fontWeight: "normal",
				textAlign: "center",
			}}
		/>
	),
};
