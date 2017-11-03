import {StackNavigator} from 'react-navigation';
import LandingScreen from '../LandingScreen';
import DrawerNav from './DrawerNav';

export default StackNavigator({
  LandingScreen: {screen: LandingScreen},
  Drawer: {screen: DrawerNav},
});
