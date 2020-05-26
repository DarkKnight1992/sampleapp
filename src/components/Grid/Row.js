/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';

const Row = ({spacing, ...rest}) => {
  const margin = -spacing;
  return <View style={{...styles.row, margin}} {...rest} />;
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default Row;
