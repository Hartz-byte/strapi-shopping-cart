import { Provider } from "react-redux";
import { store } from "./src/Redux/store/Store";
import AppNavigator from "./src/Navigator/AppNavigator";
import AuthProvider from "./src/AuthProvider/AuthProvider";

export default function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <AppNavigator />
      </AuthProvider>
    </Provider>
  );
}
