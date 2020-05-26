/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';

const Col = ({cols, spacing, ...rest}) => {
  const flexBasis = `${(100 - 2 * spacing) / cols}%`;
  const maxWidth = flexBasis;
  const margin = spacing;
  return (
    <View style={{...styles.col, flexBasis, maxWidth, margin}} {...rest} />
  );
};

const styles = StyleSheet.create({
  col: {
    flexGrow: 1,
    flexShrink: 1,
  },
});

export default Col;
