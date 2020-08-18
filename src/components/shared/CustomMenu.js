import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Menu,  MenuOptions,  MenuOption, MenuTrigger } from 'react-native-popup-menu';

import { Icon, colors } from "../../common/constants";
import SmallButton from '../buttons/SmallButton';

export default class CustomMenu extends Component {
  render() {
    const { menus, selectItem} = this.props;

    const menuItems =menus.buttons.map((buttonName, i) => {
      return (
      <MenuOption          
        key={i}
        style={styles.menuOption} onSelect={() => selectItem(i)}>
        <SmallButton
          active={false} 
          iconName={menus.icons[i]} 
          iconColor={colors.gray} 
          buttonContent={buttonName} 
          iconSize={15} 
          iconStyle={styles.buttonItem}
          textStyle={styles.text}
        />
      </MenuOption>
      )
   });

    return (
      <Menu>
        <MenuTrigger style={styles.moreDetail}> 
          <Icon  size={20} name="more-info" />
        </MenuTrigger>
        <MenuOptions>
          {menuItems}
        </MenuOptions>
      </Menu>
    );
  }
}

const styles = StyleSheet.create({
  moreDetail: {
    alignItems: 'flex-end',
    padding: 10,
  },
  menuOption: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  buttonItem: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    backgroundColor: 'transparent',
    fontWeight: '500',
    marginLeft: 8,
    color: colors.gray
  },
});