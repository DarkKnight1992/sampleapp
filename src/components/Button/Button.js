import {Platform} from 'react-native';

const Button = Platform.select({
  ios: () => require('./Button.ios'),
  android: () => require('./Button.android'),
})();

export default Button;
