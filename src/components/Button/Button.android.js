import React from 'react';
import {View, TouchableNativeFeedback, TouchableOpacity} from 'react-native';
import buttonStyles from './buttonStyles';
import {colors} from '../../theme/colors';

const Button = ({
  onClick,
  children,
  native = true,
  noRipple,
  useForeground,
  rippleColor = colors.white,
  activeOpacity = 0.8,
  style,
  innerStyles,
  ...remProps
}) => {
  const onClickHandler = () => setTimeout(() => onClick(), 0);

  return native ? (
    <View style={style}>
      <TouchableNativeFeedback
        onPress={onClickHandler}
        background={
          noRipple
            ? TouchableNativeFeedback.SelectableBackground(rippleColor)
            : TouchableNativeFeedback.Ripple(rippleColor)
        }
        useForeground={
          useForeground && TouchableNativeFeedback.canUseNativeForeground()
        }>
        <View
          style={{
            ...buttonStyles.innerStyle,
            ...innerStyles,
          }}>
          {children}
        </View>
      </TouchableNativeFeedback>
    </View>
  ) : (
    <View style={style}>
      <TouchableOpacity onPress={onClickHandler} activeOpacity={activeOpacity}>
        <View
          style={{
            ...buttonStyles.innerStyle,
            ...innerStyles,
          }}>
          {children}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
