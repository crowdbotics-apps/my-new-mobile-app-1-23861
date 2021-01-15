import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion

import CbSplashScreen1193431Navigator from '../features/CbSplashScreen1193431/navigator';
import OnboardingSlideScreen2193430Navigator from '../features/OnboardingSlideScreen2193430/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
    CbSplashScreen1193431: { screen: CbSplashScreen1193431Navigator },
    OnboardingSlideScreen2193430: { screen: OnboardingSlideScreen2193430 },
    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: “CbSplashScreen1193431”, // Splash Screen
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
