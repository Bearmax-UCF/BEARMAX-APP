import { Router } from "./src/Router";
import { AuthProvider } from "./src/utils/AuthContext";

export default function App() {
	return (
		<AuthProvider>
			<Router />
		</AuthProvider>
	);
}
