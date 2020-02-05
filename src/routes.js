import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Dashboard";
import About from "./pages/About";
import Map from "./pages/Map";
import Menu from "./components/Menu";
import Steps from "./pages/Steps";
import Points from "./pages/Points";
import CodePage from "./pages/Code";

const Routes = createAppContainer(
  createSwitchNavigator({
    Sign: createSwitchNavigator({
      SignIn,
      SignUp
    }),
    App: createDrawerNavigator(
      {
        Map,
        Home,
        About,
        Steps,
        Points,
        CodePage
      },
      {
        contentComponent: Menu
      }
    )
  })
);
export default Routes;
