// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

type Props = {
  headerText: string
};

// Make a component
const Header = (props: Props) => {
  const { textStyle, viewStyle } = styles;
  const { headerText } = props;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}> {headerText} </Text>
    </View>
  );
};

// Move element around on the screen - ex: center it
// Think to <View> Tag
const styles = {
  viewStyle: {
    backgroundColor: '#e5e5e5',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    // shadowOffset (dimensions of the shadow.
    // How tall - How wide it should be.
    // Width: 0 -> No shadowing on the left or the right hand side.
    // height:2 -> Verical shadow is two pixels
    shadowOffset: { width: 0, height: 2 },
    // shadowOpacity : darkness
    shadowOpacity: 0.5,
    elevation: 2,
    position: 'relative',
  },
  textStyle: {
    fontSize: 20,
  },
};

// Make the component available to other parts of the app.
export default Header;
