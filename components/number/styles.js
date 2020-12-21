import { StyleSheet } from 'react-native';

import Colors from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: Colors.accent,
    borderRadius: 5,
    marginVertical: 10,
  },
  number: {
    color: Colors.accent,
    fontSize: 22,
    paddingHorizontal: 6,
  },
});
