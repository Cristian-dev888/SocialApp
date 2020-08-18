import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import CheckBox from 'react-native-check-box';
import {withNavigation} from 'react-navigation';

import { colors, Icon } from '../../common/constants.js';
import { commonStyles } from '../../common/styles.js';

class CameraListItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          checked:false
        }
    }

    navigateDetail() {
      this.props.navigation.push("EventDetail", {
          data: this.props.data
      });
    }

    render() {
        const { data, type, selectEditButton, selectDeleteBtn } = this.props;

        return (
          data ?
              <View
                style={styles.container}
              >
                <Icon size={20} name={'cams'} color={colors.gray}/>
                <View style={styles.nameContainer}>
                  <Text style={styles.name}>{data.name}</Text>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles.description}>{type ? 'Title : ': 'Position : '}</Text>
                    <Text style={styles.description}>{type ? data.title: data.position}</Text>
                    <Text style={styles.description}>{' | '}</Text>
                    <Text style={styles.description}>{type ? 'Position : ': 'Brand : '}</Text>
                    <Text style={styles.description}>{type ? data.position: data.title}</Text>
                  </View>
                </View>
                <View style={styles.iconContainer}>
                    <TouchableOpacity
                      onPress={selectEditButton}>
                      <Icon size={20} name={'edit'} color={colors.gray}/>
                    </TouchableOpacity>
                    <View style={commonStyles.marginRight10}></View>
                    {
                      type ?
                      <CheckBox
                        style={styles.checkBoxStyle}
                        checkedImage={<Icon size={20} name={'check-box-ticks'} color={colors.gray}/>}
                        unCheckedImage={<Icon size={20} name={'camera-check-box'} color={colors.gray}/>}
                        isChecked={this.state.checked}
                        onClick={() => this.setState({checked: !this.state.checked})}
                      />
                      :
                      <TouchableOpacity
                        onPress={selectDeleteBtn}>
                        <Icon size={20} name={'camera-delete'} color={colors.gray}/>
                      </TouchableOpacity>
                    }                   
                </View>
              </View>
            : null
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  nameContainer: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-around'
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  name: {
    fontSize: 18,
    color: colors.subText,
    fontWeight: '500',
    alignSelf:'flex-start'
  },
  description: {
    color: colors.gray,
    fontSize: 13,
  },
  checkBoxStyle: {
    justifyContent: 'flex-start'
  }
});

export default withNavigation(CameraListItem);