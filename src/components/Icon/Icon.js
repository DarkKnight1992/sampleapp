import React from 'react';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import IconConfig from './selection.json';
import {colors} from '../../theme/colors';

const CustomIcon = createIconSetFromIcoMoon(
  IconConfig,
  'icomoon',
  'icomoon.ttf',
);

const Icon = ({style = {}, name = '', size = 80, color = colors.black}) => (
  <CustomIcon style={style} name={name} size={size} color={color} />
);
export default Icon;
