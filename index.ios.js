import { Navigation } from "react-native-navigation";
import { register } from "./App";

register();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions({
    topBar: {
      visible: false
    }
  });
  Navigation.setRoot({
    root: {
      component: {
        name: "Signin"
      }
    }
  });
});
