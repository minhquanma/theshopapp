import Colors from '../constants/Colors';

export const DEFAULT_OPTIONS = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
  },
  headerTitleStyle: {
    fontFamily: 'OpenSansBold'
  },
  headerBackTitleStyle: {
    fontFamily: 'OpenSans'
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
};
