import { Provider } from "react-redux";
import { store } from "./src/Redux/store/Store";
import AppNavigator from "./src/Navigator/AppNavigator";

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
