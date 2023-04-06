import Toast from "react-native-toast-message";
import { Router } from "./src/Router";
import { AuthProvider } from "./src/utils/AuthContext";
import { toastConfig } from "./src/utils/ToastConfig";

export default function App() {
	return (
		<>
			<AuthProvider>
				<Router />
			</AuthProvider>
			<Toast
				position="bottom"
				bottomOffset={20}
				visibilityTime={3000}
				config={toastConfig}
				autoHide
			/>
		</>
	);
}
