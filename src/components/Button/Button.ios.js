import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import buttonStyles from './buttonStyles';

const Button = ({
  onClick,
  children,
  activeOpacity = 0.8,
  style,
  innerStyles,
}) => {
  const onClickHandler = () => setTimeout(() => onClick(), 0);

  return (
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
