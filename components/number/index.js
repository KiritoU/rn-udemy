import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

export default function Number({ children, ...restProps }) {
  return (
    <View style={styles.container} {...restProps}>
      <Text style={styles.number}>{children}</Text>
    </View>
  );
}
