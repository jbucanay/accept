import { Navigation } from "react-native-navigation";
import Signin from "./screens/signin/Signin";
import Form from "./screens/signin/Form";

export function register() {
  Navigation.registerComponent("Signin", () => Signin);
  Navigation.registerComponent("Form", () => Form);
}
