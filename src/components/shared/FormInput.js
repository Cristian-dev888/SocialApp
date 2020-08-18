import React, { Component } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { colors, Icon } from "../../common/constants";

export default class FormInput extends Component {
  render() {
    const { autoFocus, onChangeText, textInputValue, placeholder, security, iconName } = this.props;

    return (
      <View style={styles.container}>
        <TextInput
          secureTextEntry={security}
          placeholder={placeholder}
          autoFocus={autoFocus}
          value={textInputValue}
          onChangeText={onChangeText}
          style={styles.textContent}
        />
        {
          iconName ?
          <Icon style={styles.iconStyle} size={20} name={iconName} color={colors.gray} />
          : null
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: "flex-start",
    justifyContent: "center",
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.gray,
  },
  textContent: {
    width: '100%',
    height:50,
    fontSize: 15,
    color: colors.gray,
    paddingRight: 20,
  },
  iconStyle:{
    position: 'absolute',
    right: 10
  }
});