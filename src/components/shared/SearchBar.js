import React, { Component } from "react";
import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Icon, colors } from "../../common/constants";

let textInputRef = null;

export default class SearchBar extends Component {
  render() {
    const { onPress, autoFocus, onChangeText, onPressCancel, textInputValue } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.searchStyle}>
          <TouchableOpacity style={[styles.searchIconContainer]} onPress={onPress}>
            <Icon  size={20} name="search-box" />
          </TouchableOpacity>
          <View style={styles.textInputContainer}>
            <TextInput
              ref={c => {
                this.textInput = c;
                textInputRef = c;
              }}
              autoFocus={autoFocus}
              value={textInputValue}
              onChangeText={onChangeText}
              style={styles.textContent}
            />
          </View>
        </View>
        <TouchableOpacity onPress={onPressCancel} style={styles.cancelIconContainer}>
          <Icon size={20} name="search-close" />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 5,
    height:50,
    borderWidth: 1,
    borderColor: colors.gray,
  },
  searchStyle: {
    top: 2,
    flex: 1,
    flexDirection: "row"
  },
  center: {
    alignSelf: "center",
    alignContent: "center"
  },
  textInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center"
  },
  searchIconContainer: {
    left: 8,
    alignContent: "center",
    justifyContent: "center"
  },
  cancelIconContainer: {
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center"
  },
  textContent: {
    ...Platform.select({
      android: {
        padding: 0,
        margin: 0,
        borderWidth: 0
      },
      ios: {
        bottom: 1
      }
    }),
    flex:1,
    marginLeft: 24,
    marginRight: 10,
    color: colors.darkGray,
    fontSize: 15,
  }
});