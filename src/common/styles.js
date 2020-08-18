import { StyleSheet } from "react-native";
import { colors } from "./constants";

export const commonStyles = StyleSheet.create({
  flexCotainer: {
    flex: 1,
    backgroundColor: colors.white
  },
  subContainer: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 20
  },
  divide: {
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomColor: colors.gray,
    borderBottomWidth: 1
  },
  margin15:{
    margin:15
  },
  marginRight10: {
    marginRight: 10
  },
  marginTop10: {
    marginTop: 10
  },
  marginTop20: {
    marginTop: 20
  },
  marginTop40: {
    marginTop: 40
  },
  marginBottom20: {
    marginBottom: 20
  },
  marginBottom40: {
    marginBottom: 40
  },
  marginBottom60: {
    marginBottom: 60
  }
});