/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Icon from './components/Icon';
import {Row, Col} from './components/Grid';
import Button from './components/Button';
import options from './options.json';
import cstyles from './cstyles';
import {colors} from './theme/colors';

function _cloneDeep(obj) {
  return JSON.parse(JSON.stringify(obj));
}

const ListItem = ({icon, text, index, onClick, isActive}) => {
  const handleClick = () => {
    if (onClick) {
      onClick(index);
    }
  };

  return (
    <Button
      innerStyles={{
        ...styles.item,
        ...cstyles(isActive, styles.itemActive),
      }}
      onClick={handleClick}>
      <Icon
        style={{
          ...styles.itemIcon,
          ...cstyles(isActive, styles.itemActiveText),
        }}
        name={icon}
        size={24}
      />
      <Text
        style={{
          ...styles.itemText,
          ...cstyles(isActive, styles.itemActiveText),
        }}>
        {text} {isActive}
      </Text>
    </Button>
  );
};

const App = () => {
  const [walletList, setList] = useState(_cloneDeep(options));

  const toggleButton = (index) => {
    const newList = _cloneDeep(options);
    newList[index].isActive = walletList[index].isActive ? false : true;
    setList(newList);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.header}>
          <Button onClick={() => {}} style={styles.backButton}>
            <Icon name="arrow_back" size={24} color={colors.white} />
          </Button>
          <Text style={styles.headerText}>Wallet</Text>
        </View>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <Row wrap="wrap" spacing={1}>
              {walletList.map((l, i) => (
                <Col key={l.icon} cols={3} spacing={1}>
                  <ListItem
                    icon={l.icon}
                    text={l.text}
                    index={i}
                    isActive={l.isActive}
                    onClick={toggleButton}
                  />
                </Col>
              ))}
            </Row>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    height: '100%',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: colors.white,
  },
  header: {
    backgroundColor: colors.black100,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: colors.white,
    textAlign: 'center',
  },
  item: {
    backgroundColor: colors.lightGrey,
    paddingTop: 1,
    paddingBottom: 10,
    alignItems: 'center',
    textAlign: 'center',
  },
  itemActive: {
    backgroundColor: colors.teal,
  },
  itemIcon: {
    marginVertical: 20,
    textAlign: 'center',
  },
  itemText: {
    textAlign: 'center',
  },
  itemActiveText: {
    color: colors.white,
  },
  backButton: {
    position: 'absolute',
    top: 6,
    left: 10,
    zIndex: 1,
  },
});

export default App;
