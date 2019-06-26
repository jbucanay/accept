import { Navigation } from "react-native-navigation";
import Signin from "./screens/signin/Signin";

export function register() {
  Navigation.registerComponent("Signin", () => Signin);
}
