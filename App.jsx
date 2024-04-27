import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  ImageBackground,
} from 'react-native';
import Test from './components/Test';
import girl from './images/girl.jpg';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex',
    alignItems: 'center',
    paddingTop: 10, // Adjust this value based on your design
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: height, // Subtracting the space taken by the text
    resizeMode: 'stretch',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    // backgroundColor: 'rgba(0,0,0,0.4)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={girl}
        resizeMode="cover"
        style={styles.image}
        blurRadius={0}>
        <View style={styles.overlay}>
          <Test />
        </View>
      </ImageBackground>
    </View>
  );
};

export default App;
